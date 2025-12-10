// controllers/speechController.js
import { createClient } from "@deepgram/sdk";
import { Readable } from "stream";
// import clueimage from "../services/clueimage.js";
const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

export const Generatespeech = async (req, res) => {
  try {
    // No file found
    if (!req.file) {
      return res.status(400).json({
        error: "No audio file received",
      });
    }
    console.log("Audio received:", req.file.mimetype);
    const audioBuffer = req.file.buffer; // binary audio from frontend
    // Send to Deepgram
    const audioStream = Readable.from(audioBuffer);
    const response=await deepgram.listen.prerecorded.transcribeFile(
              audioStream,
      {
         mimetype: req.file.mimetype || "audio/webm",
        model: "nova",
        smart_format: true,
      }
    );
    // const response = await deepgram.transcription.preRecorded(
    //   {
    //     buffer: audioBuffer,
    //     mimetype: req.file.mimetype || "audio/webm",
    //   },
    //   {
    //     model: "nova",
    //     smart_format: true,
    //   }
    // );
    console.log(response);
    const transcript =
      response.result.results.channels[0].alternatives[0].transcript || "";

    console.log("Transcription:", transcript);

    return res.status(200).json({
      success: true,
      transcript,
    });
  } catch (err) {
    console.error("Deepgram Error:", err);

    return res.status(500).json({
      success: false,
      error: "Transcription failed",
    });
  }
};
