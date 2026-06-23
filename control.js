const tela = document.getElementById("tela");
const telaHora = document.getElementById("tela_hora");
const telaData = document.getElementById("tela_data");
const themeBtn = document.getElementById("theme-btn");

// Carregar preferência de tema salva
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

// FORMATADOR (zero à esquerda)
function AddZero(x) {
    return x < 10 ? "0" + x : x;
}

// Alternar tema
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// Atualizar relógio a cada segundo
setInterval(function () {
    let data = new Date();

    // TEMPO (hora, minuto, segundo)
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    // DATA (dia, mes, ano)
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    // Formatar hora com segundos piscando
    telaHora.innerHTML = `
        ${AddZero(hora)}:${AddZero(minuto)}:<span>${AddZero(segundo)}</span>
    `;

    // Formatar data
    telaData.innerHTML = `
        ${AddZero(dia)}/${AddZero(mes)}/${ano}
    `;
}, 1000);

// Atualização inicial imediata (sem esperar 1 segundo)
let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let segundo = data.getSeconds();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();

telaHora.innerHTML = `
    ${AddZero(hora)}:${AddZero(minuto)}:<span>${AddZero(segundo)}</span>
`;
telaData.innerHTML = `
    ${AddZero(dia)}/${AddZero(mes)}/${ano}
`;
