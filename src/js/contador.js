// =========================
// CONTADOR
// =========================

function contador(id, inicio, fim, tempo){

  let obj = document.getElementById(id);

  let atual = inicio;

  let incremento = Math.ceil(fim / tempo);

  let timer = setInterval(() => {

    atual += incremento;

    if(atual >= fim){
      atual = fim;
      clearInterval(timer);
    }

    obj.innerHTML = atual.toLocaleString();

  }, 30);

}

// =========================
// INICIAR CONTADORES
// =========================

contador("fans", 0, 826000000, 200);
contador("pilotos", 0, 22, 50);
contador("equipes", 0, 10, 50);