// appRouter es la funcion encargada de agregar las rutas de la API
const appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send({mensaje: "Bienvenido a API Rest"});
    })
  }
  
  // Exporta la funcion para su uso
  module.exports = appRouter; 