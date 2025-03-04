const exp = require('express');
const router = exp.Router();
const controlProducto = require('../backend/controller/productos.controller');

router.get('/productos',controlProducto.buscar);
router.get('/productos/:x',controlProducto.buscarPorNom);
router.get('/productos/ref/:ref',controlProducto.buscarPorRef);
router.post('/productos',controlProducto.insetar);
router.put('/productos-actualizar/:ref',controlProducto.actualizar);
router.delete('/productos-eliminar/:ref',controlProducto.eliminar);

module.exports = router