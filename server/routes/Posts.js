const express = require('express');

const router = express.Router();

const { Posts } = require('../models');

const { validateToken } = require('../middlewares/AuthMiddleware');

router.get('/', validateToken, async (req, res) => {
  // findall 매소드로 하고 include / exclude로 넣고 싶은거랑 빼고싶은거 뺄수있음
  const listOfPosts = await Posts.findAll();
  // const listOfPosts = await Posts.findAll({ include: [Likes] });
  // const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });
  // res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
  res.json(listOfPosts);
});

// router.get('/byId/:id', async (req, res) => {
//   const id = req.params.id;
//   const post = await Posts.findByPk(id);
//   res.json(post);
// });

// router.get('/byuserId/:id', async (req, res) => {
//   const id = req.params.id;
//   const listOfPosts = await Posts.findAll({
//     where: { UserId: id },
//     // include: [Likes],
//   });
//   res.json(listOfPosts);
// });

// router.post('/', validateToken, async (req, res) => {
//   const post = req.body;
//   post.username = req.user.username;
//   post.UserId = req.user.id;
//   await Posts.create(post);
//   console.log(UserId);
//   res.json(post);
// });

module.exports = router;
