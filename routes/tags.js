const express = require('express');
const posts = require('./posts');
const fakeTags = require('../data/tags');

const router = express.Router();

// Get a list of posts
router.get('/', (req, res) => {
  res.json(fakeTags);
});

// Get a single tag
router.get('/:tagId', (req, res) => {
  // Find the tag in the array that has the id given by req.params.tagId
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const tagId = Number(req.params.id);
  const foundTag = fakeTags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'tag not found',
    });
  }
  return res.json(foundTag);
});

router.use('/:tagId/posts', posts);

module.exports = router;
