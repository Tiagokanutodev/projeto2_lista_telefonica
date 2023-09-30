const form = document.getElementById('form-atividade');   //01 criei uma costante chamada FORM recebeu (form-atividade)
const imgIconePositivo = '<img src="./images/ok.png" alt="icone positivo"/>';    //17
const contato = [];
const numero = [];



var linhas = '';                   //12string vazia

form.addEventListener('submit', function(e)               //02 evento SUBMIT   //function... remove o comportamento do formulario de atualizar a tela...
{
    e.preventDefault();                                   //para nao atualizar a pagina  
    
    adicionarLinha();                                     //
    atualizaTabela();                                     //ATUALIZAR A TABELA    
})                           

function adicionarLinha()
{
    const inputnomeDoContato = document.getElementById('nome-contato');      //03 inputNomeAtividade RECEBEU nome-atividade
    const inputNumeroTelefone = document.getElementById('numero-telefone');      //04 inputNotaAtividade RECEBEU nota-atividade

    if(contato.includes(inputnomeDoContato.value))         //para nao duplicar os nomes la no app
    {
        alert(`O nome: ${inputnomeDoContato.value} ja foi Adicionado`);  //para nao duplicar os nomes la no app
    }
    else
    {    
    contato.push(inputnomeDoContato.value);
    numero.push(parseFloat(inputNumeroTelefone.value));

    var linha = '<tr>';                                                        //06
    linha += `<td>${inputnomeDoContato.value}</td>`;                           //07
    linha += `<td>${inputNumeroTelefone.value}</td>`;    
    linha += `<td>${inputNumeroTelefone.value = imgIconePositivo}</td>`;     //08    (: if else)
    linha += '</tr>';              //09

    linhas += linha;    
    }   

    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);  //05 alerta    
    inputnomeDoContato.value = '';         //13 variavel agora esta com valor VAZIO                  
    inputNumeroTelefone.value = '';         //14 variavel agora esta com valor VAZIO 
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody');        //10
    corpoTabela.innerHTML = linhas;                              //11           
}

