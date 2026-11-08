# Guia de apresentação: site da Academia Base Forte Leste

Projeto Horizonte Leste, Front-End, Ciência da Computação (UNICID, 2º semestre de 2026).
HTML5 e CSS3 puros, sem frameworks. JavaScript só na barra de acessibilidade, que é opcional.

---

## 1. Como abrir o site

- **Recomendado:** abra a pasta `base_forte_leste` no VS Code e clique em **Go Live** (extensão Live Server). Assim tudo funciona, inclusive as legendas do vídeo.
- **Também funciona:** dar dois cliques no `index.html`. A única diferença é que o Chrome bloqueia as legendas (`.vtt`) quando a página é aberta direto do disco. É uma regra de segurança do navegador, não um erro do código.
- **Internet:** precisa de internet para carregar as fontes do Google e o mapa. Sem internet, o site usa fontes reserva (Verdana e Arial Narrow) e continua funcionando.

## 2. Estrutura de pastas

```
base_forte_leste/
├── index.html                 Início: banner, essência, aulas de sábado, atalhos, depoimentos, FAQ
├── sobre.html                 Quem somos: história, missão/visão/valores, eventos, acessibilidade
├── modalidades.html           6 modalidades + vídeo (<video>) e áudio (<audio>)
├── professor.html             Professores com <figure> e <figcaption>
├── blog.html                  Notícia principal completa + publicações em <article>
├── aula-experimental.html     Dois caminhos + 2 formulários validados
├── acoes-sociais.html         Projeto social, inclusão, reciclagem, galeria e tabela de impacto
├── turmas-horarios.html       Grade de horários em <table>
├── contato.html               Contatos, mapa em <iframe>, formulário e créditos da equipe
├── orcamento_hospedagem.html  Publicação, hospedagem, domínio e papel x digital
├── css/style.css              Folha de estilos única, dividida em 23 seções comentadas
├── js/script.js               Barra de acessibilidade (opcional)
├── img/                       Logo, textura do tatame, ícones, retratos, galeria e pôster do vídeo
├── assets/video/              Vídeo do treino (.mp4) e legendas (.vtt)
├── assets/audio/              Toque de berimbau (.mp3)
└── docs/                      Este guia
```

## 3. Onde está cada requisito

| Requisito do enunciado | Página | Onde olhar no código |
| :-- | :-- | :-- |
| Menu fixo no topo ligando as 10 páginas | Todas | `<header class="cabecalho">` e `<nav class="menu">`; CSS seção 6 (`position: sticky`) |
| Rodapé com contatos, redes, horário, equipe, acessibilidade e sustentabilidade | Todas | `<footer class="rodape">`; CSS seção 21 |
| Banner, essência, destaque das aulas de sábado | index.html | seções 1, 2 e 3 do `<main>` |
| Atalhos das modalidades, depoimentos e FAQ | index.html | seções 4, 5 e 6 (`<details>` e `<summary>` no FAQ) |
| História, missão/visão/valores, eventos, acessibilidade PCD | sobre.html | linha do tempo em `<ol>` com `<time>`; `id="acessibilidade"` |
| 6 modalidades com benefícios, foco, músculos e adaptação PCD | modalidades.html | um `<article>` por modalidade, ficha em `<dl>` |
| `<video controls poster="...">` e `<audio controls>` | modalidades.html | seção "Veja e ouça o treino" (vídeo com `<track>` de legendas) |
| Perfis com `<figure>` e `<figcaption>` (foto e fonte) | professor.html | `<article class="perfil">` |
| `<article>`, notícia principal completa, bem-estar, sono, estresse e sustentabilidade | blog.html | `id="artigo-sono"` e grade "Mais publicações" |
| Formulários com `<label for>`, `required`, `email`, `tel`, `date`, `number` e `pattern` | aula-experimental.html | `#agendamento` e `#inscricao-sabado` |
| Galeria com `<figure>`/`<figcaption>` e `<table>` de impacto | acoes-sociais.html | seções "Galeria" e `id="impacto"` |
| Grade em `<table>`, `<thead>` e `<tbody>`, com professores e vagas | turmas-horarios.html | `<table class="tabela-horarios">` |
| Endereço, mapa em `<iframe>`, telefones, redes, formulário e créditos | contato.html | `<iframe class="mapa">` e `id="creditos"` |
| 3 hospedagens (com gratuitas e verde), 3 domínios, justificativa, papel x digital | orcamento_hospedagem.html | tabelas e `id="papel-digital"` |

## 4. Pontos fortes para explicar ao professor

1. **HTML semântico:** `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`, `address` e `time`.
2. **Página atual no menu:** o atributo `aria-current="page"` marca o link da página aberta. O CSS usa esse mesmo atributo para pintar o link de amarelo.
3. **Variáveis CSS (`:root`):** todas as cores ficam em um só lugar. O modo alto contraste só redefine as variáveis (CSS seção 4.5).
4. **Grade responsiva sem media query:** `grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr))`. O navegador decide quantas colunas cabem.
5. **Mobile first:** o CSS foi escrito para o celular e as media queries da seção 22 ajustam para telas maiores.
6. **FAQ sem JavaScript:** `<details>` e `<summary>` abrem e fecham sozinhos.
7. **Validação HTML5:**
   - telefone com `pattern="\(\d{2}\) \d{4,5}-\d{4}"`;
   - idade com `min` e `max`;
   - data das aulas de sábado com `min="2026-11-14"` (um sábado) e `step="7"`: o navegador só aceita sábados.
8. **Confirmação de envio sem JavaScript:** o formulário envia para `#confirmacao-...` e o seletor `:target` mostra a mensagem.
9. **Pseudo-elementos `::before` e `::after`:** faixa preta embaixo dos títulos, fitas adesivas do cartaz, aspas dos depoimentos e balão do botão do WhatsApp.
10. **Especificidade:** `.cabecalho-topo .cabecalho-acao` (duas classes) vence `.botao` (uma classe). Isso está explicado em um comentário no CSS.
11. **Acessibilidade:** link "Pular para o conteúdo", foco visível, `alt` nas imagens, `label` em todos os campos, legendas no vídeo, descrição do áudio, contraste nível AA, fonte Atkinson Hyperlegible e respeito a `prefers-reduced-motion`.
12. **JavaScript opcional:** a barra começa com `hidden` e só aparece quando o script roda. Sem JavaScript, o site continua completo.

## 5. Roteiro de testes para a apresentação

| Teste | Como fazer | Resultado esperado |
| :-- | :-- | :-- |
| Menu fixo | Rolar qualquer página | Cabeçalho e menu continuam no topo |
| Teclado | Apertar Tab ao abrir a página | Aparece "Pular para o conteúdo principal" e o foco fica visível |
| Data só aos sábados | Formulário de sábado, escolher uma segunda-feira | O navegador recusa e sugere o sábado mais próximo |
| Telefone | Digitar `11912345678` | Recusado; `(11) 91234-5678` é aceito |
| Idade | Digitar 9 ou 18 no formulário de sábado | Recusado (só de 10 a 17) |
| Envio vazio | Clicar em enviar sem preencher | O navegador mostra o primeiro campo obrigatório |
| Envio válido | Preencher tudo e enviar | Aparece a mensagem verde de confirmação |
| Alto contraste | Barra de acessibilidade, botão "Alto contraste" | Fundo preto, texto branco e links amarelos, mantidos ao trocar de página |
| Tamanho do texto | Botões A− / A / A+ | O texto do site inteiro diminui ou aumenta |
| Celular | F12, modo dispositivo (Ctrl+Shift+M) | Layout em uma coluna, menu rolando para o lado |

## 6. O que confirmar ou trocar antes da entrega

- [ ] **Contatos de exemplo:** endereço, telefones, WhatsApp, e-mail e link do Instagram aparecem em todas as páginas. No VS Code, use **Ctrl+Shift+H** (substituir em todos os arquivos), por exemplo trocando `5511900000000` pelo número real.
- [ ] **Mapa:** no `contato.html`, troque `Itaquera%2C%20S%C3%A3o%20Paulo%20-%20SP` no `src` do `<iframe>` pelo endereço real.
- [ ] **Professores:** só o Adalberto (fundador e professor exclusivo de Muay Thai) vem do levantamento de requisitos. Juliana, Thiago, Edson e Larissa, e todas as premiações e anos de experiência, são exemplos.
- [ ] **Fotos:** as imagens são ilustrações feitas para o projeto. Se tiverem fotos reais com autorização de uso de imagem, salvem com o mesmo nome de arquivo.
- [ ] **Conteúdo ilustrativo:** depoimentos, linha do tempo, eventos e números da tabela de impacto.
- [ ] **Aulas de sábado:** o README ainda marca a idade mínima e o horário como "[Confirmar]". O site usa 10 a 17 anos, das 9h às 11h.
- [ ] **Vídeo e áudio:** são demonstrativos (animação e berimbau sintetizado). Se gravarem os reais, mantenham os nomes dos arquivos e ajustem o `.vtt`.

## 7. Diferenças em relação ao README do repositório

- O README lista 5 modalidades (sem Capoeira) e outros nomes de arquivo (`historia.html`, `blognews.html`...). O site segue a estrutura do enunciado atual: vale atualizar a seção 9 do README.
- O README diz que o plano Família vale "a partir de duas pessoas"; no levantamento com o CEO, foi "a partir de três". O site não cita o número.
- O README prevê o envio do formulário para o WhatsApp por JavaScript. Nesta versão, o JavaScript ficou só na acessibilidade, e o envio é demonstrativo.
- No README, o usuário do Williams aparece como `WilliansVargas-Code`, mas o repositório está em `WilliamsVargas-Code`.

## 8. Publicar no GitHub Pages

1. Copie o conteúdo da pasta `base_forte_leste` para a raiz do repositório (o `index.html` precisa ficar na raiz).
2. No GitHub: **Settings > Pages > Build and deployment > Deploy from a branch**, escolha `main` e a pasta `/ (root)` e salve.
3. Em alguns minutos o site fica em `https://williamsvargas-code.github.io/<nome-do-repositório>/`. Como todos os caminhos do site são relativos (`css/style.css`, `img/...`), ele funciona nesse endereço sem ajustes.
4. Cole o link no campo "Link do BaseForteLeste na hospedagem" do README.
