import {Router} from "express" ;
import { registerUser} from "../controllers/auth.controllers.js"


const router =  Router();
router.route("/regiser").post(registerUser);


export default router;
