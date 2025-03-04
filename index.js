const exp = require('express');
const app = exp();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extendend: false}));
app.use(exp.json());

app.listen(process.env.PORT, ()=>{
    console.log('servidor en linea');
})