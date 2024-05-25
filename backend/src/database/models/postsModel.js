const database = require('../dbConfig')


const getPosts = async () => {

    try {

        const consulta = "SELECT * FROM posts"
        const { rows } = await database.query(consulta)         

        if (rows.length) {

            return {
                msg: 'lista de Posts',
                data: rows
            }

        } else {

            return {
                msg: 'Error al cargar los Posts',
                data: []
            }
        }

    } catch (error) {
        throw error
    }
}

const addPost = async (titulo, img, descripcion, likes) => {

    try {

        const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4) RETURNING *"
        const values = [titulo, img, descripcion, likes]

        const result = await database.query(consulta, values)

        if (result.rowCount) {

            return {
                msg: 'Post creado',
                data: result.rows[0]
            }

        } else {
            return {
                msg: 'No se pudo agregar el post',
                data: []
            }
        }

    } catch (error) {

        throw error
    }
}

const updatePost = async (id, likes) => {

    try {
 
        const consulta = `UPDATE posts SET likes = $2 WHERE id = $1 RETURNING *`
        const values = [id, likes]

        const result = await database.query(consulta, values)

        if (result.rowCount) {

            return {
                msg: 'Post modificado',
                data: result.rows[0]
            }

        } else {
            return {
                msg: 'No se pudo modificar el post',
                data: []
            }
        }

    } catch (error) {

        const err = new Error('Error en la consulta');

        err.msg = 'Bad Request'
        err.status = '400'
        err.origin = 'Database'
        err.model = 'Posts'
        err.details = error.message

        throw err;
    }
}

const deletePost = async (id) => {

    try {

        const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
        const values = [id]

        const result = await database.query(consulta, values)

        if (result.rowCount) {

            return {
                msg: 'Post eliminado',
                data: result.rows[0]
            }

        } else {
            return {
                // msg: 'No se pudo eliminar el post',
                msg: 'El post que intentas eliminar no existe',
                data: []
            }
        } 

    } catch (error) {

        const err = new Error('Error en la consulta');

        err.msg = 'Bad Request'
        err.status = '400'
        err.origin = 'Database'
        err.model = 'Posts'
        err.details = error.message

        throw error
    }
}


const PostsFunction = {
    addPost,
    getPosts,
    updatePost,
    deletePost
}


module.exports = { PostsFunction }