const router = require('express').Router()

const { get_posts_controller, add_post_controller, update_post_controller, delete_post_controller } = require('../../controllers/posts/postsController')
const { postsValidatorCollection } = require('../../validators/postsValidator')

router.get('/get-all', get_posts_controller)

router.post('/add', postsValidatorCollection.addValidator, add_post_controller)

router.put('/update/:id', postsValidatorCollection.updateValidator, update_post_controller)

router.delete('/delete/:id', postsValidatorCollection.deleteValidator, delete_post_controller)

module.exports = router