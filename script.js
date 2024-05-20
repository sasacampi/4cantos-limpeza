// Função para manipular evento de clique no botão de solicitar orçamento
document.querySelector(".btn").addEventListener("click", function () {
  alert("Obrigado por solicitar um orçamento! Entraremos em contato em breve.");
});

// Função para manipular evento de foco em um dos serviços
document.querySelectorAll(".cs-link").forEach(function (item) {
  item.addEventListener("focus", function () {
    console.log("Focado em: " + item.textContent.trim());
  });
});

// Função para manipular evento de pressionar tecla no documento
document.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");

  form.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada é a tecla Enter
    if (event.key === "Enter") {
      // Verifica se os campos obrigatórios estão preenchidos
      if (!validateForm()) {
        // Mostra o popup
        alert("Por favor, preencha todos os campos obrigatórios.");
        // Evita o envio do formulário
        event.preventDefault();
      }
    }
  });

  // Função para validar o formulário
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      return false;
    }
    return true;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function (event) {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });

  document.getElementById("form").addEventListener("submit", function (event) {
    if (!/^\d{11}$/.test(phoneInput.value)) {
      event.preventDefault();
      alert("Por favor, insira um número de telefone válido com 11 dígitos.");
    }
  });
});
