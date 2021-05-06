const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/forgot', userCtrl.forgotPassword)

router.post('/reset', auth, userCtrl.resetPassword)

router.get('/infor', auth, userCtrl.getUserInfor)

//router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

//router.patch('/update', auth, userCtrl.updateUser)

//router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)

//router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)

//REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     //generate new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     //create new user
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPassword,
//     });

//     //save user and respond
//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// //LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("user not found");

//     const validPassword = await bcrypt.compare(req.body.password, user.password)
//     !validPassword && res.status(400).json("wrong password")

//     res.status(200).json(user)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });



module.exports = router;
