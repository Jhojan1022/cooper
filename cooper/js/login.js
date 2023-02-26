const loginForm = document.getElementById("login");


async function validarUsuario(t) {
    const userData = await dta(t);
    for (let index = 0; index < userData.length; index++) {
        if (userData[index].id_usuario == loginForm.soid.value.toUpperCase() & userData[index].contraseña == loginForm.password.value){
            localStorage.setItem("id", userData[index].id_usuario);
            localStorage.setItem("nombre", userData[index].nombre)
            sessionStorage.setItem("id", userData[index].id_usuario);
            sessionStorage.setItem("nombre", userData[index].nombre)
            location.href = location.origin + "/cooper/index.html";
        }
    }
    alert("Inicio de sesión invalido")
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario("getUsuarios")
})