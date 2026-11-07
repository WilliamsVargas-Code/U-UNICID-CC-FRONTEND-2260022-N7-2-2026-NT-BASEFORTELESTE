# Evidências de Testes – Base Forte Leste

Registro dos testes do site da Academia Base Forte Leste. As capturas de tela ficam em `docs/evidencias/`.

**Legenda de status:** ✅ Aprovado · ⚠️ Aprovado com ressalvas · ❌ Reprovado · ⏳ Pendente

---

## 1. Validação W3C do HTML (07/11/2026)

**Ferramenta:** Nu Html Checker (https://validator.w3.org/nu/), opção *Check by file upload*, com "errors & warnings only" marcado.
**Executado por:** equipe. As capturas mostram o nome do arquivo validado no título "Showing results for…".

| Página | Versão do validador | Erros | Avisos | Status | Evidência |
|---|---|---|---|---|---|
| index.html | vnu 26.11.5 | 0 | 0 | ✅ | [w3c-index.png](evidencias/w3c-index.png) |
| sobre.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-sobre.png](evidencias/w3c-sobre.png) |
| modalidades.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-modalidades.png](evidencias/w3c-modalidades.png) |
| professor.html | vnu 26.11.5 | 0 | 0 | ✅ | [w3c-professor.png](evidencias/w3c-professor.png) |
| blog.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-blog.png](evidencias/w3c-blog.png) |
| aula-experimental.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-aula-experimental.png](evidencias/w3c-aula-experimental.png) |
| acoes-sociais.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-acoes-sociais.png](evidencias/w3c-acoes-sociais.png) |
| turmas-horarios.html | vnu 26.11.5 | 0 | 0 | ✅ | [w3c-turmas-horarios.png](evidencias/w3c-turmas-horarios.png) |
| contato.html | vnu 26.11.5 | 0 | 0 | ✅ | [w3c-contato.png](evidencias/w3c-contato.png) |
| orcamento_hospedagem.html | vnu 26.11.4 | 0 | 0 | ✅ | [w3c-orcamento.png](evidencias/w3c-orcamento.png) |
| css/style.css | vnu 26.11.4 (Nu Html Checker, que também valida CSS) | 0 | 0 | ✅ | [w3c-css.png](evidencias/w3c-css.png) |

> **Observação:** a versão do validador varia entre 26.11.4 e 26.11.5 porque o site do W3C usa mais de um servidor. Isso não muda o resultado.
> **Processo:** durante a validação, duas capturas foram descartadas. O arquivo novo tinha sido escolhido, mas o botão *Check* não foi clicado, e a tela ainda mostrava o resultado da página anterior. A acoes-sociais.html foi validada de novo corretamente.

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

| Item | Como testar | Status | Evidência |
|---|---|---|---|
| Link "Pular para o conteúdo" | 1º `Tab` na página | ⏳ | |
| Foco visível | Navegar com `Tab` | ⏳ | |
| Alto contraste mantido ao recarregar | Ativar e apertar F5 | ⏳ | |
| Aumentar e diminuir texto | Botões A− / A / A+ | ⏳ | |
| WAVE (index, aula-experimental, contato) | https://wave.webaim.org/ | ⏳ | |
| Lighthouse – index.html, desktop (07/11/2026, 17:41, via Live Server `127.0.0.1:5500`) | Chrome F12 → Lighthouse (Navigation) | ✅ Accessibility 100 · Best Practices 100 · SEO 100 | [print](evidencias/lighthouse-index-desktop.png) · [relatório HTML](evidencias/lighthouse-index-desktop.html) |
| Lighthouse – index.html, celular (07/11/2026, 17:58, via Live Server `127.0.0.1:5500`; rodapé do relatório: *Emulated Moto G Power*, *Slow 4G throttling*) | Chrome F12 → Lighthouse (Navigation), Device: Mobile | ✅ Accessibility 100 · Best Practices 100 · SEO 100 | [print das notas](evidencias/lighthouse-index-mobile.png) · [print do rodapé](evidencias/lighthouse-index-mobile-rodape.png) |

## 4. Responsividade

| Largura | Página | Status | Evidência |
|---|---|---|---|
| Celular (375 px) | index.html | ⏳ | |
| Celular (375 px) | turmas-horarios.html (tabela) | ⏳ | |
| Tablet (768 px) | index.html | ⏳ | |
| Desktop | index.html | ⏳ | |

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
| Deploy na Vercel com status *Ready* | ⏳ | |
| Site aberto pela URL com HTTPS | ⏳ | |
| Commits de todos os integrantes | ⏳ | |
| Pull request | ⏳ | |
