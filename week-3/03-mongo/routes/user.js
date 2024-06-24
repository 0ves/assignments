const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    msg: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const user = req.body.username;
  const coursid = req.params.courseId;
  try {
    await User.updateOne(
      {
        username: user,
      },
      {
        $push: {
          purchasedCourses: coursid,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }

  res.json({
    msg: "perches completed",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({ username: username });
  const courses = await Course.find({ _id: { $in: user.purchasedCourses } });
// console.log(user);
  res.json({
    course:courses
  })
});

module.exports = router;
