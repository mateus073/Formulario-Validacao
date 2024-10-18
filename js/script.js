// variaveis que irei usar
const forms = document.getElementById('formulario') //formualrio completo
const ipts = document.querySelectorAll('.validar') //todos os inputs
const spans = document.querySelectorAll('.spanvalidar')// todos os spans que iram exibir a msg de erro 
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/; //codigo pronto pra validar email 


// funcao responsavel por nao deixar enviar o formulario vazio
// ainda nao entende direito o seu funcionamento
forms.addEventListener('submit', (event) => {
    event.preventDefault()
    validarName()
    validarEmail()
    validarSenha()
})



// funcao que recebe no seu parametro o index do elemento que ira aplicar o estilo de erro (borda vermelha e exibe span que contem a msg de erro)
function setErros(index) {
    ipts[index].style.border = '3px solid #a21313'
    spans[index].style.display = 'block'
}


// funcao que ira tira a borda red e ocultar novamente os span de erro
function tiraErro(index2) {
    ipts[index2].style.border = 'none'
    spans[index2].style.display = 'none'
}





// funcao que ira validar o nome se ter mais de 3 letras
function validarName() {
    if (ipts[0].value.length < 3) {
        console.log('senha deve ter mais de 3 caractes')
        setErros(0)
    } else {
        console.log('nome tem mais de 3 caractes')
        tiraErro(0)
    }
}




// funcao que ira validar o email vendo se ele tem as letras que tem na variavel email
function validarEmail() {
    if (!emailRegex.test(ipts[1].value)) {
        setErros(1)
    } else {
        tiraErro(1)
        console.log('email invalido')
    }
}


//funcao responsavel por validar a senha 
//se for valida ela tambem exibe o confirmar senha 
function validarSenha() {
    if (ipts[2].value.length < 8) {
        setErros(2) // chama funcao q aplica estilo de erro
        forms.querySelector('#confime-senha').style.display = 'none' //oculta o confirmar senha
    } else {
        tiraErro(2) // chama funcaoq eu vai tirar estilo de erro 
        forms.querySelector('#confime-senha').style.display = 'block'; //exibe o confirmar senha
    }
}


// reponsavel por validar a senha vendo se ela e identica a primeira senha 
function confirmarSenha() {
    if (ipts[2].value === ipts[3].value && ipts[2].value.length === ipts[3].value.length) {
        tiraErro(3)
    }
    else {
        setErros(3)
    }
}


//reponsavel pelo botao que ira exiber ou ocultar a senha mudando o valor do type pra passwoed ou text
function exibeSenha(indexsenha) {
    if (ipts[indexsenha].getAttribute('type') === 'password') {
        ipts[indexsenha].setAttribute('type', 'text')
    } else {
        ipts[indexsenha].setAttribute('type', 'password')
    }
}
