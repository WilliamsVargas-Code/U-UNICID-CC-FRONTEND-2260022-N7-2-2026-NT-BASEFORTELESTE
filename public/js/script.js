/* ==========================================================================
   script.js — RECURSOS OPCIONAIS DE ACESSIBILIDADE
   Academia Base Forte Leste

   O site funciona 100% sem este arquivo (todo o conteúdo, o menu, as
   perguntas frequentes e a validação dos formulários são HTML5 + CSS3).
   Este script apenas:
     1. mostra a barra de acessibilidade, que começa escondida (hidden);
     2. diminui, aumenta ou volta ao normal o tamanho da fonte;
     3. liga e desliga o modo de alto contraste;
     4. lembra a escolha da pessoa ao trocar de página (localStorage).
   ========================================================================== */

// 1. Elementos que vamos usar
const raiz = document.documentElement;                 // a tag <html>
const barra = document.querySelector(".barra-acessibilidade");
const botaoContraste = document.querySelector('[data-acao="contraste"]');

// Os níveis de fonte são classes que já existem no style.css (seção 4.4).
// A posição 1 (texto vazio) é o tamanho normal.
const niveisFonte = ["fonte-menor", "", "fonte-grande", "fonte-maior"];
const NIVEL_NORMAL = 1;
let nivelAtual = NIVEL_NORMAL;

// 2. Funções para salvar e ler preferências.
//    O try/catch evita erro em navegadores que bloqueiam o localStorage.
function salvar(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (erro) {
    // Sem permissão para salvar: o recurso funciona só nesta página.
  }
}

function ler(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (erro) {
    return null;
  }
}

// 3. Aplica o tamanho de fonte escolhido (sem passar do menor nem do maior)
function aplicarFonte(nivel) {
  nivelAtual = Math.max(0, Math.min(nivel, niveisFonte.length - 1));
  raiz.classList.remove("fonte-menor", "fonte-grande", "fonte-maior");
  if (niveisFonte[nivelAtual] !== "") {
    raiz.classList.add(niveisFonte[nivelAtual]);
  }
  salvar("bfl-fonte", nivelAtual);
}

// 4. Liga ou desliga o alto contraste
function aplicarContraste(ligado) {
  raiz.classList.toggle("alto-contraste", ligado);
  botaoContraste.setAttribute("aria-pressed", ligado ? "true" : "false");
  salvar("bfl-contraste", ligado ? "sim" : "nao");
}

// 5. Só continua se a página tiver a barra (todas as páginas do site têm)
if (barra && botaoContraste) {
  barra.hidden = false; // mostra a barra

  // Recupera o que a pessoa escolheu nas páginas anteriores
  const fonteSalva = ler("bfl-fonte");
  aplicarFonte(fonteSalva === null ? NIVEL_NORMAL : Number(fonteSalva));
  aplicarContraste(ler("bfl-contraste") === "sim");

  // Um único "ouvinte" de clique para todos os botões da barra.
  // O atributo data-acao de cada botão diz o que fazer.
  barra.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");
    if (!botao) {
      return;
    }

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
   6. MENU HAMBÚRGUER RESPONSIVO (SIDEBAR MOBILE)
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

  // Fecha a sidebar ao pressionar a tecla ESC (Acessibilidade / Teclado)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuPrincipal.classList.contains("aberto")) {
      alternarMenuMobile(false);
      btnHamburguer.focus();
    }
  });
}

/* ==========================================================================
   7. SIMULAÇÃO DE ENVIO DE FORMULÁRIO E DADOS DE TESTE (LOCALSTORAGE)
   ========================================================================== */
const formContato = document.querySelector("#mensagem .formulario");
const btnPreencherTeste = document.getElementById("btn-preencher-teste");
const boxConfirmacao = document.getElementById("confirmacao-contato");

// 7.1 Botão "Preencher Dados de Teste"
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
  });
}

// 7.2 Função auxiliar para exibir a caixa verde de sucesso com os dados salvos
function exibirMensagemSucesso(dados, veioDoReload = false) {
  if (!boxConfirmacao) return;

  boxConfirmacao.innerHTML = `
    <h3>${veioDoReload ? "Último envio registrado no navegador (localStorage)" : "Mensagem enviada com sucesso!"}</h3>
    <p>
      Obrigado pelo contato, <strong>${dados.nome}</strong>!
      Registramos o assunto <strong>"${dados.assunto}"</strong> e responderemos via
      <strong>${dados.retorno}</strong> (${dados.email} / ${dados.telefone}).
    </p>
    <p class="dica">Dados persistidos no <code>localStorage</code> em: ${dados.dataEnvio}</p>
  `;
  boxConfirmacao.classList.add("visivel");
}

// 7.3 Ao recarregar a página, recupera o último envio salvo no localStorage
if (formContato && boxConfirmacao) {
  const ultimoEnvioSalvo = ler("bfl-ultimo-contato");
  if (ultimoEnvioSalvo) {
    try {
      const dadosRecuperados = JSON.parse(ultimoEnvioSalvo);
      exibirMensagemSucesso(dadosRecuperados, true);
    } catch (erro) {
      // Ignora caso o JSON salvo esteja inválido
    }
  }

  // 7.4 Intercepta o envio com e.preventDefault()
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valida os campos antes de prosseguir
    if (!formContato.checkValidity()) {
      formContato.reportValidity();
      return;
    }

    const retornoSelecionado = formContato.querySelector('input[name="retorno"]:checked');

    const dadosFormulario = {
      nome: document.getElementById("contato-nome").value.trim(),
      email: document.getElementById("contato-email").value.trim(),
      telefone: document.getElementById("contato-telefone").value.trim(),
      assunto: document.getElementById("contato-assunto").value,
      mensagem: document.getElementById("contato-mensagem").value.trim(),
      retorno: retornoSelecionado ? retornoSelecionado.value : "whatsapp",
      lgpd: document.getElementById("contato-lgpd").checked,
      dataEnvio: new Date().toLocaleString("pt-BR")
    };

    // Salva no localStorage (chave: "bfl-ultimo-contato")
    salvar("bfl-ultimo-contato", JSON.stringify(dadosFormulario));

    // Exibe a div verde de confirmação e rola suavemente até ela
    exibirMensagemSucesso(dadosFormulario, false);
    boxConfirmacao.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Limpa todos os campos do formulário
    formContato.reset();
  });
}
