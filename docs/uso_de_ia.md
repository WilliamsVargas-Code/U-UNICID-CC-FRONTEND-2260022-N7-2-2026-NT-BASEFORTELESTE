## Uso de Inteligência Artificial no Projeto 

## 1° Caso do uso de IA

### Ferramenta utilizada
- **Claude** (Anthropic), usado em 07/11/2026 como assistente de desenvolvimento Front-End.

### Para que a IA foi usada
| Etapa | O que a IA fez |
| :-- | :-- |
| Estrutura do site | Gerou a primeira versão das 10 páginas HTML5 na estrutura de pastas definida pela equipe, com comentários explicativos (`<!-- -->`) |
| Estilização | Gerou o `css/style.css` (CSS3 puro, sem frameworks), organizado em seções comentadas, com layout responsivo (mobile first) |
| JavaScript | Gerou o `js/script.js`, opcional, usado só na barra de acessibilidade (tamanho da fonte e alto contraste) |
| Imagens e mídias | Criou as ilustrações em SVG (logo, ícones, professores e galeria), o vídeo demonstrativo de Muay Thai com legendas (`.vtt`) e o áudio de berimbau. Todo esse material é demonstrativo |
| Pesquisa | Pesquisou os preços de hospedagem (GitHub Pages, Netlify e GreenGeeks), de domínio (Registro.br e Hostinger) e de impressão de panfletos, usados na página `orcamento_hospedagem.html`, com as fontes citadas na própria página |
| Testes | Fez verificações automáticas de links, `label for`/`id`, textos alternativos e contraste de cores (nível AA da WCAG), além de testar a validação dos formulários no navegador |
| Documentação | Escreveu o `docs/guia-de-apresentacao.md`, que liga cada requisito ao trecho de código e traz um roteiro de testes |

### Como as respostas da IA foram usadas
- Os requisitos, o tema, a estrutura de pastas e as regras de negócio vieram da equipe: do enunciado da disciplina e do levantamento de requisitos feito com a academia.
- O código gerado foi revisado e testado pela equipe no VS Code (Live Server) antes da entrega.
- Partes do conteúdo gerado pela IA são **ilustrativas** e foram marcadas no código para conferência: endereço e telefones, professores (exceto o professor Adalberto), premiações, depoimentos, linha do tempo e números da tabela de impacto.
- Os preços pesquisados valem para a data da consulta (novembro de 2026) e podem mudar.

### O que a equipe fez
<!-- Completem com o que cada integrante realmente fez -->
- [Ex.: revisão do conteúdo e correção dos dados reais da academia — Nome]
- [Ex.: testes no navegador e no celular — Nome]
- [Ex.: publicação no GitHub Pages — Nome]

### Responsabilidade
A IA foi usada como ferramenta de apoio. A equipe é responsável pelo conteúdo final, entende o código entregue e consegue explicar cada parte dele na apresentação.

## 2° Caso do uso de IA


### Ferramenta utilizada
* **Gemini (Google)**, usado em novembro de 2026 como mentor técnico especialista em Front-End, acessibilidade e documentação.

### Para que a IA foi usada

| Etapa | O que a IA fez |
| :--- | :--- |
| **Planejamento e Escopo** | Auxiliou na estruturação detalhada do plano de contexto e escopo, alinhando a visão geral, problemas, público-alvo e os objetivos da Academia Base Forte Leste. |
| **Mapeamento das 10 Páginas** | Organizou e revisou as 10 páginas reais do menu do site (`index.html`, `sobre.html`, `modalidades.html`, `professor.html`, `blog.html`, `aula-experimental.html`, `acoes-sociais.html`, `turmas-horarios.html`, `contato.html`, `orcamento_hospedagem.html`). |
| **Requisitos Técnicos** | Detalhou os requisitos funcionais, não funcionais e os critérios de sucesso exigidos na rubrica da disciplina (HTML5 semântico, W3C, CSS responsivo, JavaScript com `localStorage` e formulários validados). |
| **Documentação e Padrões** | Revisou o tom dos textos institucionais para garantir uma linguagem madura, técnica e adequada à apresentação acadêmica perante a banca. |

### Como as respostas da IA foram usadas
* A estrutura base e os dados reais da academia foram definidos pela equipe; a IA atuou refinando o texto técnico, corrigindo inconsistências de páginas e estruturando o formato em Markdown.
* Os blocos de texto gerados foram criticamente analisados, corrigidos (como a adequação das páginas reais do menu) e validados pela equipe antes de serem integrados ao GitHub.
* Os dados institucionais, nomes da equipe e a identidade do projeto foram preservados exatamente conforme a solicitação dos alunos.

### Responsabilidade
A IA foi utilizada como uma ferramenta de mentoria e apoio técnico. A equipe é integralmente responsável pelo conteúdo final entregue, compreende a arquitetura do site desenvolvido e tem total domínio para explicar cada decisão técnica durante a arguição da banca.
