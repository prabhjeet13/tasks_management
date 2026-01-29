import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const Auth = (res,res,next) => {
    try {
        const token = req.headers["authorization"] ? req.headers["authorization"].split(" ")[1] : null;

        if(!token)
        {
            return res.status(403).json({
                flag: 0,
                flag_message : 'token is missing'
            });
        }

        const tokenDecode = jwt.verify(token,process.env.ACC_TOKEN_SECRET);

        req.user = tokenDecode;

        next();

    }catch(error)
    {
        return res.status(500).json({
            flag: 0,
            flag_message : 'something went wrong'
        })
    }
}