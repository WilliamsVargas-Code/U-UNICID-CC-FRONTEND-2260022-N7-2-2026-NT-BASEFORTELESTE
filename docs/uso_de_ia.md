## Uso de Inteligência Artificial no Projeto 

 
## Como a IA recebeu contexto
 
| Tipo | O que foi entregue à IA | Onde está no repositório |
| :-- | :-- | :-- |
| **Contexto** | Plano de Contexto e Escopo (visão geral, público-alvo, objetivos, páginas) e o levantamento de requisitos feito com o CEO Adalberto | `README.md` |
| **Plano** | Antes de gerar algo, a IA montava uma lista de tarefas (pesquisar, gerar, conferir, entregar), e a equipe acompanhava cada etapa | Lista de tarefas da conversa |
| **Regras** | Combinados da equipe para a IA: stack, HTML semântico, CSS, acessibilidade, commits | `.claude/rules/` (7 regras) |
 
Ferramentas: **Claude** (Anthropic).: Nickolas Henrique Bezerra (Desenvolvimento da estrutura do site, Regras da IA, Regras atualizadas para a leitura em voz).
             **Gemini** (Alphabet Inc. Google).: Pedro Henrique Ruola Coiado (Desenvolveu com o prompt de comando Caso: Hospedagem, Menu Responsivo e Mock de Formulário)

 
---
 
## 1º Caso: primeira versão do site (07/11/2026)
 
### Prompt utilizado
```
Contexto:
Crie um site acadêmico BaseForteLeste (Academia de artes maciais que visa sustetablidade, acessibilidade e impacto social),
em HTML5 e CSS3 puros, sem frameworks e sem JavaScript.
 
 O site deve ter 10 paginas
index.html Pagina inicial Super importante, porquê as pessoas devem acessar nosso site,
contato.html
orçamento_hospedagem.html descrição do que iremos gastar para hospedar o site 
- História
- Modalidades: Muay Thai, Kickboxing, Boxe, Jiu-Jitsu e No-Gi
- Turmas e Horários
- Blog de Notícias
- Ações Sociais: divulgação das aulas gratuitas aos sábados voltadas ao público juvenil
- Formulário de Interesse: pedido de aula experimental ou inscrição na aula gratuita de sábado, enviado ao WhatsApp da academia
 
link do git hub https://github.com/WilliamsVargas-Code/U-UNICID-CC-FRONTEND-2260022-N7-2-2026-NT-BASEFORTELESTE
```

## 2º Caso: Hospedagem, Menu Responsivo e Mock de Formulário (12/11/2026)

Durante o desenvolvimento do portal da Base Forte Leste, a IA foi utilizada como ferramenta de apoio e mentoria. Abaixo está o registro dos prompts e das decisões tomadas, conforme exigido na rubrica de avaliação do projeto.

### Prompt para "sanduiche" utilizado (12/11/2026)

> na parte do site em versão web, a construção do site não fica responsiva, teria de por as "três barrinhas" para abrir uma aba lateral contendo a logo e as informações para que tenha escalonado as paginas para melhor navegação do usuário. E outra na parte de formulario ela não vai funcionar poderia por informações de um pessoa irreal para ser nosso molde nas partes do formulario e com isso mostramos ao professor que o site tem um "envio" porem sem conexão ao javascript ou a uma chave api;


### Interação 1: Escolha da Hospedagem e Orçamento
- **Prompt Usado:** "Quero que compare três sites: Railway, Vercel e Render para hospedar um site estático. Crie um Readme justificando a escolha e os custos."
- **O que foi aceito:** A estrutura da tabela comparativa e a recomendação técnica de utilizar a Vercel, justificando a escolha devido à franquia de 100GB gratuitos mensais perfeitos para o nosso front-end.
- **O que foi corrigido:** O texto foi adaptado manualmente para refletir o nome do projeto (Base Forte Leste) e formatado para incluir dados de tráfego específicos levantados pela nossa própria pesquisa da equipe.

### Interação 2: Criação de Menu Responsivo e Mock de Formulário
- **Prompt Usado:** "Crie o código HTML, CSS e JS para um menu hambúrguer responsivo e simule o envio do formulário salvando os dados no LocalStorage para apresentação."
- **O que foi aceito:** A lógica do JavaScript utilizando `e.preventDefault()` para impedir o recarregamento da página e a utilização da API do `localStorage` para simular o comportamento de um usuário real enviando dados.
- **O que foi corrigido:** As classes CSS foram ajustadas manualmente e integradas ao nosso arquivo `style.css` para que as cores, tamanhos e tipografias correspondessem à identidade visual original da ONG no projeto.

### Evidências Visuais (Menu Responsivo Implementado)

**Menu fechado (ícone hambúrguer):**
![Cabeçalho com menu hambúrguer fechado] 

**Menu aberto (navegação responsiva com todas as 10 páginas):**
![Menu lateral aberto com todas as páginas] 

### Contexto, plano e regras
- **Contexto:** a IA leu o `README.md` do repositório (pilares, estrutura de pastas, equipe) e usou decisões já tomadas pela equipe: formulário vai para o WhatsApp, valores dos planos não aparecem no site, aluno novo não precisa de equipamento, plano Família a partir de duas pessoas.
- **Plano:** (1) pesquisar custos de hospedagem; (2) criar o CSS e as 10 páginas; (3) validar links, HTML e a ausência de JavaScript; (4) entregar.
- **Regra principal do prompt:** HTML5 e CSS3 puros, sem framework e sem JavaScript.
### O que foi aceito
- A organização em 10 páginas com cabeçalho, menu e rodapé iguais.
- A home com o bloco “Por que acessar este site” e perguntas frequentes em `<details>`.
- A ideia da página de orçamento comparando hospedagem gratuita e paga, com fontes citadas.
- Marcar em destaque todo dado que a academia ainda precisava confirmar, em vez de inventar.
### O que foi corrigido ou mudado pela equipe
- **JavaScript:** a primeira versão fez a barra de acessibilidade e o envio ao WhatsApp só com HTML e CSS, para cumprir o “sem JavaScript”. Depois a equipe decidiu usar JavaScript simples para validar os formulários com mensagens de erro, o que o enunciado da disciplina pedia.
- **Hospedagem:** a IA recomendou o GitHub Pages. A equipe escolheu a **Vercel** e passou a comparar Vercel, Render e Railway, como o professor pediu.
- **Modalidades:** entrou a **Capoeira**, totalizando 6 modalidades.
- **Páginas:** os nomes e o conteúdo seguiram o enunciado atual (`professor.html`, `blog.html`, `aula-experimental.html`, `acoes-sociais.html`, `turmas-horarios.html`) em vez de `historia.html`, `blognews.html` e `formulario.html`.
- **Dados:** os campos marcados “a confirmar” (horários, endereço, telefone) foram preenchidos pela equipe com exemplos identificados como ilustrativos.
---
 
## 3º Caso: regras da IA no modelo do professor (14/11/2026)
 
### Prompts utilizados

> Claude o professor pediu para fazer um rules da criação do site para colocar no repositorio do github, siga o exemplo do professor https://github.com/PauloFratta/PauloFratta-U-UNICID-ADS-CC-ENG-FRONTEND-2260028-N4-2-2026-M-Econectan4

Correção feita pela equipe depois da primeira resposta:

> Quero que use somente os exemplos do professor, nosso site foi desenvolvido com a geração de Inteligência Artificial da Anthropic (Claude) 

 
### Contexto, plano e regras
- **Contexto:** o repositório do professor (7 regras em `.cursor/rules/`, cada uma com objetivo, contexto, regras, exemplo, erros a evitar e perguntas) e o código atual do site em `public/`.
- **Plano:** (1) ler as regras do professor; (2) ler o código real do site; (3) escrever cada regra com exemplos copiados do nosso código; (4) conferir se cada classe, `id` e trecho citado existe.
- **Regra do próprio modelo:** menos de 80 linhas por regra, um assunto por arquivo.
### O que foi aceito
- As 7 regras com as 6 seções do professor e exemplos reais do nosso site (variáveis de cor, `.grade`, `aria-current`, padrão de commits).
- A atualização da seção 9 do `README.md` mostrando a pasta das regras.
### O que foi corrigido
- **Ferramenta:** a primeira versão foi feita para o **Cursor** (`.cursor/rules/`, arquivos `.mdc`), copiando o professor. Como o site foi feito com o Claude, a equipe pediu a troca para o formato do **Claude** (`.claude/rules/`, arquivos `.md`, com o campo `paths` no lugar de `globs`).
- **Quantidade:** a IA tinha criado uma 8ª regra (`javascript`). A equipe pediu para manter só os 7 arquivos do modelo do professor.
- **Envio:** o envio direto pela IA não tinha permissão no GitHub. A equipe subiu os arquivos manualmente, em uma branch e um Pull Request (#6).
---
 
## 4º Caso: regras atualizadas para a leitura em voz (15/11/2026)
 
### Prompt utilizado

> Claude, houve uma adição de código no JavaScript, a opção de escutar o site, o que deve ser mudado no rules, para que possa seguir o novo arquivo do site?

Junto com o prompt foi enviado o site novo (zip) com o botão “Ouvir página”.
 
### Contexto, plano e regras
- **Contexto:** o site novo e as 7 regras já publicadas.
- **Plano:** (1) comparar o site novo com o que estava no GitHub; (2) listar o que mudou; (3) decidir quais regras precisavam mudar; (4) entregar só as regras alteradas.
- **Regra usada:** `self-improvement.md`, que manda atualizar as regras quando entra algo novo na stack.
### O que foi aceito
- A comparação mostrou que mudaram as 10 páginas (botão novo), o `script.js` (seção 11, Web Speech API) e o `sobre.html`. O CSS não mudou.
- Foram atualizadas só 3 regras: `acessibilidade.md`, `html-semantico.md` e `projeto-baseforteleste.md`. As outras 4 continuaram iguais (PR #7).
### O que foi corrigido
- **Erro da IA, pego antes da entrega:** a primeira versão da regra dizia que texto com `aria-hidden` não é lido em voz. Ao conferir o código, a IA viu que a leitura usa `innerText`, que só ignora o que está escondido (`hidden` ou `display: none`), e corrigiu a regra.
- **Ordem de publicação:** ao revisar o repositório, a IA mostrou que as regras já falavam do botão, mas o site no GitHub ainda não tinha a leitura em voz. A equipe combinou subir o site antes de atualizar o restante da documentação.

---

## 5º Caso do uso de IA


### Ferramenta utilizada
- **Gemini (Google)**, usado em novembro de 2026 como mentor técnico especialista em Front-End, acessibilidade e documentação.

### Para que a IA foi usada

| Etapa | O que a IA fez |
| :--- | :--- |
| **Planejamento e Escopo** | Auxiliou na estruturação detalhada do plano de contexto e escopo, alinhando a visão geral, problemas, público-alvo e os objetivos da Academia Base Forte Leste. |
| **Mapeamento das 10 Páginas** | Organizou e revisou as 10 páginas reais do menu do site (`index.html`, `sobre.html`, `modalidades.html`, `professor.html`, `blog.html`, `aula-experimental.html`, `acoes-sociais.html`, `turmas-horarios.html`, `contato.html`, `orcamento_hospedagem.html`). |
| **Requisitos Técnicos** | Detalhou os requisitos funcionais, não funcionais e os critérios de sucesso exigidos na rubrica da disciplina (HTML5 semântico, W3C, CSS responsivo, JavaScript com `localStorage` e formulários validados). |
| **Documentação e Padrões** | Revisou o tom dos textos institucionais para garantir uma linguagem madura, técnica e adequada à apresentação acadêmica perante a banca. |

### Como as respostas da IA foram usadas
- A estrutura base e os dados reais da academia foram definidos pela equipe; a IA atuou refinando o texto técnico, corrigindo inconsistências de páginas e estruturando o formato em Markdown.
- Os blocos de texto gerados foram criticamente analisados, corrigidos (como a adequação das páginas reais do menu) e validados pela equipe antes de serem integrados ao GitHub.
- Os dados institucionais, nomes da equipe e a identidade do projeto foram preservados exatamente conforme a solicitação dos alunos.

### Responsabilidade
A IA foi utilizada como uma ferramenta de mentoria e apoio técnico. A equipe é integralmente responsável pelo conteúdo final entregue, compreende a arquitetura do site desenvolvido e tem total domínio para explicar cada decisão técnica durante a arguição da banca.

---

