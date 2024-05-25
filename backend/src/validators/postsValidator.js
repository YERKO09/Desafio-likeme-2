const { param, body, validationResult} = require('express-validator')

const updateValidator = [
    param('id').notEmpty().withMessage('Debes pasar un ID'),
    body('likes').isInt().withMessage('Debe ser un número entero'),
    (req, res, next) => {
       
        const errors = validationResult(req).mapped()
        if (Object.keys(errors).length) {
            res.send(errors)
        } else {
            next()
        }
    }
]

const addValidator = [

    body('titulo').notEmpty().withMessage('Debes agregar un título'),     
    body('descripcion').notEmpty().withMessage('debes agregar una descripción'),
    body('img').notEmpty().withMessage('debes agregar una imagen'),
    body('likes').optional().isInt().withMessage('Debe ser un número entero'),

    (req, res, next) => {

        const errors = validationResult(req).mapped()

        if (Object.keys(errors).length) {
            res.status(400).send(errors)
        } else {
            next()
        }

    }
]

const deleteValidator = [
    param('id').notEmpty().withMessage('Debes pasar un ID').
    isInt().withMessage('Debe ser un entero'),(req, res, next) => {
       
        const errors = validationResult(req).mapped()
        if (Object.keys(errors).length) {
            res.send(errors)
        } else {
            next()
        }
    }
]

const postsValidatorCollection = {
    updateValidator,
    addValidator,
    deleteValidator
}

module.exports = {
    postsValidatorCollection
}