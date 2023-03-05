async function perfil() {
    const response = await fetch(url + "getUsuario");
    const data = await response.json();
    console.log("aqui")

    const filtro = data.find(obj => obj.id_usuario === sessionStorage.getItem("id"));
    console.log(filtro)
}

perfil()




graficar("mirendimiento_mes", "Rendimiento por mes en horas", ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"], [7000, 5000, 9000, 7000, 5000, 9000, 7000, 5000, 9000, 7000, 5000, 9000]);

graficar("mirendimiento_dia", "Rendimiento por dia en horas",
    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    ],
    [
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        0,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000,
        7000,
        5000,
        9000
    ]);

