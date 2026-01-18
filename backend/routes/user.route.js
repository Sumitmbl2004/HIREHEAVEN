
// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             })
//         }
//         const decode = await jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         };
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;




// import express from "express";
// import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// // router.get("/logout", logout);
// router.post("/profile/update", isAuthenticated, updateProfile);

// export default router;



import express from "express";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// ✅ LOGOUT ROUTE (ENABLED)
router.post("/logout", isAuthenticated, logout);

router.post("/profile/update", isAuthenticated, updateProfile);

export default router;

