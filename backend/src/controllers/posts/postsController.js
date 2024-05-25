const { PostsFunction } = require('../../database/models/postsModel')


const get_posts_controller = async (req, res, next) => {

    try {
        const response = await PostsFunction.getPosts()
        res.send(response)

    } catch (error) {
        console.log('ERROR!');
        next(error)
    }
}

const add_post_controller = async (req, res, next) => {

    try {
        const { titulo, img, descripcion, likes } = req.body

        const response = await PostsFunction.addPost(titulo, img, descripcion, likes)

        res.send(response)

    } catch (error) {
        console.log('ERROR!');
        next(error)
    }
}

const update_post_controller = async (req, res, next) => {

    try {
        const { id } = req.params;
        const { likes } = req.body;
        // const { likes } = req.query;

        const response = await PostsFunction.updatePost(id, likes)

        res.json(response);

    } catch (error) {
        console.log('ERROR!');
        next(error);
    }
}

const delete_post_controller = async (req, res, next) => {

    try {
        const { id } = req.params;
        const response = await PostsFunction.deletePost(id)

        res.json(response)

    } catch (error) {
        console.log('ERROR!');
        next(error)
    }
}


module.exports = {
    get_posts_controller,
    add_post_controller,
    update_post_controller,
    delete_post_controller
}