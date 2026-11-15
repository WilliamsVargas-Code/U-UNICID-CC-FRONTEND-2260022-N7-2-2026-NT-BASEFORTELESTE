---
description: HTML5 semântico das páginas da Base Forte Leste, alinhado ao public/index.html.
paths:
  - "public/**/*.html"
---

# HTML semântico — Base Forte Leste

## 1. Objetivo

Cada página nova repete a estrutura acessível da home, para o site inteiro funcionar igual no teclado, no leitor de tela e no validador do W3C (zero erros).

## 2. Contexto

HTML5 puro, `lang="pt-BR"`. Estilo só por `css/style.css` e comportamento só por `js/script.js` com `defer`. A home já define o miolo: `a.pular-conteudo`, `div.barra-acessibilidade`, `header.cabecalho`, `nav.menu#menu-principal`, `main#conteudo`, `footer.rodape`. Os comentários `<!-- -->` explicam o código para a apresentação.

## 3. Regras

- Copie de `index.html` o `<head>`, o link “Pular para o conteúdo principal”, a barra de acessibilidade com os 5 botões (A−, A, A+, Alto contraste e Ouvir página), o cabeçalho, o menu com os 10 links e o rodapé.
- O “Ouvir página” lê o `innerText` do `main#conteudo`: conteúdo importante fica dentro do `<main>`. Só o que está escondido (`hidden` ou `display: none`) fica de fora; textos em `.visualmente-oculto` e com `aria-hidden` são lidos.
- Ajuste `aria-current="page"` para a página aberta e o `<title>` no formato `Nome da página | Academia Base Forte Leste`.
- Um único `<h1>` por página. Cada `<section>` tem `aria-labelledby` apontando para o `id` do seu `<h2>`.
- Use `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `address` e `footer`. Não troque esses elementos por `div`.
- Toda `img` tem `alt` que descreve a informação, mais `width` e `height`. Logo ao lado do nome do site fica com `alt=""`.
- Formulário: cada campo dentro de `div.campo`, com `label for` igual ao `id`, `required` e dica ligada por `aria-describedby`. Grupos de opções em `fieldset` + `legend`.
- Tabela com `caption`, `th scope` e `data-label` em cada `td`.
- Link externo com `target="_blank" rel="noopener noreferrer"` e aviso “(abre em nova aba)” em `.visualmente-oculto`.

## 4. Exemplo

```html
<section class="secao" aria-labelledby="titulo-essencia">
  <div class="container duas-colunas duas-colunas-centro">
    <div>
      <h2 id="titulo-essencia">Uma academia da Zona Leste, para a Zona Leste</h2>
```

## 5. Erros a evitar

- Segundo `<h1>`, título só com estilo ou seção sem nome acessível.
- `alt=""` em imagem que traz conteúdo, ou `alt` genérico (“imagem”, “foto”).
- `style=""`, `onclick=""` ou `<script>` dentro da página. Segundo arquivo CSS ou JS.
- Menu ou barra de acessibilidade diferente da home (por exemplo, página sem o botão `data-acao="leitura"`), ou link para página que não está entre as 10.
- `&` solto em URL dentro do HTML (use `&amp;`, como no link das fontes do Google).

## 6. Perguntas

Na dúvida sobre o texto, a imagem ou se a página está no escopo, pergunte antes de criar o arquivo.
