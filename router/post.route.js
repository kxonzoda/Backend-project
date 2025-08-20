const express = require('express')
const postController = require('../controllers/post.controller')
const logger = require('../middlewares/logger')

const router = express.Router()

router.get('/get', postController.getAll)     // GET /api/post/get-all
router.post('/create', logger, postController.create)    // POST /api/post/create
router.delete('/:id', postController.delete)     // DELETE /api/post/:id
router.put('/:id', postController.edit)          // PUT /api/post/:id
router.get('/:id', postController.getOne)

module.exports = router
