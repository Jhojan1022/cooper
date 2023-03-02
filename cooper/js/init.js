function graficar(ctxid, labelp, labelsp, datap) {
    let ctx = document.getElementById(ctxid).getContext('2d');
    var obj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsp,
            datasets: [{
                label: labelp,
                data: datap,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}