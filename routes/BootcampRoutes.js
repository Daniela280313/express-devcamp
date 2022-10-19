const express = require ('express')

const router = express.Router()

//listar todos los bootcamps
router.get('/', (req , res)=>{
    res.status(200)
    .json({
        "succes" : true,
        "data" : "aqui se van a listar todos los bootcamps"
    })
})

//listar un bootcamp por id
router.get('/:id', (req , res)=>{
    res.status(200)
    .json({
        "succes" : true,
        "data" : `aqui se va a mostrar el bootcamp cuyo id es ${req.params.id}`
    })
})

//crear un nuevo bootcamp
router.post('/' , (req , res)=>{
    res.status(201)
    .json({
        "succes" : true,
        "data" : "aqui se van a crear todos los bootcamps"
    })
})

//actualizar u bootcamp por id
router.put('/:id' , (req , res)=>{
    res.status(200)
    .json({
        "succes" : true,
        "data" : `aqui se va a actualizar el bootcamp cuyo id es ${req.params.id}`
    })
})

//eliminar un bootcamp por id
router.delete('/:id', (req , res)=>{
    res.status(200)
    .json({
        "succes" : true,
        "data" : `aqui se va a eliminar el bootcamp cuyo id es ${req.params.id}`
    })
})

module.exports = router