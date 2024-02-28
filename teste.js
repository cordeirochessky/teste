alert ("Boas vindas ao nosso site!");

// Aqui nenhum valor é armazenado, o alerta só dispara com a mensagem definida

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// variáveis declaradas, cada um com seus respectivo valor, todos armazenados


let mensagemDeErro = "Erro! Preencha todos os campos";

// Essa Variável não apenas está declarada e armazenando um valor, como este será apresentado a seguir:

alert (mensagemDeErro);

// Aqui o alerta exibe a mensagem armazenada na variável, pois pedimos ao alerta que referenciasse isso, não um valor qualquer solto.

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");


if (idade >= 18)
{alert("Pode tirar a habilitação!")
}