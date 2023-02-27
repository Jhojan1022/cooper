import app from './app.js'

const main = () => {
    app.listen(app.get("port"))
    console.log("Servidor en ejecucíon, puerto " + app.get("port"))
};

main();