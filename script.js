var botaoMensagem = document.getElementById("botaoMensagem");
var formulario = document.getElementById("formularioPedido");
var resultado = document.getElementById("resultado");

botaoMensagem.addEventListener("click", function () {
  alert("Entre em contato pelo telefone para comprar seu livro!");
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var livro = document.getElementById("livro").value;
  var quantidade = document.getElementById("quantidade").value;

  resultado.textContent =
    "Obrigado, " +
    nome +
    "! Recebi seu pedido de " +
    quantidade +
    " livro(s): " +
    livro +
    ".";
});
