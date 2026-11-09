/* ==========================================================================
   script.js — INTERATIVIDADE, ACESSIBILIDADE, TABELAS E FORMULÁRIOS
   Academia Base Forte Leste — 2ª Entrega (HTML5 + CSS3 + JavaScript ES6+)

   O que este script faz:
     1. Barra de acessibilidade: controla tamanho da fonte e alto contraste,
        salvando a preferência da pessoa no localStorage.
     2. Menu hambúrguer (celular): abre e fecha a barra lateral (sidebar)
        com suporte a teclado (tecla Esc) e leitores de tela (aria-expanded).
     3. Tabelas responsivas: garante que cada célula <td> tenha o atributo
        data-label correspondente ao cabeçalho <th> para exibição em cartões
        no celular sem rolagem horizontal.
     4. Máscara de telefone e calendário responsivo: formata automaticamente
        o telefone no padrão (11) 91234-5678 enquanto a pessoa digita e
        facilita a abertura e validação dos campos de data.
     5. Validação de formulários com JavaScript: usa preventDefault(), exibe
        mensagens de erro acessíveis no DOM, aplica borda em destaque nos
        campos inválidos e persiste os dados no localStorage (rascunho e
        último envio mantidos ao recarregar a página).
     6. Botões "Preencher Dados de Teste" nos formulários de Contato e de
        Aula Experimental para agilizar a demonstração ao vivo na banca.
   ========================================================================== */

// 1. Elementos principais da barra de acessibilidade
const raiz = document.documentElement; // a tag <html>
const barra = document.querySelector(".barra-acessibilidade");
const botaoContraste = document.querySelector('[data-acao="contraste"]');

// Classes de tamanho de fonte definidas no style.css (seção 4.4)
const niveisFonte = ["fonte-menor", "", "fonte-grande", "fonte-maior"];
const NIVEL_NORMAL = 1;
let nivelAtual = NIVEL_NORMAL;

// 2. Funções auxiliares para salvar e ler no localStorage com segurança
function salvar(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (erro) {
    // Caso o navegador bloqueie o localStorage, ignora sem quebrar a página
  }
}

function ler(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (erro) {
    return null;
  }
}

// 3. Aplica o tamanho de fonte escolhido e salva no localStorage
function aplicarFonte(nivel) {
  nivelAtual = Math.max(0, Math.min(nivel, niveisFonte.length - 1));
  raiz.classList.remove("fonte-menor", "fonte-grande", "fonte-maior");
  if (niveisFonte[nivelAtual] !== "") {
    raiz.classList.add(niveisFonte[nivelAtual]);
  }
  salvar("bfl-fonte", String(nivelAtual));
}

// 4. Liga ou desliga o modo de alto contraste e salva no localStorage
function aplicarContraste(ligado) {
  raiz.classList.toggle("alto-contraste", ligado);
  if (botaoContraste) {
    botaoContraste.setAttribute("aria-pressed", ligado ? "true" : "false");
  }
  salvar("bfl-contraste", ligado ? "sim" : "nao");
}

// 5. Inicializa a barra de acessibilidade
if (barra && botaoContraste) {
  barra.hidden = false;

  // Recupera as preferências salvas nas páginas anteriores
  const fonteSalva = ler("bfl-fonte");
  aplicarFonte(fonteSalva === null ? NIVEL_NORMAL : Number(fonteSalva));
  aplicarContraste(ler("bfl-contraste") === "sim");

  // Ouvinte único de clique para os botões da barra (delegação de eventos)
  barra.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");
    if (!botao) return;

    const acao = botao.dataset.acao;
    if (acao === "aumentar") {
      aplicarFonte(nivelAtual + 1);
    } else if (acao === "diminuir") {
      aplicarFonte(nivelAtual - 1);
    } else if (acao === "normal") {
      aplicarFonte(NIVEL_NORMAL);
    } else if (acao === "contraste") {
      aplicarContraste(!raiz.classList.contains("alto-contraste"));
    }
  });
}

/* ==========================================================================
   6. MENU HAMBÚRGUER RESPONSIVO (SIDEBAR NO CELULAR)
   ========================================================================== */
const btnHamburguer = document.getElementById("btn-hamburguer");
const btnFecharMenu = document.getElementById("btn-fechar-menu");
const menuPrincipal = document.getElementById("menu-principal");
const menuOverlay = document.getElementById("menu-overlay");

function alternarMenuMobile(forcarEstado) {
  if (!btnHamburguer || !menuPrincipal) return;

  const estaAberto =
    typeof forcarEstado === "boolean"
      ? forcarEstado
      : !menuPrincipal.classList.contains("aberto");

  menuPrincipal.classList.toggle("aberto", estaAberto);
  btnHamburguer.classList.toggle("aberto", estaAberto);
  btnHamburguer.setAttribute("aria-expanded", estaAberto ? "true" : "false");
  btnHamburguer.setAttribute(
    "aria-label",
    estaAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
  );

  if (menuOverlay) {
    if (estaAberto) {
      menuOverlay.hidden = false;
      requestAnimationFrame(() => menuOverlay.classList.add("aberto"));
    } else {
      menuOverlay.classList.remove("aberto");
      setTimeout(() => {
        menuOverlay.hidden = true;
      }, 300);
    }
  }
}

if (btnHamburguer && menuPrincipal) {
  btnHamburguer.addEventListener("click", () => alternarMenuMobile());

  if (btnFecharMenu) {
    btnFecharMenu.addEventListener("click", () => alternarMenuMobile(false));
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", () => alternarMenuMobile(false));
  }

  // Fecha o menu ao clicar em qualquer link de navegação no celular
  menuPrincipal.addEventListener("click", (evento) => {
    if (evento.target.closest("a") && menuPrincipal.classList.contains("aberto")) {
      alternarMenuMobile(false);
    }
  });

  // Fecha a sidebar ao pressionar a tecla Escape (acessibilidade por teclado)
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menuPrincipal.classList.contains("aberto")) {
      alternarMenuMobile(false);
      btnHamburguer.focus();
    }
  });
}

/* ==========================================================================
   7. TABELAS RESPONSIVAS (GARANTE DATA-LABEL EM TODAS AS CÉLULAS)
   Lê os títulos das colunas no <thead> e preenche o atributo data-label
   em cada <td> do <tbody>, permitindo que o CSS exiba os rótulos no celular.
   ========================================================================== */
const tabelas = document.querySelectorAll("table");
tabelas.forEach((tabela) => {
  const cabecalhos = Array.from(tabela.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim()
  );
  if (cabecalhos.length === 0) return;

  const linhas = tabela.querySelectorAll("tbody tr");
  linhas.forEach((linha) => {
    const celulas = Array.from(linha.children);
    celulas.forEach((celula, indice) => {
      if (
        celula.tagName === "TD" &&
        !celula.hasAttribute("data-label") &&
        cabecalhos[indice]
      ) {
        celula.setAttribute("data-label", cabecalhos[indice]);
      }
    });
  });
});

/* ==========================================================================
   8. MÁSCARA AUTOMÁTICA DE TELEFONE E AJUSTE DO CALENDÁRIO
   ========================================================================== */

// Formata números digitados para "(11) 91234-5678" ou "(11) 2000-0000"
function formatarTelefone(valor) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7, 11)}`;
}

// Aplica a máscara em todos os campos de telefone do site
const camposTelefone = document.querySelectorAll('input[type="tel"]');
camposTelefone.forEach((campoTel) => {
  campoTel.addEventListener("input", () => {
    campoTel.value = formatarTelefone(campoTel.value);
  });
});

// Abre o calendário nativo ao clicar em qualquer área do campo de data
const camposData = document.querySelectorAll('input[type="date"]');
camposData.forEach((campoData) => {
  campoData.addEventListener("click", () => {
    if (typeof campoData.showPicker === "function") {
      try {
        campoData.showPicker();
      } catch (erro) {
        // Ignora caso o navegador já esteja com o seletor aberto
      }
    }
  });
});

/* ==========================================================================
   9. VALIDAÇÃO DE FORMULÁRIOS COM JS E PERSISTÊNCIA NO LOCALSTORAGE
   Atende aos requisitos da 2ª Entrega:
     - e.preventDefault() no envio;
     - validação de cada campo com mensagens de erro claras e borda vermelha;
     - rascunho automático e último envio salvos no localStorage, mantendo
       os dados visíveis ao recarregar a página.
   ========================================================================== */

// Verifica se uma data no formato YYYY-MM-DD cai em um sábado (6)
function ehSabado(valorData) {
  if (!valorData) return false;
  const partes = valorData.split("-").map(Number);
  if (partes.length !== 3) return false;
  const data = new Date(Date.UTC(partes[0], partes[1] - 1, partes[2]));
  return data.getUTCDay() === 6;
}

// Gera uma mensagem de erro clara em português para cada tipo de falha
function obterMensagemErro(campo) {
  const estado = campo.validity;
  if (estado.valueMissing) {
    if (campo.type === "checkbox") {
      return "Marque esta confirmação obrigatória para continuar.";
    }
    if (campo.tagName === "SELECT") {
      return "Selecione uma opção da lista.";
    }
    if (campo.type === "date") {
      return "Escolha uma data no calendário.";
    }
    return "Preencha este campo obrigatório.";
  }
  if (estado.typeMismatch && campo.type === "email") {
    return "Digite um endereço de e-mail válido (exemplo: nome@email.com).";
  }
  if (estado.patternMismatch && campo.type === "tel") {
    return "Digite o telefone com DDD no formato (11) 91234-5678.";
  }
  if (estado.tooShort) {
    return `Digite pelo menos ${campo.minLength} caracteres.`;
  }
  if (estado.rangeUnderflow || estado.rangeOverflow) {
    return `Informe um valor entre ${campo.min} e ${campo.max}.`;
  }
  if (campo.id === "sab-data" && campo.value && !ehSabado(campo.value)) {
    return "Escolha uma data que caia em um sábado (ex.: 14/11/2026).";
  }
  return "Verifique o preenchimento deste campo.";
}

// Limpa o estado de erro visual e acessível de um campo ou grupo de opções
function limparErroCampo(elemento) {
  const container =
    elemento.type === "radio"
      ? elemento.closest("fieldset")
      : elemento.closest(".campo, .campo-checkbox");
  if (!container) return;

  if (elemento.type === "radio") {
    container.classList.remove("campo-invalido");
  } else {
    elemento.classList.remove("campo-invalido");
    elemento.removeAttribute("aria-invalid");
  }

  const msgAntiga = container.querySelector(".mensagem-erro");
  if (msgAntiga) {
    msgAntiga.remove();
  }
}

// Exibe a borda em destaque e a mensagem de erro abaixo do campo inválido
function mostrarErroCampo(elemento, mensagem) {
  const container =
    elemento.type === "radio"
      ? elemento.closest("fieldset")
      : elemento.closest(".campo, .campo-checkbox");
  if (!container) return;

  limparErroCampo(elemento);

  if (elemento.type === "radio") {
    container.classList.add("campo-invalido");
  } else {
    elemento.classList.add("campo-invalido");
    elemento.setAttribute("aria-invalid", "true");
  }

  const paragrafoErro = document.createElement("p");
  paragrafoErro.className = "mensagem-erro";
  paragrafoErro.setAttribute("role", "alert");
  paragrafoErro.textContent = mensagem;
  container.appendChild(paragrafoErro);
}

// Valida todos os campos de um formulário e retorna true se estiver tudo certo
function validarFormulario(form) {
  let primeiroInvalido = null;
  const radiosVerificados = new Set();
  const controles = form.querySelectorAll("input, select, textarea");

  controles.forEach((campo) => {
    if (campo.type === "radio") {
      if (radiosVerificados.has(campo.name)) return;
      radiosVerificados.add(campo.name);

      const marcado = form.querySelector(`input[name="${campo.name}"]:checked`);
      if (campo.required && !marcado) {
        mostrarErroCampo(campo, "Selecione uma das opções acima.");
        if (!primeiroInvalido) primeiroInvalido = campo;
      } else {
        limparErroCampo(campo);
      }
      return;
    }

    // Regra específica: o campo #sab-data precisa ser um sábado
    if (campo.id === "sab-data" && campo.value && !ehSabado(campo.value)) {
      mostrarErroCampo(
        campo,
        "Escolha uma data que caia em um sábado (ex.: 14/11/2026)."
      );
      if (!primeiroInvalido) primeiroInvalido = campo;
      return;
    }

    if (!campo.checkValidity()) {
      mostrarErroCampo(campo, obterMensagemErro(campo));
      if (!primeiroInvalido) primeiroInvalido = campo;
    } else {
      limparErroCampo(campo);
    }
  });

  if (primeiroInvalido) {
    primeiroInvalido.focus();
    return false;
  }
  return true;
}

// Coleta todos os valores atuais do formulário em um objeto
function coletarDadosFormulario(form) {
  const dados = {};
  const controles = form.querySelectorAll("input, select, textarea");

  controles.forEach((campo) => {
    const chave = campo.id || campo.name;
    if (!chave) return;

    if (campo.type === "radio") {
      if (campo.checked) {
        dados[campo.name] = campo.value;
      }
    } else if (campo.type === "checkbox") {
      dados[chave] = campo.checked;
    } else {
      dados[chave] = campo.value;
    }
  });

  return dados;
}

// Preenche o formulário a partir de um objeto salvo no localStorage
function preencherDadosSalvos(form, dados) {
  if (!dados || typeof dados !== "object") return;

  const controles = form.querySelectorAll("input, select, textarea");
  controles.forEach((campo) => {
    const chave = campo.id || campo.name;
    if (campo.type === "radio") {
      if (dados[campo.name] !== undefined) {
        campo.checked = campo.value === dados[campo.name];
      }
    } else if (campo.type === "checkbox") {
      if (dados[chave] !== undefined) {
        campo.checked = Boolean(dados[chave]);
      }
    } else if (dados[chave] !== undefined) {
      campo.value = dados[chave];
    }
  });
}

// Exibe a caixa verde de confirmação com resumo dos dados salvos no localStorage
function exibirConfirmacao(boxConfirmacao, dados, veioDoReload = false) {
  if (!boxConfirmacao || !dados) return;

  const nomePessoa =
    dados["contato-nome"] ||
    dados["exp-nome"] ||
    dados["sab-nome"] ||
    dados.nome ||
    "Visitante";
  const detalheContato =
    dados["contato-email"] ||
    dados["exp-email"] ||
    dados["sab-email"] ||
    dados["contato-telefone"] ||
    dados["exp-telefone"] ||
    dados["sab-telefone"] ||
    "";

  boxConfirmacao.innerHTML = `
    <h3>${
      veioDoReload
        ? "Dados mantidos pelo navegador (localStorage)"
        : "Formulário enviado com sucesso!"
    }</h3>
    <p>
      Obrigado, <strong>${nomePessoa}</strong>! Seus dados foram validados e
      registrados${detalheContato ? ` (${detalheContato})` : ""}.
    </p>
    <p class="dica">Registro salvo no <code>localStorage</code> em: ${
      dados.dataEnvio || "agora"
    }</p>
  `;
  boxConfirmacao.classList.add("visivel");
}

// Configura todos os formulários do site (Contato e Aula Experimental)
const todosFormularios = document.querySelectorAll(".formulario");

todosFormularios.forEach((form, indice) => {
  // Desativa o balão nativo do navegador para usar a validação acessível via JS
  form.noValidate = true;

  const secaoPai = form.closest("section");
  const idBase = secaoPai && secaoPai.id ? secaoPai.id : `form-${indice}`;
  const chaveRascunho = `bfl-rascunho-${idBase}`;
  const chaveUltimoEnvio =
    idBase === "mensagem" ? "bfl-ultimo-contato" : `bfl-ultimo-${idBase}`;
  const boxConfirmacao = secaoPai
    ? secaoPai.querySelector(".mensagem-sucesso")
    : null;

  // 1. Ao carregar a página, restaura o último envio ou rascunho do localStorage
  const envioAnterior = ler(chaveUltimoEnvio);
  if (envioAnterior) {
    try {
      const dadosEnviados = JSON.parse(envioAnterior);
      exibirConfirmacao(boxConfirmacao, dadosEnviados, true);
      preencherDadosSalvos(form, dadosEnviados);
    } catch (erro) {
      // Ignora JSON inválido
    }
  }

  const rascunhoSalvo = ler(chaveRascunho);
  if (rascunhoSalvo) {
    try {
      preencherDadosSalvos(form, JSON.parse(rascunhoSalvo));
    } catch (erro) {
      // Ignora JSON inválido
    }
  }

  // 2. Enquanto a pessoa digita ou escolhe opções:
  //    limpa o erro do campo corrigido e salva o rascunho no localStorage
  form.addEventListener("input", (evento) => {
    const campo = evento.target;
    if (campo.matches("input, select, textarea")) {
      const sabadoInvalido =
        campo.id === "sab-data" && campo.value && !ehSabado(campo.value);
      if (campo.checkValidity() && !sabadoInvalido) {
        limparErroCampo(campo);
      }
      salvar(chaveRascunho, JSON.stringify(coletarDadosFormulario(form)));
    }
  });

  form.addEventListener("change", (evento) => {
    const campo = evento.target;
    if (campo.matches("input, select, textarea")) {
      if (campo.id === "sab-data" && campo.value && !ehSabado(campo.value)) {
        mostrarErroCampo(
          campo,
          "Escolha uma data que caia em um sábado (ex.: 14/11/2026)."
        );
      } else if (campo.checkValidity()) {
        limparErroCampo(campo);
      }
      salvar(chaveRascunho, JSON.stringify(coletarDadosFormulario(form)));
    }
  });

  // 3. Intercepta o envio com preventDefault() e valida todos os campos
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!validarFormulario(form)) {
      return;
    }

    const dadosFinais = coletarDadosFormulario(form);
    dadosFinais.dataEnvio = new Date().toLocaleString("pt-BR");

    // Salva os dados validados no localStorage
    salvar(chaveUltimoEnvio, JSON.stringify(dadosFinais));
    salvar(chaveRascunho, JSON.stringify(dadosFinais));

    // Mostra a mensagem de confirmação e rola até ela
    if (boxConfirmacao) {
      exibirConfirmacao(boxConfirmacao, dadosFinais, false);
      boxConfirmacao.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});

/* ==========================================================================
   10. BOTÕES "PREENCHER DADOS DE TESTE" (CONTATO E AULA EXPERIMENTAL)
   ========================================================================== */

// 10.1 Página de Contato (#mensagem)
const btnPreencherTeste = document.getElementById("btn-preencher-teste");
const formContato = document.querySelector("#mensagem .formulario");

if (btnPreencherTeste && formContato) {
  btnPreencherTeste.addEventListener("click", () => {
    document.getElementById("contato-nome").value = "João Silva";
    document.getElementById("contato-email").value = "joao@email.com";
    document.getElementById("contato-telefone").value = "(11) 98765-4321";
    document.getElementById("contato-assunto").value = "voluntariado";
    document.getElementById("contato-mensagem").value =
      "Olá! Gostaria de atuar como monitor voluntário nas aulas gratuitas de sábado da Base Forte Leste.";

    const radioWhatsapp = document.getElementById("contato-retorno-whatsapp");
    if (radioWhatsapp) radioWhatsapp.checked = true;

    const checkLgpd = document.getElementById("contato-lgpd");
    if (checkLgpd) checkLgpd.checked = true;

    formContato
      .querySelectorAll("input, select, textarea")
      .forEach((campo) => limparErroCampo(campo));

    salvar(
      "bfl-rascunho-mensagem",
      JSON.stringify(coletarDadosFormulario(formContato))
    );
  });
}

// 10.2 Página de Aula Experimental — Formulário 1: Pedir aula experimental (#agendamento)
const btnPreencherExperimental = document.getElementById("btn-preencher-experimental");
const formExperimental = document.querySelector("#agendamento .formulario");

if (btnPreencherExperimental && formExperimental) {
  btnPreencherExperimental.addEventListener("click", () => {
    document.getElementById("exp-nome").value = "Mariana Costa";
    document.getElementById("exp-email").value = "mariana.costa@email.com";
    document.getElementById("exp-telefone").value = "(11) 98765-4321";
    document.getElementById("exp-idade").value = "24";
    document.getElementById("exp-modalidade").value = "muay-thai";
    document.getElementById("exp-data").value = "2026-11-16";

    const radioNoite = document.getElementById("exp-periodo-noite");
    if (radioNoite) radioNoite.checked = true;

    const radioAdaptacaoNao = document.getElementById("exp-adaptacao-nao");
    if (radioAdaptacaoNao) radioAdaptacaoNao.checked = true;

    document.getElementById("exp-adaptacao-detalhe").value = "";
    document.getElementById("exp-mensagem").value =
      "Olá! Sou iniciante e gostaria de agendar minha primeira aula experimental gratuita de Muay Thai.";

    const checkExpLgpd = document.getElementById("exp-lgpd");
    if (checkExpLgpd) checkExpLgpd.checked = true;

    formExperimental
      .querySelectorAll("input, select, textarea")
      .forEach((campo) => limparErroCampo(campo));

    salvar(
      "bfl-rascunho-agendamento",
      JSON.stringify(coletarDadosFormulario(formExperimental))
    );
  });
}

// 10.3 Página de Aula Experimental — Formulário 2: Aulas de sábado (#inscricao-sabado)
const btnPreencherSabado = document.getElementById("btn-preencher-sabado");
const formSabado = document.querySelector("#inscricao-sabado .formulario");

if (btnPreencherSabado && formSabado) {
  btnPreencherSabado.addEventListener("click", () => {
    document.getElementById("sab-nome").value = "Lucas Oliveira";
    document.getElementById("sab-idade").value = "14";
    document.getElementById("sab-responsavel").value = "Ana Paula Oliveira";
    document.getElementById("sab-telefone").value = "(11) 91234-5678";
    document.getElementById("sab-email").value = "ana.oliveira@email.com";

    const radioAmbas = document.getElementById("sab-turma-ambas");
    if (radioAmbas) radioAmbas.checked = true;

    // 14/11/2026 é um sábado válido
    document.getElementById("sab-data").value = "2026-11-14";
    document.getElementById("sab-adaptacao").value =
      "Nenhuma adaptação necessária.";

    const checkSabAutorizacao = document.getElementById("sab-autorizacao");
    if (checkSabAutorizacao) checkSabAutorizacao.checked = true;

    formSabado
      .querySelectorAll("input, select, textarea")
      .forEach((campo) => limparErroCampo(campo));

    salvar(
      "bfl-rascunho-inscricao-sabado",
      JSON.stringify(coletarDadosFormulario(formSabado))
    );
  });
}
