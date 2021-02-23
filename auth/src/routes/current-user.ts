import express from "express";
const router = express.Router();
import {currentUser} from '@piyushkashyap/common/build';

router.get("/api/users/currentuser", currentUser, (req, res) => {
  //Removed it as we are using currentuser middleware
  // if (!req.session?.jwt) {
  //   return res.send({ currentUser: null });
  // }
  // try {
  //   const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!); //exclamation after JWT_KEY is a way which tells typescript not to worry if the env variable has a value or not
  //   res.send({currentUser: payload});
  // } catch (err) {
  //   res.send({currentUser: null});
  // }
  res.send({currentUser: req.currentUser || null});
});
export { router as currentUserRouter };
