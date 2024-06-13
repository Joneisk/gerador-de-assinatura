// encontra o botao
const buttonCopiar = document.getElementById('btn-copiar');
// configura a funcao que sera chamada quando ele for pressionado
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

const emailPA = {
  "01": "agencia320901@sicoob.com.br",
  "02": "agencia320902@sicoob.com.br",
  "03": "agencia320903@sicoob.com.br",
  "04": "agencia320904@sicoob.com.br",
  "05": "agencia320905@sicoob.com.br",
  "06": "agencia320906@sicoob.com.br",
  "07": "agencia320907@sicoob.com.br",
  "08": "agencia320908@sicoob.com.br",
  "09": "agencia320909@sicoob.com.br",
  "10": "agencia320910@sicoob.com.br",
  "11": "agencia320911@sicoob.com.br",
  "12": "agencia320912@sicoob.com.br",
  "13": "agencia320913@sicoob.com.br",
  "14": "agencia320914@sicoob.com.br",
  "15": "agencia320915@sicoob.com.br",
};
/*
const emailArea={
  "Recuperação de Crédito":
  "Crédito":
  "Tecnologia da Informação":
  "Controles Internos e Riscos":
  "Comercial":
  "Cadastro e Vistoria": 
  "Gestão de Pessoas": 
  "Comunicação e Marketing": 
  "Contabilidade":"",
  "Governança Corporativa":"",
  "Produtos e Serviços":"",
  "Financeira/Administrativa":"",

}*/


const unidadesPorPA = {
  "Matriz": ["Recuperação de Crédito", "Crédito", "Tecnologia da Informação",
    "Controles Internos e Riscos", "Comercial", "Cadastro e Vistoria", "Gestão de Pessoas", "Comunicação e Marketing", "Contabilidade",
    "Governança Corporativa", "Produtos e Serviços", "Financeira/Administrativa"],
  "01": ["Rede de Atendimento"],
};

const cargosPorPA = {
  "Matriz": ["Analista", "Gerente", "Estagiário", "Diretor", "Presidencia"],
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
 
  const email=emailPA[paValue] || "";
  
  document.getElementById('celular').value = phone;
  document.getElementById('email-assinatura').innerText = email;
  document.getElementById('email-assinatura').href = "mailto:" + email;
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
  else if (["01", "02", "03", "04", "05", "06", "07", "11", "12", "13", "14", "15"].includes(paValue)) {
    unidadesPorPA["01"].forEach(unidade => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.add(option);
    });
  }
  else {
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
  else if (["01", "02", "03", "04", "05", "06", "07", "11", "12", "13", "14", "15"].includes(paValue)) {
    cargosPorPA["01"].forEach(cargo => {
      const option = document.createElement('option');
      option.value = cargo;
      option.text = cargo;
      cargosSelect.add(option);
    });
  }
  else {
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
const unidadesInput = document.getElementById('unidade');

// adiciona um metodo que realiza uma funcao quando um evento acontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener('input', btn);
sobrenomeInput.addEventListener('input', btn);
celularInput.addEventListener('input', btn);
cargosInput.addEventListener('input', btn);
unidadesInput.addEventListener('input', btn);

// encontra os campos a serem preenchidos na assinatura
const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('celular-assinatura');
const emailField = document.getElementById('email-assinatura');
const cargoField = document.getElementById('cargo-assinatura');
const unidadeField = document.getElementById('unidade-assinatura');

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

function obrigatorio() {
  if (nome == "") {
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
      alert('Coloque um número válido');
      return cel;
    }
  } catch (error) {
    console.log(error);
  }
}

function copiar() {
  var content = document.getElementById('assinatura-div');
  var range = document.createRange();
  range.selectNode(content);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges(); // to deselect
  alert('Copiado!');
}
