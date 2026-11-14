---
description: Como criar ou editar regras do Claude neste repositório.
---

# Onde e como escrever regras

## 1. Objetivo

Toda regra nova entra no formato que o Claude Code carrega, com o roteiro de seis pontos da disciplina.

## 2. Contexto

O site da Base Forte Leste foi desenvolvido com o Claude. As regras do projeto ficam versionadas em `.claude/rules/` e o Claude Code lê todos os arquivos `.md` dessa pasta. O plano de contexto e escopo fica no `README.md` da raiz e não substitui uma regra.

## 3. Regras

- Salve apenas em `.claude/rules/`, com nome em kebab-case e extensão `.md`.
- Não coloque regra na raiz, em `docs/`, em `public/docs/` nem em outra pasta.
- Frontmatter com `description` (para a equipe ler) e `paths` (quando a regra for por tipo de arquivo). O Claude Code só usa o campo `paths`.
- Regra sem `paths` é carregada em toda conversa: use só para regra curta e geral. Regra de HTML ou CSS usa `paths` apontando para `public/`.
- `paths` é uma lista YAML, com um padrão por linha, entre aspas.
- Cada regra de código traz seis seções: objetivo, contexto, regras em tópicos, exemplo concreto, erros a evitar e quando perguntar.
- Uma preocupação por arquivo. Menos de 80 linhas. Exemplo copiado do código real da Base Forte Leste.

## 4. Exemplo

```
.claude/rules/
├── projeto-baseforteleste.md
├── html-semantico.md
├── css-estilo.md
├── acessibilidade.md
├── git-commits.md
├── claude-rules.md
└── self-improvement.md
```

```markdown
---
description: Para que serve a regra
paths:
  - "public/**/*.html"
---
```

## 5. Erros a evitar

- Regra genérica, sem exemplo deste repositório.
- Dois assuntos no mesmo arquivo (HTML e commit, por exemplo).
- Regra longa sem `paths`, carregada em toda conversa sem necessidade.
- Arquivo `.txt` ou `.mdc` no lugar de `.md`.
- `paths` escrito numa linha só ou apontando para a raiz, quando as páginas estão em `public/`.

## 6. Perguntas

Se a regra nova valer sempre ou só para alguns arquivos, pergunte antes de escrever o frontmatter.
