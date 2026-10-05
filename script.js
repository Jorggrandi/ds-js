const form = document.querySelector("form");
const inputEmail = document.querySelector("#email-input");
const passwordEmail = document.querySelector("#password-input");

// Se não encontrar no localStorage, cria os dados de usuários
if (!localStorage.getItem("users")) {
    const userData = [
        {
            login: "jorgeskina",
            password: "@Diana178"
        },
        {
            login: "jorggrandi",
            password: "admin123"
        }
    ];

    // Converte para string porque o localStorage só guarda strings
    const formatedData = JSON.stringify(userData);

    // Guarda os usuários
    localStorage.setItem("users", formatedData);
}

// Ao enviar o formulário
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = passwordEmail.value;

    // Recupera os usuários
    const users = JSON.parse(localStorage.getItem("users"));

    // Monta o objeto com as credenciais
    const userCredentials = {
        login: email,
        password: password
    };

    // Procura o usuário
    const userFinded = users.find((user) => {
        return (
            userCredentials.login === user.login &&
            userCredentials.password === user.password
        );
    });

    // Usuário não encontrado
    if (!userFinded) {
        alert("Usuário ou senha não encontrado.");
    }

    // Usuário encontrado
    else {
        alert(`Seja bem-vindo ${userFinded.login}`);

        localStorage.setItem(
            "userAuthed",
            userCredentials.login
        );

        window.location.href = "/home";
    }
});


// BOTÕES DOS TREINOS

const workoutA = document.querySelector("#button-workout1");
const workoutB = document.querySelector("#button-workout2");
const workoutC = document.querySelector("#button-workout3");
const workoutD = document.querySelector("#button-workout4");


// EVENTOS DOS BOTÕES

workoutA.addEventListener("click", () => {
    showWorkout("a");
});

workoutB.addEventListener("click", () => {
    showWorkout("b");
});

workoutC.addEventListener("click", () => {
    showWorkout("c");
});

workoutD.addEventListener("click", () => {
    showWorkout("d");
});


// TREINOS

const treinos = {
    a: {
        titulo: "Push",
        treino: [
            "Supino inclinado com halteres 2x6-10",
            "Supino reto na máquina 2x6-10",
            "Elevação lateral 2x10-15",
            "Tríceps na polia 2x8-12",
            "Tríceps francês 1x10-15"
        ]
    },

    b: {
        titulo: "Pull",
        treino: [
            "Puxada alta pronada 2x6-10",
            "Remada apoiada no banco 2x6-10",
            "Pullover na polia 1x10-15",
            "Rosca inclinada com halteres 2x8-12",
            "Rosca martelo 1x10-15"
        ]
    },

    c: {
        titulo: "Legs",
        treino: [
            "Agachamento 2x5-8",
            "Leg press 2x8-12",
            "Cadeira flexora 2x8-12",
            "Cadeira extensora 1x10-15",
            "Panturrilha em pé 2x8-12",
            "Abdominal na polia 2x10-15"
        ]
    },

    d: {
        titulo: "Fullbody",
        treino: [
            "Remada curvada 1x6-8",
            "Puxada supinada 1x6-8",
            "Supino inclinado 1x6-8",
            "Desenvolvimento na máquina 1x6-8",
            "Elevação lateral 1x10-15",
            "Rosca direta 1x6-10",
            "Tríceps testa 1x6-10",
            "Leg press 1x8-12",
            "Cadeira flexora 1x8-12"
        ]
    }
};



function showWorkout(tipo) {
    const data = treinos[tipo];
    const titulo = document.querySelector("#titulo-workout");
    titulo.textContent = data.titulo;
    const lista = document.querySelector("#workout-exercices");
    lista.innerHTML = "";

    data.treino.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

const formCadastro = document.querySelector("#newUser")

formCadastro.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = document.querySelector("#username-input").value.trim()
    const newPassword = document.querySelector("#newPassword").value.trim()

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const existsUser = user.some(function(user){
        return user.usuario.toLowerCase() === novoUsuario.toLowerCase(); 
    })

    if(!existsUser){
        alert("Oppsss! Esse já temos um usuário com esse nome.")
        return
    }

    users.push({
        usuario: username,
        password: newPassword
    })

    localStorage.setItem("users" , JSON.stringify(usuario))

    alert("Usuário novo cadastrado com sucesso")
    window.location.href = "index.html"
})