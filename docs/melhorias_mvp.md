# Evolução do Projeto: Do MVP (1ª Entrega) à Versão Final (2ª Entrega)

## Contextualização e Justificativa
Na 1ª entrega (MVP), o escopo inicial do projeto focou em estruturar apenas a interface básica estática e protótipos visuais iniciais com uso de textos temporários (*Lorem Ipsum*). Embora tenha obtido avaliação máxima (5/5) pelo professor, o grupo identificou que o documento inicial era genérico e carecia de métricas claras e aprofundamento técnico.

Para a entrega final, a equipe realizou uma reformulação profunda, evoluindo de uma interface puramente estática para um ecossistema web funcional, interativo, com 10 páginas interligadas e aderente às diretrizes de acessibilidade WCAG e aos critérios da disciplina.

---

## Quadro Comparativo: Antes (MVP) x Depois (Versão Final)

| Aspecto do Projeto | 1ª Entrega (MVP) | 2ª Entrega (Versão Final) |
| :--- | :--- | :--- |
| **Escopo e Planejamento** | Superficial, genérico e com dados provisórios (*Lorem Ipsum*). | Detalhado, alinhado ao impacto social e à sustentabilidade (substituição de panfletos impressos por digital). |
| **Tecnologias** | Apenas HTML5 e CSS3 estático básico. | HTML5 semântico, CSS3 responsivo e JavaScript avançado. |
| **Páginas do Site** | Menu reduzido e focado apenas na página inicial. | 10 páginas interligadas e padronizadas. |
| **Interatividade** | Ausente (sem comportamento dinâmico). | Validação de formulários com `preventDefault`, feedback visual em bordas, persistência com `localStorage` e leitura em voz. |
| **Acessibilidade** | Estrutura visual básica sem ferramentas de suporte ativas. | Barra de acessibilidade interativa (`A-`, `A`, `A+`, Alto contraste e Leitura em voz). |
| **Versionamento e Deploy** | Arquivos locais compactados em formato `.zip`. | Repositório estruturado no GitHub com histórico de commits da equipe, Pull Requests e deploy online via HTTPS. |

---

##  Análise Visual Detalhada: A Evolução da Interface em 4 Estágios

### 1. 1º Estágio: O Protótipo Inicial (MVP - Fundo Preto com *Lorem Ipsum*)
* **Visual:** Interface baseada em um layout escuro genérico, utilizando textos temporários de preenchimento (`Lorem Ipsum`), menu simplificado e sem recursos de acessibilidade ativa.
* **Justificativa e Melhorias:** Esta primeira versão serviu como um esqueleto estrutural (*wireframe* funcional) para validar a disposição inicial dos elementos na tela. Carecia de identidade humanizada e profundidade no escopo institucional.
<img src="/docs/Print 01.jpeg" alt="Interface da primeira entrega">

### 2. 2º Estágio: Refinamento de Identidade e Textos Reais (Fundo Preto com Destaques em Laranja/Amarelo)
* **Visual:** Transição onde o fundo escuro foi mantido, mas a tipografia e os textos ganharam vida real, destacando os diferenciais da academia (*"Treine forte. Comece do zero."*), inclusão de blocos informativos com métricas e o primeiro esboço da barra de acessibilidade no topo.
* **Justificativa e Melhorias:** Substituição completa do *Lorem Ipsum* por conteúdos reais voltados ao público-alvo da Zona Leste, especificando as modalidades, eliminando barreiras de entrada e introduzindo os primeiros recursos de ajuste visual.
<img src="/docs/Print 02.png" alt="Interface da primeira entrega">

### 3. 3º Estágio: O Portal Completo (Versão Visual com Fundo Azul e Bloco de Ações Sociais)
* **Visual:** Salto estético e estrutural marcante com fundo azul texturizado, bloco de destaque em amarelo simulando aviso institucional (*"Treino gratuito para jovens"*) e menu expandido para 10 páginas.
* **Justificativa e Melhorias:** Foco explícito no impacto social (divulgação das aulas gratuitas de sábado), consolidação da identidade visual própria da academia e padronização completa do sistema multi-páginas.
<img src="/docs/Print 03.png" alt="Interface da primeira entrega">

### 4. 4º Estágio: A Versão Definitiva Otimizada (Com Leitura em Voz)
* **Visual:** Manutenção do layout azul de alto impacto visual com a adição oficial do botão **"Ouvir página"** na barra superior de acessibilidade, ao lado das opções de redimensionamento e alto contraste.
* **Justificativa e Melhorias:** Implementação da *Web Speech API* via JavaScript para conversão de texto em voz, elevando o site a um padrão avançado de inclusão digital e conformidade com as diretrizes WCAG para o público PCD.
<img src="/docs/Print 04.png" alt="Interface da primeira entrega">

---

##  Conclusão e Aprendizados da Equipe

A transição da 1ª para a 2ª entrega representou um salto qualitativo e de maturidade técnica para a equipe de desenvolvimento. O esforço em refinar o escopo inicial permitiu transformar um simples protótipo estático em um produto web completo, sustentável e acessível.

Mais do que atender rigorosamente aos requisitos obrigatórios da rubrica da UNICID (como validação W3C, deploy em HTTPS, commits colaborativos e documentação na pasta `/docs`), o projeto cumpriu o seu papel social ao digitalizar a comunicação da academia de artes marciais, reduzindo o desperdício de papel e ampliando o acesso de jovens da Zona Leste às práticas esportivas e de inclusão.

**Principais Aprendizados Técnicos do Grupo:**
* **HTML Semântico:** Domínio na estruturação limpa de páginas web utilizando tags adequadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), garantindo hierarquia correta de conteúdo e zero erros de validação no W3C Validator em todas as 10 páginas do site.
* **CSS Responsivo:** Evolução na criação de layouts adaptáveis para diferentes tamanhos de tela (computadores e celulares) utilizando Flexbox e Grid, além da padronização de uma identidade visual única e foco visível customizado para navegação.
* **JavaScript Interativo:** Desenvolvimento e aplicação prática de scripts para manipulação do DOM por eventos, validação robusta de formulários com `preventDefault()`, feedback visual com bordas destacadas e persistência de dados em rascunhos utilizando o `localStorage`.
* **Acessibilidade (WCAG):** Implementação profunda de diretrizes inclusivas, englobando atributos `alt` em imagens, contraste de cores adequado (padrão AA), navegação completa por teclado (`Tab`), além da criação da barra de redimensionamento de fonte (`A-`, `A`, `A+`), alto contraste e o recurso de leitura em voz (*Web Speech API*).
* **Sustentabilidade Digital:** Compreensão teórica e prática de como o desenvolvimento web front-end pode gerar impacto ambiental positivo através da digitalização de processos (substituição de panfletos, cartazes e fichas físicas de papel por plataformas online otimizadas), alinhando tecnologia e conservação de recursos naturais.

Com essa jornada, a equipe consolidou competências fundamentais na engenharia front-end, unindo teoria acadêmica, resolução de problemas reais da comunidade e entrega de software com qualidade profissional.
