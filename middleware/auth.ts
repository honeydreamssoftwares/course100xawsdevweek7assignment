import jwt from 'jsonwebtoken'
const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

const authenticateJwt = (req:any, res:any, next:any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err:any, user:any) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export  {
    authenticateJwt,
    SECRET
}