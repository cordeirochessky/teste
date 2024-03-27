alert ("Boas vindas ao nosso site!");

// Aqui nenhum valor é armazenado, o alerta só dispara com a mensagem definida.

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// As variáveis são declaradas, cada uma com seu respectivo valor, todos armazenados.


let mensagemDeErro = "Erro! Preencha todos os campos";

// Essa variável não apenas está declarada e armazenando um valor, como este será apresentado a seguir:

alert (mensagemDeErro);

/* Aqui o alerta exibe a mensagem armazenada na variável, pois pedimos ao alerta que referenciasse isso, 
não um valor qualquer solto. */

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

/* Aqui as variáveis são declaradas, mas o que está sendo armazenado não são dados, mas operações.
A operação 'prompt' abre um espaço na tela para inserção de informação, que não é validada,
mas só é armazenada após o preenchimento. 

Só com a entrada de dados, pelo usuário, esse dado tem seu valor armazenado, ou seja,
a inserção é diferida para o momento do preenchimento e é interativa, pois cabe a quem acessa a página.
*/

if (idade >= 18)
{alert("Pode tirar a habilitação!")
}

/* Essa condição se aplica à variável 'idade'.
Antecedente: SE o valor da variável for o dado numérico 18 >>>
Consequente: a condição é ATINGIDA (o alerta é exibido com a informação desejada)

Lembrando que a variável só armazena o valor da idade após o usuário inserir o prompt.
*/
