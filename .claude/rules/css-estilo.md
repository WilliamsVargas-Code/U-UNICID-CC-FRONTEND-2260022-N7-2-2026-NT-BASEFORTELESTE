---
description: Padrões de CSS da Base Forte Leste. Variáveis, mobile first e classes em português.
paths:
  - "public/**/*.css"
---

# CSS — Base Forte Leste

## 1. Objetivo

Manter uma única folha de estilo, com a mesma identidade (tatame azul, faixa preta com ponteira, cartaz amarelo) em todas as páginas.

## 2. Contexto

Tudo vive em `public/css/style.css`, dividido em 23 seções numeradas no índice do topo. Cores, fontes e medidas estão em `:root`. A base vale para celular; as media queries da seção 22 começam em 640px, 768px e 960px. Fontes: League Gothic (títulos) e Atkinson Hyperlegible (texto).

## 3. Regras

- Reutilize as variáveis: `--azul-tatame` `#1b4b8f`, `--amarelo-faixa` `#f5b800`, `--preto-faixa` `#1c1c1c`, `--branco-kimono`, `--vermelho-ponteira` `#c62828`, `--verde-reciclagem` `#2e7d32`, `--largura-maxima`, `--raio`.
- Cor de texto, fundo, link e borda usa as variáveis de função (`--cor-texto`, `--cor-fundo`, `--cor-link`, `--cor-borda`...). São elas que o `html.alto-contraste` troca.
- Classes em português, kebab-case, no padrão bloco-parte: `.cabecalho`, `.cabecalho-topo`, `.botao`, `.botao-amarelo`, `.rodape-grade`.
- Estilo novo entra na seção numerada correspondente, com comentário explicando o porquê.
- Medidas de texto e espaço em `rem`, para o aumento de fonte da barra funcionar.
- Layout com Flexbox ou Grid. Largura de leitura dentro de `.container`.
- `!important` só nos dois lugares que já existem: `[hidden]` e `prefers-reduced-motion: reduce`.
- Contraste de texto sobre o fundo em nível AA, também no modo alto contraste.

## 4. Exemplo

```css
/* Grade automática: cada coluna tem no mínimo 16rem. */
.grade {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
}
```

## 5. Erros a evitar

- Cor hexadecimal nova quando já existe variável.
- Classe em inglês (`btn-primary`, `wrapper`) ou nome genérico (`.box`, `.item1`).
- Estilo escrito primeiro para desktop e só depois “corrigido” no celular.
- Medida em `px` para fonte (quebra o A+ da barra de acessibilidade).
- Segundo arquivo CSS, framework ou `style=""` no HTML.

## 6. Perguntas

Se a tela pedir uma cor, um componente ou um breakpoint que o arquivo ainda não tem, pergunte antes de criar.
