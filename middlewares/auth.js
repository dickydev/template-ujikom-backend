import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "Access Denied : No Token Provided"});
    }

    try {
        const decoded = jwt.verify(token, "SECRETKEY");
        req.user = decoded;

        next();
    } catch (error) {
        res.status(403).json({message: "Invalid or Expired Token", error})
    }
}