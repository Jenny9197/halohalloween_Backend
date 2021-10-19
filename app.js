const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const replyRouter = require('./routers/replyRouter');
const connect = require('./schemas');
<<<<<<< HEAD
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDoc = yamljs.load('./swagger/api.yaml');
const cors = require('cors');//npm i cors

// CORS = 인가받지 않은 IP의 API요청을 제한하는 놈.

=======

//yamljs & swagger install
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');

// CORS 
const cors = require('cors');
app.use(cors());
>>>>>>> d515dcf2310efa195633c3917454b3300b92e768


// const whitelist = [process.env.WHITE_LIST];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("!!!PERMISSION DENIED!!!"));
//     }
//   },
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect();
app.use('/user', [userRouter]);
app.use('/post', [postRouter]);
app.use('/reply', [replyRouter]);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//convert yaml to js
const swaggerDoc = yamljs.load('./swagger/api.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
//port
app.listen(port, () => {
    console.log(`Server On http://localhost:${port}`);
});