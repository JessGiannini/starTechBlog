const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    var blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["user"],
        },
      ],
    });
    console.log("blog data stuff", blogData);
    // Serialize data so the template can read it
    var blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
