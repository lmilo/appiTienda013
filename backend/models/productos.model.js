const mongoose = require('../config/database');

const schemaProducto = new mongoose.Schema({
    referencia:{
        type: [Number,"la referencia debe de ser entera"],
        required: [true, "la referencia esr obligatoria"],
        unique: true,
    },
    nombre:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    precio:{
        type: [mongoose.Types.Decimal128, "El precio debe de ser numerico"],
        default: 0,
        min: [0.0, "los precios no pueden ser negativos"],
    },
},{versionKey:false});

const producto = mongoose.model('Producto',schemaProducto);
module.exports = producto;