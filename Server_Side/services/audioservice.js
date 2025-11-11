import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import { Readable } from 'stream';
import dotenv from "dotenv";
function audioService(story)
{
   

dotenv.config();

async function generateAndPlayAudio() {
  // Initialize ElevenLabs client (API key auto-picked from environment if set)
  const elevenlabs = new ElevenLabsClient();

  // Generate audio from text
  const audio = await elevenlabs.textToSpeech.convert('JBFqnCBsd6RMkjVDRZzb', {
    text: `${story}`,
    modelId: 'eleven_multilingual_v2',
    outputFormat: 'mp3_44100_128',
  });

  // Convert the returned audio into a readable stream
  const reader = audio.getReader();
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) {
        this.push(null);
      } else {
        this.push(value);
      }
    },
  });

  // Play the generated stream
  await play(stream);
}

generateAndPlayAudio().catch(console.error);
}

export default audioService;