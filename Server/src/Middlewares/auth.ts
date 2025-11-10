import { clerkClient } from '@clerk/clerk-sdk-node';
import type { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  auth?: {
    userId: string;
    sessionId: string;
  };
}

export const validateClerkToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const [sessionId, sessionToken] = token.split('_');
    
    if (!sessionId || !sessionToken) {
      return res.status(401).json({ error: 'Invalid token format' });
    }

    const session = await clerkClient.sessions.verifySession(sessionId, sessionToken);
    
    if (!session) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.auth = {
      userId: session.userId,
      sessionId: session.id
    };

    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
}