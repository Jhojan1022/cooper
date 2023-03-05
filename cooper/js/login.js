const loginForm = document.getElementById("login");
//if (userData[index].id_usuario == loginForm.soid.value.toUpperCase() & userData[index].contraseña == loginForm.password.value){

async function validarUsuario(t) {
    const userData = await dta(t);
    const soid = userData.find(({ id_usuario }) => id_usuario === loginForm.soid.value.toUpperCase());

    if (soid != undefined) {
        if ( soid.contraseña == loginForm.password.value) {
            localStorage.setItem("id", soid.id_usuario)
            localStorage.setItem("nombre", soid.nombre)
            sessionStorage.setItem("id", soid.id_usuario)
            sessionStorage.setItem("nombre", soid.nombre)
            location.href = location.origin + "/cooper/index.html";
        }
    } else {
        alert("Inicio de sesión invalido")
    }

    console.log(soid)
    console.log(soid.contraseña)
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario("getUsuarios")
})