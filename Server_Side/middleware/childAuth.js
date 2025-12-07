import jwt from "jsonwebtoken";

export function childAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Child login required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.mode !== "child") {
      return res.status(403).json({ error: "Not allowed" });
    }

    req.child = decoded; // Attach child info to request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
