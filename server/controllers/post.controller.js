import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({posts});
  });
}

export function search(req, res) {

  res.json({
    "incredients": [
      {
        "name": "butten",
        "key": "butten",
        "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",

        "replacements": [
          {
            "name": "coconotoil",
            "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",
            "method": {}
          }
        ]
      }
    ]
  });

}

export function getIncredients(req, res) {

  res.json({
    "incredients": [
      {
        "name": "butten",
        "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",

        "replacements": [
          {
            "name": "coconotoil",
            "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",
            "method": {}
          }
        ]
      }
    ]
  });

}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), {lowercase: true});
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({post: saved});
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({cuid: req.params.cuid}).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({post});
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({cuid: req.params.cuid}).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
