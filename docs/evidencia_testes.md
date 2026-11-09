# Evidências de Testes – Base Forte Leste

Registro dos testes do site da Academia Base Forte Leste. As capturas de tela ficam em `docs/evidencias/`.

**Legenda de status:** ✅ Aprovado · ⚠️ Aprovado com ressalvas · ❌ Reprovado · ⏳ Pendente

---

## 1. Validação W3C (09/11/2026, versão publicada)

**Ferramenta:** Nu Html Checker (https://validator.w3.org/nu/), opção *Check by address*, com "errors & warnings only" marcado.
**Executado por:** equipe, em 09/11/2026, validando **o endereço do site publicado na Vercel** (`https://u-unicid-cc-frontend-2260022-n7-2-2.vercel.app/...`). Assim, as capturas provam que foi validada exatamente a versão que está no ar.

| Página | Versão do validador | Erros | Avisos | Status | Evidência |
|---|---|---|---|---|---|
| index.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-index.png](evidencias/w3c-index.png) |
| sobre.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-sobre.png](evidencias/w3c-sobre.png) |
| modalidades.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-modalidades.png](evidencias/w3c-modalidades.png) |
| professor.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-professor.png](evidencias/w3c-professor.png) |
| blog.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-blog.png](evidencias/w3c-blog.png) |
| aula-experimental.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-aula-experimental.png](evidencias/w3c-aula-experimental.png) |
| acoes-sociais.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-acoes-sociais.png](evidencias/w3c-acoes-sociais.png) |
| turmas-horarios.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-turmas-horarios.png](evidencias/w3c-turmas-horarios.png) |
| contato.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-contato.png](evidencias/w3c-contato.png) |
| orcamento_hospedagem.html | vnu 26.11.9 | 0 | 0 | ✅ | [w3c-orcamento-hospedagem.png](evidencias/w3c-orcamento-hospedagem.png) |
| css/style.css | vnu 26.11.9 (o Nu Html Checker também valida CSS) | 0 | 0 | ✅ | [w3c-css.png](evidencias/w3c-css.png) |

> **Histórico:** a primeira validação foi feita em 07/11/2026 por envio de arquivo (também com 0 erros). Como as 10 páginas e o CSS mudaram em 08 e 09/11 (menu hambúrguer, validação dos formulários em JavaScript e tabelas em formato de cartão no celular), a validação foi refeita sobre a versão publicada, e os prints antigos foram substituídos por estes.
> **Processo:** na primeira rodada, duas capturas foram descartadas porque mostravam o resultado da página anterior (o botão *Check* não tinha sido clicado). Nesta rodada, a captura do `blog.html` foi refeita porque tinha sido cortada antes da faixa do resultado.

---

## 2. Testes automatizados com apoio de IA (07/11/2026)

**Executados com apoio de IA (Claude, Anthropic)** durante o desenvolvimento, usando scripts em Python e o navegador Chrome em modo automático (Playwright). A equipe pode repetir os testes manuais equivalentes das seções seguintes.

| Teste | Escopo | Resultado |
|---|---|---|
| Links, âncoras (`#id`), imagens, vídeo, áudio e scripts locais | 10 páginas | ✅ nenhum quebrado |
| `<label for>` ligado a um campo com o mesmo `id` | 10 páginas | ✅ todos os campos com rótulo |
| `alt` em todas as imagens | 10 páginas | ✅ |
| IDs duplicados e estilo inline | 10 páginas | ✅ nenhum |
| Hierarquia de títulos | 10 páginas | ✅ um `h1` por página, sem pular nível |
| `aria-current="page"` no link certo do menu | 10 páginas | ✅ |
| Contraste de cores (WCAG) | 19 combinações de cor do site | ✅ todas no nível AA (menor: 4,78:1 na borda dos campos, mínimo exigido 3:1) |
| Rolagem horizontal | 10 páginas × 2 larguras (1366 px e 390 px) | ✅ nenhuma |
| Erros de JavaScript no console | 10 páginas | ✅ nenhum |

### Validação dos formulários no Chrome

| Cenário | Esperado | Resultado |
|---|---|---|
| Data de sábado: segunda-feira (16/11/2026) | Recusada | ✅ |
| Data de sábado: sábado (21/11/2026) | Aceita | ✅ |
| Data de sábado anterior ao mínimo (07/11/2026) | Recusada | ✅ |
| Telefone `11912345678` | Recusado | ✅ |
| Telefone `(11) 91234-5678` e `(11) 2000-0000` | Aceitos | ✅ |
| Idade 9 e 18 (sábado, de 10 a 17) | Recusadas | ✅ |
| Idade 15 | Aceita | ✅ |
| E-mail `responsavel@` | Recusado | ✅ |
| Aula experimental com idade 6 (mínimo 7) | Recusada | ✅ |
| Envio do formulário vazio | Bloqueado | ✅ |
| Envio com tudo correto | Mensagem de confirmação (`:target`) | ✅ |
| Contato: mensagem com menos de 10 caracteres | Recusada | ✅ |
| Vídeo, pôster e áudio | Carregam (14 s e 16 s) | ✅ |
| Legendas do vídeo via servidor local | 6 legendas carregadas | ✅ |

> Abrindo o site direto pelo arquivo (`file://`), o Chrome bloqueia as legendas `.vtt` por segurança. Pelo Live Server ou pela URL publicada, elas funcionam.

---

## 3. Acessibilidade (manual)

**Executado por:** equipe, em 08/11/2026, no **Firefox** com Live Server (`127.0.0.1:5500`). Os testes do Lighthouse foram feitos no **Chrome** em 07/11/2026. Ter usado dois navegadores mostra que o site funciona nos dois.

| Item | Como testar | Status | Evidência |
|---|---|---|---|
| Link "Pular para o conteúdo" | 1º `Tab` na página | ✅ aparece no topo com foco; a barra de status do navegador mostra o destino `index.html#conteudo` | [a11y-pular-conteudo.png](evidencias/a11y-pular-conteudo.png) |
| Foco visível | Navegar com `Tab` | ✅ contorno amarelo no link do menu (print com alto contraste ativo) | [a11y-foco-visivel.png](evidencias/a11y-foco-visivel.png) |
| Alto contraste mantido ao trocar de página | Ativar na index e abrir outra página | ✅ continua ativo em modalidades.html (escolha salva no `localStorage`) | [a11y-alto-contraste.png](evidencias/a11y-alto-contraste.png) |
| Aumentar texto | Botão A+ | ✅ o texto aumenta e o menu se reorganiza em duas linhas, sem cortar nada | [a11y-fonte-maior.png](evidencias/a11y-fonte-maior.png) |
| WAVE (index, aula-experimental, contato) | https://wave.webaim.org/ (precisa do site publicado) | ⏳ | |
| Lighthouse – index.html, desktop (07/11/2026, 17:41, via Live Server `127.0.0.1:5500`) | Chrome F12 → Lighthouse (Navigation) | ✅ Accessibility 100 · Best Practices 100 · SEO 100 | [print](evidencias/lighthouse-index-desktop.png) · [relatório HTML](evidencias/lighthouse-index-desktop.html) |
| Lighthouse – index.html, celular (07/11/2026, 17:58, via Live Server `127.0.0.1:5500`; rodapé do relatório: *Emulated Moto G Power*, *Slow 4G throttling*) | Chrome F12 → Lighthouse (Navigation), Device: Mobile | ✅ Accessibility 100 · Best Practices 100 · SEO 100 | [print das notas](evidencias/lighthouse-index-mobile.png) · [print do rodapé](evidencias/lighthouse-index-mobile-rodape.png) |
| Lighthouse – site publicado na Vercel (09/11/2026, 14:24, com a categoria Performance) | Chrome F12 → Lighthouse | ✅ Performance 94 · Accessibility 100 · Best Practices 100 · SEO 100 | [lighthouse-site-publicado.png](evidencias/lighthouse-site-publicado.png) |

## 4. Responsividade

**Executado por:** equipe, em 08/11/2026, no Firefox, usando o *Modo de Design Responsivo* (Ctrl+Shift+M). A largura testada aparece na barra de cima de cada print.

| Largura | Página | Status | Evidência |
|---|---|---|---|
| Celular pequeno (320 px) | modalidades.html | ✅ texto e botões se reorganizam, sem rolagem lateral da página | [resp-modalidades-320.png](evidencias/resp-modalidades-320.png) |
| Celular (375 px) | index.html | ✅ título quebra em linhas e os botões ficam empilhados | [resp-index-375.png](evidencias/resp-index-375.png) |
| Celular (375 px) | turmas-horarios.html (tabela) | ✅ a tabela rola para o lado dentro da própria caixa; a página não rola | [resp-horarios-375.png](evidencias/resp-horarios-375.png) |
| Tablet (768 px) | index.html | ✅ o botão "Agendar" volta ao topo e o cartaz desce para baixo do texto | [resp-index-768.png](evidencias/resp-index-768.png) |
| Desktop (1920 px) | index.html | ✅ layout em duas colunas | [resp-index-desktop.png](evidencias/resp-index-desktop.png) |

> No celular, o menu fica em uma linha que rola para o lado (`overflow-x: auto` em `.menu-lista`). Isso é intencional: assim os 10 links ficam acessíveis sem ocupar a tela inteira.

## 5. Formulários (manual)

| Cenário | Esperado | Status | Evidência |
|---|---|---|---|
| Enviar vazio | Bloqueia e mostra o aviso | ⏳ | |
| Data que não é sábado | Recusa | ⏳ | |
| Telefone sem parênteses | Recusa | ⏳ | |
| Idade 18 nas aulas de sábado | Recusa | ⏳ | |
| Tudo válido | Mensagem verde de confirmação | ⏳ | |

## 6. Multimídia

| Recurso | Cenário | Status | Evidência |
|---|---|---|---|
| Vídeo | Pôster antes do play | ⏳ | |
| Vídeo | Legendas na tela | ⏳ | |
| Áudio | Toca e abre a descrição | ⏳ | |
| Mapa (iframe) | Carrega na página Contato | ⏳ | |

## 7. Deploy e GitHub

| Evidência | Status | Evidência |
|---|---|---|
| Deploy na Vercel com status *Ready* | ✅ Deploy automático a cada merge na `main`; o PR #2 mostra o robô da Vercel com *Ready* e *2 checks passed* (09/11/2026) | [github-pr2-vercel.png](evidencias/github-pr2-vercel.png) |
| Site aberto pela URL com HTTPS | ✅ `https://u-unicid-cc-frontend-2260022-n7-2-2.vercel.app`. Todas as validações W3C da seção 1 foram feitas por esse endereço HTTPS | [w3c-index.png](evidencias/w3c-index.png) |
| Commits de todos os integrantes | ✅ A página do repositório mostra **4 contribuidores**: Nickolashbezerra, RaphaelaSeven, WilliamsVargas-Code e PedroCoiado | [github-contribuidores.png](evidencias/github-contribuidores.png) |
| Pull request | ✅ PR #1 "Evidência Lighthouse mobile (100/100/100)": branch `docs/lighthouse-mobile` → `main`. Houve conflito em `docs/evidencia_testes.md`, resolvido manualmente no editor do GitHub; depois o merge foi feito (08/11/2026). | [github-pull-request.png](evidencias/github-pull-request.png) |
| Pull request #2 | ✅ "Validação dos formulários em JavaScript": branch `feat/validacao-js` → `main`, com prévia automática da Vercel antes do merge (09/11/2026) | [github-pr2-vercel.png](evidencias/github-pr2-vercel.png) |
