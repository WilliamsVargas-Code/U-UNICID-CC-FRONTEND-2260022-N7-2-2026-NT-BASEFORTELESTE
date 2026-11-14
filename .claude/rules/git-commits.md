---
description: Mensagens de commit da Base Forte Leste. Vale quando a tarefa for criar um commit.
---

# Commits — Base Forte Leste

## 1. Objetivo

Deixar um histórico curto e legível, que sirva de evidência do trabalho de cada integrante (Nickolas, Pedro, Raphaela e Williams) no diário de bordo.

## 2. Contexto

Repositório Git do trabalho acadêmico no GitHub. Uma branch por tarefa (`docs/secao-5`, `docs/w3c-09-11`), integrada à `main` por Pull Request revisado por outro integrante. A Vercel publica a `main`. Commit só quando a equipe pedir.

## 3. Regras

- Mensagem em português, no imperativo, com o tipo e o porquê: `feat: adiciona galeria da turma inclusiva`.
- Tipos: `feat` (página ou recurso), `fix` (correção), `style` (só aparência), `docs` (README, `docs/` ou regra), `chore` (configuração).
- Branch com o mesmo tipo do trabalho: `feat/galeria`, `fix/menu-mobile`, `docs/secao-6`.
- Um commit por mudança coerente. Não misture página nova com refatoração do CSS inteiro.
- Não use `--no-verify`, `--amend` ou push forçado, a menos que a equipe peça.
- Não versione dado pessoal real, `.env`, senha ou token.

## 4. Exemplo

```
docs: evidências de multimídia (seção 6)

Prints do vídeo com legenda, do áudio e do mapa para o evidencia_testes.md.
```

## 5. Erros a evitar

- Mensagens vazias de contexto: “update”, “ajustes”, “arrumei”.
- Commit direto na `main` sem Pull Request.
- Commit de print temporário, arquivo do sistema (`.DS_Store`, `Thumbs.db`) ou segredo.
- Vários assuntos não relacionados no mesmo commit.

## 6. Perguntas

Se não estiver claro o que entra no commit, mostre o `git status` e pergunte antes de gravar.
