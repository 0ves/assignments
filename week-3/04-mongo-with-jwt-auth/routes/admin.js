const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin , Course} = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken")


// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });

  res.json({
    ms: "admin created successfully ",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({
      username
  }, JWT_SECRET);
  console.log(token);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "incorrect email or password ",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price 
  
    const response = await Course.create({
          title,
          description,
          imageLink,
          price
    })

     res.json({
        Message:"course created successfully" , courseid:response._id
    })
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
