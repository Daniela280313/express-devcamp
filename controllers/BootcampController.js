

exports.getBootcamps = (req , res)=>{
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : `todos los bootcamp`
        })
    }

    exports.getsingleBootcamp = (req , res)=>{
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : `single bootcamp ${req.params.id}`
        })
    }

    exports.createBootcamp = (req , res)=>{
        res.status(201)
        .json({
            "succes" : true,
            "data" : "crear bootcamp"
        })
    }

    exports.updateBootcamp = (req , res)=>{
        res.status(200)
        .json({
            "succes" : true,
            "data" : `actualizar bootcamp ${req.params.id}`
        })
    }

    exports.deleteBootcamp = (req , res)=>{
        res.status(200)
        .json({
            "succes" : true,
            "data" : `eliminar bootcamp ${req.params.id}`
        })
    }

