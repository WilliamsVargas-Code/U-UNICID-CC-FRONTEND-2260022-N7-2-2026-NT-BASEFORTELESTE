/* ==========================================================================
   formularios.js — VALIDAÇÃO DOS FORMULÁRIOS COM JAVASCRIPT
   Academia Base Forte Leste

   Usado em: aula-experimental.html (2 formulários) e contato.html (1).

   O que este arquivo faz:
     1. Desliga os balões de erro padrão do navegador (novalidate) e assume
        a validação, com mensagens em português embaixo de cada campo.
     2. No envio (evento "submit"), chama preventDefault() para a página não
        recarregar e confere todos os campos.
     3. Campo com erro: borda vermelha + mensagem + aria-invalid="true"
        (o leitor de tela também avisa). O foco vai para o primeiro erro.
     4. Enquanto a pessoa corrige (eventos "input", "change" e "blur"),
        a mensagem some assim que o campo fica certo.
     5. Tudo certo: dispara o evento "envio-valido" (o script.js usa esse
        evento no Contato para guardar os dados), mostra a mensagem verde,
        limpa o formulário e guarda no localStorage a data do último envio.

   As REGRAS de cada campo continuam no HTML (required, type, pattern,
   minlength, min, max). O JavaScript só lê essas regras com a propriedade
   "validity" de cada campo. Por isso, se o JavaScript não carregar, o
   navegador valida sozinho com o HTML5 (melhoria progressiva).
   ========================================================================== */


// Nomes dos dias da semana, na ordem do getDay() do JavaScript (0 = domingo)
const DIAS_DA_SEMANA = [
  "domingo", "segunda-feira", "terça-feira", "quarta-feira",
  "quinta-feira", "sexta-feira", "sábado"
];


// --------------------------------------------------------------------------
// 1. FUNÇÕES DE APOIO
// --------------------------------------------------------------------------

// Transforma "2026-11-16" (formato do input date) em um objeto Date.
// O "T00:00" evita que o fuso horário mude o dia.
function lerData(textoData) {
  return new Date(textoData + "T00:00");
}

// Transforma "2026-11-16" em "16/11/2026", para mostrar nas mensagens
function formatarData(textoData) {
  const partes = textoData.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// Lê e grava no localStorage sem quebrar o site se o navegador bloquear
function salvarLocal(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (erro) {
    // Navegador bloqueou o localStorage: só não guardamos a informação.
  }
}

function lerLocal(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (erro) {
    return null;
  }
}


// --------------------------------------------------------------------------
// 2. QUAL É O ERRO DESTE CAMPO?
//    Devolve o texto da mensagem, ou "" (texto vazio) se o campo está certo.
// --------------------------------------------------------------------------
function descobrirErro(campo) {
  const valor = campo.value.trim();
  const v = campo.validity; // objeto do navegador com o resultado das regras HTML5

  // 2.1 Grupo de opções (radio): basta uma marcada no grupo
  if (campo.type === "radio") {
    const marcada = campo.form.querySelector('input[name="' + campo.name + '"]:checked');
    return marcada ? "" : "Escolha uma das opções.";
  }

  // 2.2 Caixa de seleção (checkbox) obrigatória
  if (campo.type === "checkbox") {
    return campo.required && !campo.checked ? "Marque esta caixa para continuar." : "";
  }

  // 2.3 Campo obrigatório vazio
  if (campo.required && valor === "") {
    return campo.tagName === "SELECT" ? "Escolha uma opção da lista." : "Preencha este campo.";
  }

  // Campo opcional e vazio: não há o que conferir
  if (valor === "") {
    return "";
  }

  // 2.4 Número com letras (o navegador marca como "badInput")
  if (v.badInput) {
    return "Digite apenas números.";
  }

  // 2.5 Regras de data
  if (campo.type === "date") {
    // Data antes do mínimo permitido (atributo min)
    if (campo.min && valor < campo.min) {
      return "Escolha uma data a partir de " + formatarData(campo.min) + ".";
    }

    // Regra própria, lida do atributo data-dias do HTML
    const diaDaSemana = lerData(valor).getDay(); // 0 = domingo ... 6 = sábado
    const nomeDoDia = DIAS_DA_SEMANA[diaDaSemana];

    if (campo.dataset.dias === "so-sabado" && diaDaSemana !== 6) {
      return "As aulas gratuitas são só aos sábados. " +
             formatarData(valor) + " é " + nomeDoDia + ".";
    }

    if (campo.dataset.dias === "segunda-a-sabado" && diaDaSemana === 0) {
      return "A academia não abre aos domingos. Escolha um dia de segunda a sábado.";
    }
  }

  // 2.6 E-mail fora do formato (type="email")
  if (v.typeMismatch && campo.type === "email") {
    return "Digite um e-mail válido, como seunome@email.com.";
  }

  // 2.7 Formato exigido pelo pattern (no site, só o telefone usa pattern)
  if (v.patternMismatch) {
    return "Use o formato (11) 91234-5678, com o DDD entre parênteses.";
  }

  // 2.8 Texto curto demais (minlength). Conferimos "na mão" porque o
  //     navegador só avisa depois que a pessoa digita no campo.
  if (campo.minLength > 0 && valor.length < campo.minLength) {
    return "Escreva pelo menos " + campo.minLength + " caracteres.";
  }

  // 2.9 Número fora dos limites (min e max), como a idade
  if (campo.type === "number" && (v.rangeUnderflow || v.rangeOverflow)) {
    return "Digite uma idade entre " + campo.min + " e " + campo.max + " anos.";
  }

  return ""; // nenhum erro
}


// --------------------------------------------------------------------------
// 3. MOSTRAR E ESCONDER O ERRO NA TELA
// --------------------------------------------------------------------------

// Onde a mensagem de erro deve aparecer:
//  - radio: no fim do fieldset do grupo de opções;
//  - checkbox: logo depois da caixa com o texto;
//  - demais campos: no fim da div.campo (depois da dica).
function lugarDaMensagem(campo) {
  if (campo.type === "radio") {
    return campo.closest("fieldset");
  }
  if (campo.type === "checkbox") {
    return campo.closest(".campo-checkbox");
  }
  // Se o campo não estiver dentro de uma div.campo, usa o elemento pai
  return campo.closest(".campo") || campo.parentElement;
}

// Mostra (ou atualiza) a mensagem de erro de um campo
function mostrarErro(campo, texto) {
  const caixa = lugarDaMensagem(campo);
  // radio usa o "name" do grupo; os outros usam o "id" do campo
  const idMensagem = (campo.type === "radio" ? campo.name : campo.id) + "-erro";
  let mensagem = document.getElementById(idMensagem);

  // Cria o parágrafo da mensagem só na primeira vez
  if (!mensagem) {
    mensagem = document.createElement("p");
    mensagem.className = "mensagem-erro";
    mensagem.id = idMensagem;

    if (campo.type === "checkbox") {
      caixa.insertAdjacentElement("afterend", mensagem); // depois da caixa
    } else {
      caixa.appendChild(mensagem); // no fim do campo ou do fieldset
    }
  }

  mensagem.textContent = texto;
  caixa.classList.add("campo-com-erro"); // o CSS pinta a borda de vermelho

  // Para leitores de tela: campo inválido + ligação com o texto do erro
  grupoDoCampo(campo).forEach(function (item) {
    item.setAttribute("aria-invalid", "true");
    ligarDescricao(item, idMensagem);
  });
}

// Esconde a mensagem de erro de um campo
function limparErro(campo) {
  const caixa = lugarDaMensagem(campo);
  const idMensagem = (campo.type === "radio" ? campo.name : campo.id) + "-erro";
  const mensagem = document.getElementById(idMensagem);

  if (mensagem) {
    mensagem.remove();
  }
  caixa.classList.remove("campo-com-erro");

  grupoDoCampo(campo).forEach(function (item) {
    item.removeAttribute("aria-invalid");
    desligarDescricao(item, idMensagem);
  });
}

// Um radio faz parte de um grupo; os outros campos são sozinhos
function grupoDoCampo(campo) {
  if (campo.type === "radio") {
    return Array.from(campo.form.querySelectorAll('input[name="' + campo.name + '"]'));
  }
  return [campo];
}

// Acrescenta o id da mensagem no aria-describedby, sem apagar a dica que já existe
function ligarDescricao(campo, idMensagem) {
  const ids = (campo.getAttribute("aria-describedby") || "").split(" ").filter(Boolean);
  if (!ids.includes(idMensagem)) {
    ids.push(idMensagem);
  }
  campo.setAttribute("aria-describedby", ids.join(" "));
}

// Tira o id da mensagem do aria-describedby
function desligarDescricao(campo, idMensagem) {
  const ids = (campo.getAttribute("aria-describedby") || "").split(" ")
    .filter(function (id) { return id && id !== idMensagem; });

  if (ids.length > 0) {
    campo.setAttribute("aria-describedby", ids.join(" "));
  } else {
    campo.removeAttribute("aria-describedby");
  }
}

// Confere UM campo e já atualiza a tela. Devolve true se está certo.
function validarCampo(campo) {
  const erro = descobrirErro(campo);
  if (erro) {
    mostrarErro(campo, erro);
    return false;
  }
  limparErro(campo);
  return true;
}


// --------------------------------------------------------------------------
// 4. PREPARAR CADA FORMULÁRIO DA PÁGINA
// --------------------------------------------------------------------------
document.querySelectorAll("form.formulario").forEach(function (formulario) {

  // 4.1 O JavaScript assume a validação: desliga os balões do navegador
  formulario.noValidate = true;

  // A mensagem verde de cada formulário: o action do form diz qual é
  // (ex.: action="#confirmacao-contato" -> div id="confirmacao-contato")
  const idConfirmacao = formulario.getAttribute("action").replace("#", "");
  const confirmacao = document.getElementById(idConfirmacao);
  const chaveLocal = "bfl-envio-" + idConfirmacao; // chave usada no localStorage

  // Todos os campos que o JavaScript deve conferir
  const campos = Array.from(formulario.querySelectorAll("input, select, textarea"));

  // 4.2 localStorage: se já houve um envio neste navegador, avisa a data
  //     (se a caixa verde já estiver aberta, o script.js já mostrou o último
  //     envio, então não repetimos o aviso)
  const ultimoEnvio = lerLocal(chaveLocal);
  const caixaJaAberta = confirmacao && confirmacao.classList.contains("visivel");
  if (ultimoEnvio && !caixaJaAberta) {
    const aviso = document.createElement("p");
    aviso.className = "dica aviso-ultimo-envio";
    aviso.textContent = "Você já enviou este formulário neste navegador em " +
                        ultimoEnvio + ".";
    formulario.prepend(aviso);
  }

  // 4.3 Enquanto a pessoa corrige: se o campo já mostrava erro, confere de novo
  campos.forEach(function (campo) {
    const confereSeTinhaErro = function () {
      if (lugarDaMensagem(campo).classList.contains("campo-com-erro")) {
        validarCampo(campo);
      }
    };
    campo.addEventListener("input", confereSeTinhaErro);  // ao digitar
    campo.addEventListener("change", confereSeTinhaErro); // ao escolher opção ou data

    // Ao sair do campo (blur): confere se a pessoa já escreveu algo
    campo.addEventListener("blur", function () {
      if (campo.value.trim() !== "" && campo.type !== "radio" && campo.type !== "checkbox") {
        validarCampo(campo);
      }
    });
  });

  // 4.4 O envio do formulário
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // NÃO deixa a página recarregar nem mudar a URL

    // Esconde a confirmação de um envio anterior
    if (confirmacao) {
      confirmacao.classList.remove("mensagem-visivel", "visivel");
    }

    // Confere todos os campos e guarda os que têm erro
    const camposComErro = campos.filter(function (campo) {
      return !validarCampo(campo);
    });

    if (camposComErro.length > 0) {
      // Leva o foco ao primeiro erro (ajuda quem usa teclado ou leitor de tela)
      camposComErro[0].focus();
      return; // para aqui: nada é "enviado"
    }

    // ---- Tudo certo ----
    const hoje = new Date().toLocaleDateString("pt-BR"); // ex.: 08/11/2026
    salvarLocal(chaveLocal, hoje);

    // Avisa outros scripts que o envio foi aprovado (antes de limpar os campos,
    // para que ainda consigam ler o que foi digitado)
    formulario.dispatchEvent(new CustomEvent("envio-valido"));

    formulario.reset(); // limpa os campos

    if (confirmacao) {
      confirmacao.classList.add("mensagem-visivel"); // o CSS mostra a caixa verde
      confirmacao.setAttribute("tabindex", "-1");    // permite receber o foco
      confirmacao.scrollIntoView({ block: "center" }); // rola a tela até a mensagem
      confirmacao.focus({ preventScroll: true });      // leitor de tela lê a mensagem
    }
  });
});
