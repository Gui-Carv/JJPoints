function updateTimeValue(value) {
    document.getElementById("timeValue").textContent = value;
}

function iniciarLuta() {
    // Capturando os valores dos campos de input
    const user1 = document.getElementById("user1").value.trim();
    const user2 = document.getElementById("user2").value.trim();

    // Verificando se os campos de nome foram preenchidos
    if (user1 === "" || user2 === "") {
        alert("Por favor, preencha os nomes dos lutadores.");
        return;
    }

    // Capturando o tempo de luta
    const tempoDeLuta = document.getElementById("time").value;

    // Redirecionando para a página luta.html passando os parâmetros na URL
    window.location.href = `timer.html?user1=${user1}&user2=${user2}&tempo=${tempoDeLuta}`;
}