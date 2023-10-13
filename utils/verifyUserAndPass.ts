import { NextApiRequest, NextApiResponse } from "next";

export function verifyUserAndPass(req: NextApiRequest,
    res: NextApiResponse) {
    const authHeader = req.headers.authorization;


    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.status(401).json({ error: 'Authentication required.' });
        return;
    }
    
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
      const [username, password] = credentials.split(':');
    
      const expectedUsername = process.env.API_USERNAME;
      const expectedPassword = process.env.API_PASSWORD;
    
      if (username !== expectedUsername || password !== expectedPassword) {
        res.status(403).json({ error: 'Invalid credentials.' });
        return;
      }
          
    if(req.body.username != process.env.POST_USERNAME && req.body.password != process.env.POST_PASSWORD){
      res.status(401).json({ error: 'Authentication required.' });
      return;
    }
    
}