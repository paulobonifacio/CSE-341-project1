const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'A simple Express Contacts API'
    },
    servers: [
      {
        url: 'https://cse-341-project1-865m.onrender.com',
        description: 'Local server'
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
