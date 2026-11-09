## Link do BaseForteLeste na hospedagem: https://u-unicid-cc-frontend-2260022-n7-2-2.vercel.app

# U-UNICID-CC-FRONTEND-2260022-N7-2-2026-NT-BASEFORTELESTE
Projeto Front-End Unicid 2-BaseForteLeste

# Plano de Contexto e Escopo — Base Forte Leste
Briefing permanente do projeto para a equipe e para a IA. Disciplina Desenvolvimento Front-End para Web · UNICID · 2026.2 · Prof. Paulo Sérgio Fratta. Organização e dados são fictícios, criados para fins acadêmicos.

### Equipe de Desenvolvimento

| Nome completo do aluno | RGM | Usuário do GitHub |
| :-- | :-- | :-- |
| Nickolas Henrique Bezerra | 47685778 | Nickolashbezerra |
| Pedro Henrique Ruola Coiado | 47589124 | PedroCoiado |
| Raphaela Gonçalves Neves | 47656166 | RaphaelaSeven |
| Williams Vargas Neves Paoli dos Santos | 47336820 | WilliansVargas-Code |

## 1. Nome do projeto

Academia de Artes Marciais (Base Forte Leste)

## 2. Visão Geral

Desenvolvimento do portal web oficial da Academia Base Forte Leste, localizada em Itaquera (Zona Leste de São Paulo). O ecossistema digital centraliza informações institucionais sobre modalidades (Muay Thai, Kickboxing, Boxe, Jiu-Jitsu, Capoeira e No-Gi), divulgação de aulas gratuitas aos sábados voltadas ao público juvenil e atendimento a turmas inclusivas para pessoas com deficiência. O projeto alinha-se diretamente aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU: ODS 3 (Saúde e Bem-Estar), ODS 4 (Educação de Qualidade), ODS 10 (Redução das Desigualdades) e ODS 12 (Consumo e Produção Responsáveis).

A arquitetura é composta por 10 páginas interligadas estruturadas com HTML5 semântico, estilização responsiva em CSS3 e recursos avançados de interatividade via JavaScript — incluindo barra de acessibilidade com ajuste dinâmico de fontes, modo de alto contraste e persistência de preferências de usuário via localStorage.

Nota acadêmica: Todos os indicadores operacionais (métricas de alunos atendidos, volume de recicláveis arrecadados, resultados em eventos), bem como depoimentos e dados cadastrais, são estritamente fictícios e concebidos exclusivamente para fins acadêmicos.

## 3. Problema que o produto resolve

Atualmente, a gestão e a divulgação das informações da academia (horários, grade de modalidades, políticas de preços e projetos sociais) encontram-se descentralizadas e fragmentadas entre aplicativos de mensagens (WhatsApp) e panfletos impressos. Essa dispersão gera lacunas informacionais importantes: o público externo que não transita pelo entorno da academia desconhece as iniciativas de inclusão e as aulas gratuitas de sábado.

Além disso, os pedidos de aulas experimentais chegam de forma despadronizada, enquanto o uso recorrente de material gráfico impresso acarreta custos operacionais desnecessários, impacto ambiental negativo e barreiras intransponíveis de acessibilidade para pessoas com deficiência visual (cegas ou com baixa visão).

## 4. Público-alvo

- **Comunidade Local (Zona Leste)**: Moradores da região em busca de capacitação física e prática de artes marciais, independentemente de nível de experiência prévia ou disponibilidade de recursos para equipamentos.
- **Público Infantojuvenil e Responsáveis**: Jovens na faixa etária de 10 a 17 anos e suas famílias, foco principal das ações sociais e das aulas gratuitas de sábado.
- **Alunos Regulares**: Praticantes ativos que utilizam o canal digital como ferramenta rápida de consulta a horários, avisos e novidades institucionais.
- **Público com Deficiência (PCDs)**: Usuários que necessitam de navegação assistida por teclado, compatibilidade com leitores de tela e suporte a modos de alto contraste em conformidade com as diretrizes WCAG.

## 5. Objetivos

- Centralizar em um único ambiente digital as modalidades, a grade horária, o corpo docente e o calendário de ações sociais da instituição.
- Otimizar o fluxo de captação de leads por meio de formulários padronizados para agendamento de aulas experimentais e inscrições nas oficinas de sábado.
- Expandir o alcance comunitário do projeto esportivo e de inclusão social voltado a jovens e famílias da região de Itaquera.
- Substituir o modelo tradicional de divulgação impressa por canais digitais sustentáveis, projetando uma redução de custos (estimada de R$ 1.463,72 por ano - cálculo baseado em preços reais de impressão) e mitigação do desperdício de papel.
- Consolidar a transparência institucional por meio de um layout acessível, responsivo e em conformidade estrita com os padrões web exigidos pela disciplina.

## 6. Funcionalidades principais

O site é composto por 10 páginas interligadas, compartilhando uma identidade visual unificada, com cabeçalho, barra de acessibilidade, menu de navegação e rodapé padronizados em todo o site:

| Página | Arquivo | Função principal |
| :--- | :--- | :--- |
| **Início** | `index.html` | Apresentação da causa, métricas de impacto, projetos e visão geral da academia |
| **Quem somos** | `sobre.html` | Histórico institucional, missão, visão e valores voltados à inclusão, esporte e educação |
| **Modalidades** | `modalidades.html` | Informações detalhadas sobre Muay Thai, Kickboxing, Boxe, Jiu-Jitsu, Capoeira e No-Gi |
| **Professores** | `professor.html` | Apresentação do corpo docente, qualificações e especialidades dos mestres |
| **Blog** | `blog.html` | Publicações informativas, avisos e novidades recentes da academia |
| **Aula experimental** | `aula-experimental.html` | Página e formulário dedicado para agendamento de aulas práticas experimentais |
| **Ações sociais** | `acoes-sociais.html` | Divulgação de projetos comunitários, aulas gratuitas de sábado e turmas inclusivas |
| **Turmas e horários** | `turmas-horarios.html` | Grade horária das turmas, controle de capacidade operacional e gestão de vagas |
| **Contato** | `contato.html` | Canal de atendimento equipado com formulário interativo validado e dados de localização |
| **Orçamento** | `orcamento_hospedagem.html` | Demonstração e justificativa técnica/financeira da infraestrutura de deploy e hospedagem web |

**Projetos e Iniciativas Divulgadas:**
* **Aulas Gratuitas de Sábado:** Foco no atendimento ao público juvenil da comunidade, promovendo inclusão social, disciplina e desenvolvimento pessoal por meio das artes marciais.
* **Turma Inclusiva:** Oficinas adaptadas para garantir a prática esportiva segura e integrada de pessoas com deficiência.

**Indicadores de Impacto Institucional (Métricas Fictícias):**
* 150 jovens atendidos mensalmente nas iniciativas comunitárias.
* 6 modalidades de luta ativas na grade horária.
* Limite operacional de 30 vagas por turma para assegurar excelência pedagógica e segurança.
* 100% de digitalização da comunicação institucional, eliminando a dependência de impressos gráficos.
  
## 7. Requisitos técnicos

* **HTML5 Semântico:** Utilização rigorosa de tags estruturais e descritivas, com atributo global `lang="pt-BR"` e validação estrita em conformidade com o W3C Validator (zero erros).
* **CSS3 Responsivo:** Layout adaptativo construído com abordagens modernas (Flexbox e Grid Layout), garantindo consistência visual em múltiplos dispositivos, foco visível customizado e transições fluidas.
* **JavaScript Interativo:** Implementação de lógica de controle comportamental contendo validação robusta de formulários com interceptação de submissão (`preventDefault`), feedback textual de erros, destaque visual em bordas, persistência de dados e preferências via `localStorage`, além de eventos dinâmicos de DOM aplicados a menus de navegação mobile e filtros.
* **Versionamento e Controle de Código:** Repositório centralizado no GitHub estruturado com histórico de commits colaborativos da equipe, mensagens descritivas e adoção de fluxo de ramificações (*branches*) com revisão por *Pull Request*.
* **Deploy e Infraestrutura:** Aplicação publicada em ambiente de produção acessível via URL pública com protocolo de segurança HTTPS ativo.

## 8. Requisitos não funcionais

* **Acessibilidade Digital (WCAG):** Conformidade estrita com os critérios de acessibilidade de nível AA, assegurando contraste cromático adequado, hierarquia semântica de cabeçalhos e suporte completo à navegação sequencial por teclado.
* **Desempenho e Otimização:** Tempo de carregamento otimizado dos ativos estáticos (imagens, folhas de estilo e scripts) para garantir fluidez tanto em computadores quanto em dispositivos móveis.
* **Manutenibilidade:** Código-fonte limpo, modularizado e devidamente documentado, facilitando futuras manutenções corretivas ou evolutivas por novos desenvolvedores.

## 9. Estrutura de pastas

Organização padrão contendo os arquivos HTML na raiz, pastas dedicadas para `/css`, `/js`, `/img`, `/docs` (documentação completa) e diretórios de multimídia.

```markdown
public/
├── index.html                 # página inicial que o usuário acessará quando clicar no link
├── contato.html               # usado para contatar a academia por whatsapp, email ou telefone
├── orcamento_hospedagem.html  # orçamento para hospedar o site em provedores de hospedagem diferentes, incluindo um comparativo verde
├── sobre.html                 # página que explicará brevemente sobre a academia e seus objetivos de projeto social
├── professor.html             # página de apresentação do corpo docente e suas qualificações
├── modalidades.html           # página que listará as modalidades oferecidas pela academia
├── turmas-horarios.html       # página que lista as diversas turmas em seus dias específicos e horários das aulas
├── blog.html                  # página que irá mostrar notícias recentes em relação à academia
├── acoes-sociais.html         # página sobre ações sociais que vai divulgar as aulas gratuitas e turmas inclusivas
├── aula-experimental.html     # página de formulário onde o usuário preencherá dados para agendar uma aula
├── css/style.css              # css estilizado para dar vida ao site
├── js/script.js               # javascript para funções que o html e o css em si não conseguem atender
├── img/                       # imagens do site, todas em svg
├── assets/
│   ├── audio/                 # arquivos de áudio, como trilhas para aulas ou descrições para acessibilidade
│   └── video/                 # vídeos institucionais, ações do projeto social e demonstrações de exercícios
└── docs/                      # toda a documentação do projeto
```

Responsabilidades:<br>
• **Interface**: HTML semântico e css em `style.css`. Sem estilo inline.<br>
• **Comportamento**: JavaScript em arquivo próprio, progressivo (a página funciona sem ele, exceto o envio de informações do formulário que depende de sua validação).

## 10. Pendências

* Dados oficiais da academia Base Forte Leste e URLs das fontes institucionais.
* Histórico oficial do projeto de ações sociais e destino das doações das aulas de sábado.
* Notícias reais sobre as modalidades, com data e fonte.
* Vídeos e áudios oficiais de treinamento (os atuais são demonstrativos).
* Canais oficiais de contato e redes sociais da academia.
* Link definitivo do site publicado em produção.

## 11. Critérios de sucesso

* As 10 páginas interligadas, com o mesmo cabeçalho, menu e rodapé.
* Zero erros no validador de HTML do W3C.
* Formulários com validação nativa (`required`, `email`, `tel` etc.) e erro mostrado junto ao campo.
* Vídeo, áudio e iframe funcionando corretamente.
* Atributos `alt`, contraste adequado e `lang="pt-BR"` em todas as páginas.
* Pasta `/docs` com README, Diário de Bordo, Orçamento de Hospedagem e Evidências de Teste.

## 12. Uso de Inteligência Artificial

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
