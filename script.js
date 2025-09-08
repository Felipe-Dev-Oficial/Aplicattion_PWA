if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Seu Service Worker foi registrado"))
    .catch(err => console.log("Erro ao registrar Service Worker:", err))
}

let vlrOrcamento, vlrDespesa, totalDespesa, orcamentoFinal, qtdDespesa, mes, opcao

    totalDespesa =0;
    vlrOrcamento=0;
    vlrDespesa=0;


const btn = document.getElementById("btn1");
const form = document.getElementById("form");
const enviar = document.getElementById("enviar")

const btn2 = document.getElementById("btn2");
const form2 = document.getElementById("form2");

 btn.addEventListener("click", () => {
  // alterna exibição do formulário
  form.style.display = form.style.display === "none" ? "block" : "none";
})

enviar.addEventListener("click", function(event){
    event.preventDefault() //impede o envio do form

    const nmDespesa = document.getElementById("nmDespesa").value
    const vlrDespesa = document.getElementById("vlrDespesa").value

    console.log(nmDespesa, vlrDespesa)
})

btn2.addEventListener("click", () => {
    form2.style.display = form2.style.display === "none" ? "block" :  "none";})

    //     function calcularDespesa(){
//         vlrDespesa = 0;
//     // window.alert(`tudo ok${totalDespesa}`)
//     }


