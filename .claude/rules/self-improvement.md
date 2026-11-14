---
description: Quando atualizar as regras da Base Forte Leste a partir de padrões novos ou erros repetidos.
---

# Melhoria contínua das regras

## 1. Objetivo

As regras acompanham o código. Padrão que se repete vira regra; regra que o código superou é atualizada ou marcada como obsoleta.

## 2. Contexto

Conjunto atual em `.claude/rules/`. Exemplos devem citar arquivos reais (`public/index.html`, `public/css/style.css`), não um projeto genérico.

## 3. Regras

Atualize uma regra quando:

- O mesmo padrão aparecer em 3 ou mais páginas (bloco de formulário, cartão de professor, notícia do blog, tabela com `data-label`).
- O mesmo erro voltar: segundo `h1`, classe em inglês, cor fora das variáveis, erro do W3C.
- A revisão do Pull Request repetir o mesmo pedido.
- Entrar algo novo na stack: servidor, outra pasta em `public/`, nova mídia ou mudança de hospedagem.

Ao sugerir mudança:

- Compare o código novo com a regra correspondente.
- Mostre o diff da regra antes de salvar.
- Prefira completar `html-semantico.md` ou `css-estilo.md` em vez de abrir outro arquivo para o mesmo assunto.
- Marque padrão antigo como obsoleto e diga o que usar no lugar.
- Siga `claude-rules.md` para nome, pasta e os seis pontos.

## 4. Exemplo

Se três páginas repetirem o mesmo aviso:

```html
<p class="aviso">Dados fictícios, criados para fins acadêmicos.</p>
```

inclua em `html-semantico.md` a obrigação de avisar quando o número ou o depoimento for fictício.

## 5. Erros a evitar

- Criar regra por um caso isolado.
- Exemplo inventado, de outra stack, ou desatualizado em relação ao `style.css`.
- Apagar uma regra ainda usada sem dizer para onde o conteúdo foi.

## 6. Perguntas

Mostre a proposta e espere confirmação antes de gravar a regra nova ou a alteração.
