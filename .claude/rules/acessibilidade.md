---
description: Acessibilidade WCAG AA da Base Forte Leste. Vale ao criar ou revisar HTML, CSS, JS, mídia, formulário ou contraste.
paths:
  - "public/**/*.html"
  - "public/**/*.css"
  - "public/**/*.js"
---

# Acessibilidade — Base Forte Leste

## 1. Objetivo

Garantir que qualquer pessoa use o site pelo teclado, por leitor de tela ou com pouca visão, no nível AA da WCAG 2.2. É um dos três pilares do projeto e atende o público com deficiência da turma inclusiva.

## 2. Contexto

A home já traz link de pular conteúdo (`.pular-conteudo`), barra com A−, A, A+, alto contraste (classes `fonte-*` e `alto-contraste` no `<html>`, salvas no `localStorage`) e o botão “Ouvir página”, que lê o `<main>` ou o trecho selecionado com a voz do navegador (Web Speech API, seção 11 do `script.js`), foco com anel duplo preto e amarelo, classe `.visualmente-oculto` e o bloco `prefers-reduced-motion`. A seção `sobre.html#acessibilidade` descreve essas medidas.

## 3. Regras

- Ordem do DOM é a ordem de leitura. Não dependa só de cor para informar estado.
- Foco visível em link, botão e campo. Não remova `outline` sem substituto de contraste equivalente.
- Botão da barra com `aria-label` claro. Os de contraste e de leitura usam `aria-pressed`.
- Leitura em voz só começa com o clique da pessoa, em `pt-BR`. Esc ou novo clique param a fala, o botão troca para “Parar leitura” e a voz para ao sair da página (`pagehide`). Sem suporte no navegador, o botão fica `hidden`.
- Texto alternativo descreve a função da imagem. Foto de professor e galeria usam `figure` e `figcaption`.
- Vídeo com `<track kind="captions">` em português; áudio com transcrição no próprio HTML; `iframe` do mapa com `title`.
- Erro de formulário em texto, associado ao campo (`aria-invalid` e `p.mensagem-erro` com `role="alert"`).
- Alvo de toque com cerca de 44px e link que faz sentido fora da frase.
- Toda página nova é testada com o alto contraste ligado e com o A+ no máximo.

## 4. Exemplo

```html
<button type="button" data-acao="contraste" aria-pressed="false">Alto contraste</button>
<button type="button" data-acao="leitura" aria-pressed="false" aria-label="Ouvir o conteúdo da página em voz alta">Ouvir página</button>

<a href="https://wa.me/5511900000000" target="_blank" rel="noopener noreferrer">
  (11) 90000-0000<span class="visualmente-oculto"> (abre em nova aba)</span></a>
```

## 5. Erros a evitar

- Informação só em cor (borda vermelha = erro, sem texto).
- `tabindex` positivo ou `div` clicável no lugar de `button` ou `a`.
- Captcha, texto dentro de imagem ou conteúdo que pisca.
- `autoplay` em vídeo ou áudio, ou leitura em voz que começa sozinha ao abrir a página.
- Leitura em voz por serviço externo ou com chave de API: use só o `speechSynthesis` do navegador.
- Prometer na página um recurso que o código não tem.

## 6. Perguntas

Se não houver texto alternativo, legenda, transcrição ou rótulo definido, pergunte. Não invente uma descrição vaga para “cumprir” a regra.
