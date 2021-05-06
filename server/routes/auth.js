const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");


//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

  //token generation and save in cookies
  // const token = await newUser.generateAuthToken();
  // res.cookies("jwt", token, {
  //   expires: new Date(Date.now() + 60000),
  //   httpOnly: true
  // });

    //save user and respond
    const user = await newUser.save();
    console.log("page " + user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }

  
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    // const token = await newUser.generateAuthToken();
    // res.cookies("jwt", token, {
    //   expires: new Date(Date.now() + 60000),
    //   httpOnly: true
    // });

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});


//LOGOUT
// router.post("/logout", auth, async (req, res) => {
//   try {
//     res.clearCookie("jwt");
//     await req.user.save();
//     res.render("login");
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });
router.post("/logout", async (req, res) => {
  try {

    res.render("login");
  } catch (err) {
    res.status(500).json(err)
  }
});


module.exports = router;
