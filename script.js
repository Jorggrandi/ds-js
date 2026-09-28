const form = document.querySelector("form")
const inputEmail = document.querySelector("#email-input")
const passwordEmail = document.querySelector("#password-input")
// Cria a árvore DOM 

// Se não encontrar no localstorage cria os dados de usuários
if(!localStorage.getItem("users")){
    const userData = [{
        login:"jorgeskina",
        password:"@Diana178"
    },{
        login:"jorggrandi",
        password:"admin123"
    }]

    // Converte pra string pq local storage só guarda string
    const formatedData = JSON.stringify(userData)
    // Guarda o item users: dados aceitos
    localStorage.setItem("users", formatedData)
}
// Ao enviar o form
form.addEventListener(("submit"), (e) => {
    // Previne o padrão (enviar)
    e.preventDefault()
    
    // Pega os dados de email e senha
    const email = inputEmail.value 
    const password = passwordEmail.value

    // Converte o item users guardado no localstorage para seu valor de array de objetos
    const users = JSON.parse(localStorage.getItem("users"))

    // monta um objeto com as credenciais do usuário
    const userCredentials = {
        login:email,
        password:password
    }

    // Uma arrow function pra achar o usuário => mapeia os usuários e reotnra aquele cujo login e senha batem com o guardado
    const userFinded = users.find((user) => {
        return userCredentials.login === user.login && userCredentials.password === user.password
    })

    // Se não achar o usuário mande o erro
    if(!userFinded){
        alert("Usuário ou senha não encontrado.")
    }
    // Se achar valide como sucesso
    else{
        alert(`Seja bem vindo ${userFinded.login}`)
        localStorage.setItem("userAuthed", email)
        window.location.href = "https://github.com"
    }
})