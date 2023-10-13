import type { NextApiRequest, NextApiResponse } from "next";
import { verifyUserAndPass } from "../../utils/verifyUserAndPass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
 
    if(req.method === 'POST'){ 
        try {
            if(req.body.username === 'ggior' && req.body.pass === '123'){
                return res.status(200).json({message: 'accepted'})
            }
            return res.status(401).json({message: 'unauthorized'})
           
        } catch (error) {
            return res.status(500).json('error')
        }
    }
}
