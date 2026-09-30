const btnFechar = document.querySelector(".btn__fechar");
const msgErro = document.querySelector(".modal__msg_erro");
const msgSucesso = document.querySelector(".modal__msg_sucesso");
const modalEnviar = document.querySelector(".modal__enviar");

const pegarDados = () => {
  // pegar os dados do forms
  const nome = document.querySelector(".input__nome").value;
  const email = document.querySelector(".input__email").value;
  console.log(nome, email);

  if (nome === "" || nome === null || nome.length < 3) {
    document.querySelector(".erro__nome").textContent =
      "O nome é obrigatório e precisa ter no mínimo 3 caracteres";
  } else {
    document.querySelector(".erro__nome").textContent = "";
  }

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;

  if (!emailRegex.test(email)) {
    document.querySelector(".erro__email").textContent =
      "O email é obrigatório e precisa ser válido!";
  } else {
    document.querySelector(".erro__email").textContent = "";
  }

  const cadastro = {
    nome,
    email,
  };

  console.log(cadastro);
};

const mostrarModal = () => {
  const statusRegister = "sucesso";

  if (statusRegister === "sucesso") {
    msgErro.style.display = "none";
    btnFechar.classList.add("bg__sucesso");
  }
  if (statusRegister === "erro") {
    msgSucesso.style.display = "none";
    btnFechar.classList.add("bg__erro");
  }

  modalEnviar.showModal();
};

document.querySelector(".btn__cadastrar").addEventListener("click", (e) => {
  e.preventDefault();

  pegarDados();
  mostrarModal();
});

btnFechar.addEventListener("click", () => {
  document.querySelector(".modal__enviar").close();
});
