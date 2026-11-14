---
description: Visão geral da Base Forte Leste. Escopo, stack e o que não inventar.
---

# Base Forte Leste — visão do projeto

## 1. Objetivo

Fixar o que este repositório é, para a IA não trocar a tecnologia, o tema ou as páginas no meio da tarefa.

## 2. Contexto

Site da academia de artes marciais Base Forte Leste, em Itaquera (Zona Leste de São Paulo), com foco em impacto social, sustentabilidade e acessibilidade. Disciplina de Front-End, UNICID, 2026.2. Plano completo no `README.md` da raiz.

O site fica em `public/`: 10 páginas HTML5, `css/style.css`, `js/script.js`, `img/` (só SVG, exceto o pôster do vídeo) e `assets/` (áudio e vídeo). Sem framework e sem servidor. Publicado na Vercel: https://u-unicid-cc-frontend-2260022-n7-2-2.vercel.app

## 3. Regras

- Leia o `README.md` antes de criar página, seção ou dependência.
- Mantenha a barra de acessibilidade, o cabeçalho, o menu e o rodapé iguais aos de `public/index.html`.
- Textos em português do Brasil. Endereço, telefones, depoimentos, premiações e métricas são ilustrativos e ficam marcados com comentário `<!-- -->` para a equipe trocar pelos dados reais.
- Modalidades oficiais: Muay Thai, Kickboxing, Boxe, Jiu-Jitsu, Capoeira e No-Gi.
- Não adicione React, Bootstrap, Tailwind, jQuery nem biblioteca de CSS ou JS.
- Não crie página fora da lista das 10 do plano sem perguntar.
- Os valores dos planos não aparecem no site; o interessado consulta pelo WhatsApp.
- Dado pessoal real (de aluno, responsável ou jovem) não entra no código nem no Git.

## 4. Exemplo

Páginas previstas em `public/`: `index.html`, `sobre.html`, `modalidades.html`, `professor.html`, `blog.html`, `aula-experimental.html`, `acoes-sociais.html`, `turmas-horarios.html`, `contato.html`, `orcamento_hospedagem.html`.

Dados que já estão publicados e não devem mudar sem a equipe pedir: aula gratuita aos sábados, das 9h às 11h, para jovens de 10 a 17 anos, com 25 vagas por turma; professor Adalberto no Muay Thai; aluno novo não precisa comprar equipamento.

```html
<!-- ATENÇÃO, EQUIPE: endereço, telefones e e-mail são exemplos. Troquem pelos dados reais da academia. -->
```

## 5. Erros a evitar

- Inventar stack, nome de página, professor ou número de impacto diferente do já publicado.
- Escrever a página na raiz do repositório em vez de `public/`.
- Apagar o comentário que marca um dado como ilustrativo antes de ele ser confirmado.
- Mostrar preço de plano ou mensalidade.

## 6. Perguntas

Se a tarefa mudar o escopo, a pasta das páginas, a stack ou a hospedagem, pergunte antes de editar.
