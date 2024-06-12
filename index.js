// encontra o botao
const buttonCopiar = document.getElementById('btn-copiar');
//configura a funcao que sera chamada quando ele for pressionado
buttonCopiar.onclick = copiar;

const paPhones = {
  "Matriz": "18 2101 5478",
  "01": "18 2101 5861",
  "02": "18 2101 5862",
  "03": "67 3304 8314",
  "04": "67 3304 5112",
  "05": "18 2101 5492",
  "06": "67 2107 7550",
  "07": "67 3522 6978",
  "08": "18 2101 5481",
  "09": "18 2101 8728",
  "10": "18 2101 8709",
  "11": "18 2101 5463",
  "12": "17 2137 9543",
  "13": "18 3303 3678",
  "14": "18 2122 2081",
  "15": "18 2122 2079",
};

const unidadesPorPA=
{
  "Matriz":["Recuperação de Crédito","Crédito","Tecnologia da Informação",
  "Controles Internos e Riscos","Comercial","Cadastro e Vistoria","Gestão de Pessoas","Comunicação e Marketing","Contabilidade",
  "Governança Corporativa","Produtos e Serviços","Financeira/Administrativa"],
  "01":["Rede de Atendimento"],
}

const cargosPorPA = {
  "Matriz": ["Analista", "Gerente", "Estagiário","Diretor","Presidencia"],
  "01": [
    "Agente de Atendimento", 
    "Agente de Atendimento/Caixa", 
    "Assistente de Gerência", 
    "Aprendiz", 
    "Estagiário", 
    "Gerente de Agência", 
    "Gerente de Atendimento", 
    "Gerente de Relacionamento"
  ],
  // Adicione os demais PAs e seus respectivos cargos
};

document.getElementById('PA').addEventListener('change', function () {
  const paValue = this.value;
  const phone = paPhones[paValue] || "";
  document.getElementById('celular').value = phone;
  //document.getElementById('celular-assinatura').href = "https://wa.me/55" + phone.replace(/\D/g, ''); // Remove caracteres não numéricos
  //document.getElementById('celular-assinatura').innerText = phone;
  updateCargos(paValue);
  updateUnidades(paValue);
  btn();
});

function updateUnidades(paValue) {
  const unidadeSelect = document.getElementById('unidade');
  unidadeSelect.innerHTML = ''; // Limpar todas as opções

  if (paValue === "Matriz") {
    unidadesPorPA["Matriz"].forEach(unidade => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.add(option);
    });
  } 
  else if (["01", "02", "03", "04", "05", "06", "07", "11", "12", "13", "14", "15"].includes(paValue)) 
  {
    unidadesPorPA["01"].forEach(unidade => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.add(option);
    });
  } 
  else 
  {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Nenhuma unidade disponível';
    unidadeSelect.add(defaultOption);
  }
}


function updateCargos(paValue) {
  const cargosSelect = document.getElementById('cargos');
  cargosSelect.innerHTML = ''; // Limpar todas as opções

  if (paValue === "Matriz") {
    cargosPorPA["Matriz"].forEach(cargo => {
      const option = document.createElement('option');
      option.value = cargo;
      option.text = cargo;
      cargosSelect.add(option);
    });
  } 
  else if (["01", "02", "03", "04", "05", "06", "07", "11", "12", "13", "14", "15"].includes(paValue)) 
  {
    cargosPorPA["01"].forEach(cargo => {
      const option = document.createElement('option');
      option.value = cargo;
      option.text = cargo;
      cargosSelect.add(option);
    });
  } 
  else 
  {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Nenhum cargo disponível';
    cargosSelect.add(defaultOption);
  }
}


// Encontra as inputs
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const celularInput = document.getElementById('celular');
const cargosInput = document.getElementById('cargos');
const unidadesInput= document.getElementById('unidade');

// adiciona um metodo que realiza uma funcao quando um evento acontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener('input', btn);
sobrenomeInput.addEventListener('input', btn);
celularInput.addEventListener('input', btn);
cargosInput.addEventListener('input', btn);
unidadesInput.addEventListener('input',btn);


// encontra os campos a serem preenchidos na assinatura
const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('celular-assinatura');
const cargoField = document.getElementById('cargo-assinatura');
const unidadeField=document.getElementById('unidade-assinatura');


function btn() {
  // recebe as informacoes das inputs
  const nome = nomeInput.value;
  const sobrenome = sobrenomeInput.value;
  const celular = celularInput.value;
  const cargo = cargosInput.options[cargosInput.selectedIndex].value;
  const unidade = unidadesInput.options[unidadesInput.selectedIndex].value;

  let nomeCompleto = nome + ' ' + sobrenome;

  // coloca os valores nos lugares na assinatura
  nomeCompletoField.innerHTML = editaNome(nomeCompleto);
  celularField.innerHTML = editaCelular(celular);
  cargoField.innerHTML = cargo;
  unidadeField.innerHTML = unidade;


  // configura os atributos de link
  celularField.setAttribute('href', `https://wa.me/55${editaCelular(celular).replace(/ /g, '')}`);
}
function obrigatorio()
{
  if(nome=="")
    {
      console.log("Preencha o campo Nome");
    }
    else
      console.log("Sucesso");
}

function editaNome(nome) {
  let palavras = nome.split(' ');
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = primeirasMaiusculas(palavras[i]);
  }
  if (palavras.join(' ') == ' ') {
    return 'Nome Sobrenome';
  }
  return palavras.join(' ');
}

function primeirasMaiusculas(palavra) {
  let n = palavra.length;
  if (n > 1) {
    let primeiraLetra = palavra[0].toUpperCase();
    let resto = palavra.slice(1);
    palavra = primeiraLetra + resto;
    return palavra;
  } else {
    return palavra.toUpperCase();
  }
}

function editaCelular(cel) {
  try {
    cel = cel.replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\-/g, '');
    let n = cel.length;
    if (n === 0) {
      return '99 99999 9999';
    } else if (n < 3) {
      return cel;
    } else if (n < 7) {
      return cel.slice(0, 2) + ' ' + cel.slice(2);
    } else if (n <= 11) {
      return cel.slice(0, 2) + ' ' + cel.slice(2, 7) + ' ' + cel.slice(7);
    } else {
      alert('Coloque o telefone no formato 12 12345 1234 (com 11 números)');
      return '99 99999 9999';
    }
  } catch (err) { }
}

function copiar() {
  var area = document.getElementById("assinatura-div");
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(area);
    range.select();
    document.execCommand("Copy");
    alert("Copiado para a área de transferência");
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copiado para a área de transferência");
  }
}
