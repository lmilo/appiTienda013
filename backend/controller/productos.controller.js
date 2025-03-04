const modeloProducto = require('../models/productos.model');

exports.buscar = async (req,res)=>{
    let resultado = await modeloProducto.find({});
    console.log(resultado)
    if (resultado){
        res.json({"resultado" : resultado})
    }else{
        res.json({"Error" : "No se encontraron productos"})                                                                     
    }
};

exports.buscarPorNom = async (req,res)=>{
    let resultado = await modeloProducto.findOne({"nombre":req.params.x});
    console.log(resultado)
    if (resultado){
        res.json(resultado)
    }else{
        res.json({"Error" : "No se encontraron productos"})                                                                     
    }
};

exports.buscarPorRef = async (req,res)=>{
    let resultado = await modeloProducto.findOne({"referencia":req.params.ref});
    console.log(resultado)
    if (resultado){
        res.json(resultado)
    }else{
        res.json({"Error" : "No se encontraron productos"})                                                                     
    }
};

exports.insetar = async (req,res)=>{
    const nuevoProducto = {
        "referencia": req.body.referencia,
        "nombre": req.body.nombre,
        "precio": req.body.precio
    };
    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.json({"Resultado" : "Producto insertado"})
    else
        res.json({"Error" : "No se pudo insertar el producto"})
}; 

exports.actualizar = async (req,res)=>{
    const productoEditado ={
        "referencia": req.params.ref, 
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto
    };
    let Actualizacion = await modeloProducto.findOneAndUpdate({"referencia":req.params.ref}, productoEditado);
    if (Actualizacion)
        res.status(200).json({"mensaje": "actualizacion exitosa"})
    else
        res.status(404).json({"mensaje": "Producto no encontrado"})


};

exports.eliminar = async (req,res)=>{
    console.log(req.params.ref , req.body.referenciaProducto)
    let eliminacion = await modeloProducto.findOneAndDelete({"referencia":req.params.ref});
    if (eliminacion)
        res.status(200).json({"mensaje": "Producto eliminado"})
    else
        res.status(404).json({"mensaje": "Producto no encontrado"})
};  