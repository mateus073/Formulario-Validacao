let divBemVindo = document.querySelector('#bemVindo')
let formulario = document.querySelector("#formulario")


function consulta() {
    let spanName = document.querySelector('#spanName')

    let nameSotarage = localStorage.getItem("name")
    // se o nome nao for null 
    // se o nome for null (inexistente ele vai e armazena ele no local storage)
    if (nameSotarage) {
        divBemVindo.style.display = "flex"
        formulario.style.display = "none"

        spanName.textContent = `seja bem vindo ${nameSotarage}`
    } else {
        divBemVindo.style.display = "none"
        formulario.style.display = "flex"
    }
}

// funçao que armazena o nome no local storage
// chama a funçao de colsulta e exibe boa vinda 
//limpa o local storage pra no proximo login nao ficar salvo o msm nome 
function armazena() {
    let nameIpt = document.querySelector("#c-nome").value
    localStorage.setItem("name", nameIpt)
    nameIpt.value = ""

    consulta()
}

// botao de voltar que oculta a div de bem  vindo e exibe a de formulario
function voltar() {
    divBemVindo.style.display = "none"
    formulario.style.display = "flex"
    localStorage.removeItem("name")
}




