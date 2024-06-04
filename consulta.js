document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("consulta-form");
    const agradecimento = document.getElementById("agradecimento");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simule o envio do formulário (você pode adicionar o código de envio real aqui)
        setTimeout(function () {
            // Mostrar a mensagem de agradecimento
            agradecimento.style.display = "block";

            // Redirecionar para index.html após 3 segundos
            setTimeout(function () {
                window.location.href = "index.html";
            }, 3000);
        }, 1000); // Simule o processamento do servidor por 1 segundo
    });
});

