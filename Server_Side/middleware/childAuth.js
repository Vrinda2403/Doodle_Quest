// middleware/childAuth.js
// Protect backend routes meant for children. Verifies JWT and attaches child info to req.

import jwt from "jsonwebtoken";

export function childAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Child token required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "child") return res.status(403).json({ error: "Not allowed" });

    req.child = decoded; // { childId, parentClerkId, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
