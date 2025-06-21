import jwt from 'jsonwebtoken'

const AuthMiddleware = {
    handle: async (req, res, next) => {
         const token = req.headers.token;
        try {
            await jwt.verify(token, process.env.TOKEN_KEY);
            next();
        } catch(e) {
            return res.json({
                message: 'Sem autorização. ' + e
            })
        }
    }
}

export default AuthMiddleware;