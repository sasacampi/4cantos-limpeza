document.querySelector(".btn").addEventListener("click", function () {
  alert("Obrigado por solicitar um orçamento! Entraremos em contato em breve.");
});

document.querySelectorAll(".cs-link").forEach(function (item) {
  item.addEventListener("focus", function () {
    console.log("Focado em: " + item.textContent.trim());
  });
});

document.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");

  form.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (!validateForm()) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault();
      }
    }
  });

  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

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
