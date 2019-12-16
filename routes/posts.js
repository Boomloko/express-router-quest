const express = require('express');
// const comments = require('./comments');
const fakePosts = require('../data/posts');

const router = express.Router({ mergeParams: true });

// Get a list of posts
// router.get('/', (req, res) => {
//   res.json(fakePosts);
// });

// // Get a single post
// router.get('/:postId', (req, res) => {
//   // Find the post in the array that has the id given by req.params.postId
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   const postId = Number(req.params.id);
//   const foundPost = fakePosts.find((post) => post.id === postId);
//   if (!foundPost) {
//     return res.status(404).json({
//       error: 'Post not found',
//     });
//   }
//   return res.json(foundPost);
// });
// Get a list of comments
router.get('/', (req, res) => {
  // If we forget { mergeParams: true }, req.params.postId will be `undefined`
  const tagId = Number(req.params.tagId);
  // Keep only comments whose post_id matches the postId parameter
  const tagPosts = fakePosts.filter((post) => post.tag_ids.includes(tagId));
  res.json(tagPosts);
});

// router.use('/:postId/comments', comments);

module.exports = router;
