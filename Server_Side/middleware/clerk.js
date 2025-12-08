// middleware/clerk.js
// Re-export the Clerk middleware you already used server-side.
// Reason: use this to protect parent-only endpoints.

// import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

// const requireClerkAuth = ClerkExpressRequireAuth();

// export { requireClerkAuth };
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const protect = ClerkExpressRequireAuth();

export { protect };
