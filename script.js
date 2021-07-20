let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');

let hh = 0;
let mm = 0;
let ss = 0;

let atualizar;

function atualizarCronometro() {
    
    ss++;
    
    if (ss < 10) {
        segundos.innerHTML = "0"+ss;
    } else {
        segundos.innerHTML = ss;
    }

    if (ss == 60) {
        segundos.innerHTML = "00";
        ss = 0;
        mm++;
        if (mm < 10) {
            minutos.innerHTML = "0"+mm;
        } else {
            minutos.innerHTML = mm;
        }
    }

    if (mm == 60) {
        minutos.innerHTML = "00";
        mm = 0;
        hh++;
        if(hh < 10) {
            horas.innerHTML = "0"+hh
        } else {
            horas.innerHTML = hh
        }
    }

}

document.querySelector('.botao-iniciar').addEventListener('click', ()=> {
    atualizar = setInterval(atualizarCronometro, 1000);
});

document.querySelector('.botao-pausar').addEventListener('click', ()=> {
    clearInterval(atualizar);
});

document.querySelector('.botao-zerar').addEventListener('click', ()=> {
    clearInterval(atualizar);   
    
    horas.innerHTML = "00";
    minutos.innerHTML = "00";
    segundos.innerHTML = "00";

    hh = 0;
    mm = 0;
    ss = 0;
});
