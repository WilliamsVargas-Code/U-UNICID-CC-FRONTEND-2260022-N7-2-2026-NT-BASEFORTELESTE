Link do BaseForteLeste na hospedagem:

# U-UNICID-CC-FRONTEND-2260022-N7-2-2026-NT-BASEFORTELESTE
Projeto Front-End Unicid 2-BaseForteLeste

# Plano de contexto e escopo — BaseForteLeste

## 1. Nome do projeto:   Projeto Horizonte Leste

## Metadados

| Nome completo do aluno | RGM | Usuário do GitHub |
| :-- | :-- | :-- |
| Nickolas Henrique Bezerra | 47685778 | Nickolashbezerra |
| Pedro Henrique Ruola Coiado | 47589124 | PedroCoiado |
| Raphaela Gonçalves Neves | 47656166 | RaphaelaSeven |
| Williams Vargas Neves Paoli dos Santos | 47336820 | WilliansVargas-Code |


## 2. Visão Geral

O site da academia **Base Forte Leste** surge de uma necessidade real identificada no levantamento de requisitos: reunir em um único ambiente digital todas as informações que hoje estão espalhadas.

O site será desenvolvido exclusivamente com **HTML5, CSS3 e JavaScript**, sem uso de servidor ou banco de dados, e contará com as seguintes seções:

- **Sobre Nós**
- **História**
- **Modalidades:** Muay Thai, Kickboxing, Boxe, Jiu-Jitsu e No-Gi
- **Turmas e Horários**
- **Blog de Notícias**
- **Ações Sociais:** divulgação das aulas gratuitas aos sábados voltadas ao público juvenil
- **Formulário de Interesse:** pedido de aula experimental ou inscrição na aula gratuita de sábado, enviado ao WhatsApp da academia

O projeto se apoia em três pilares:

### 2.1 Impacto Social

O site amplia o alcance das aulas gratuitas de sábado, voltadas a jovens de **[Confirmar: idade mínima]** a 17 anos. Jovens da região e seus responsáveis poderão conhecer o projeto, consultar os horários **[Confirmar: horário das aulas]** e demonstrar interesse em participar pelo formulário, sem precisar ir até a academia. Assim, o esporte chega como ferramenta de disciplina, saúde e convivência para mais pessoas da comunidade.

Como o público das aulas gratuitas é menor de idade, o formulário solicitará o nome e o telefone do responsável, além de uma autorização marcada por ele, respeitando o cuidado com dados de crianças e adolescentes previsto na LGPD (Lei Geral de Proteção de Dados).

### 2.2 Sustentabilidade

- Substitui panfletos, cartazes e formulários impressos por um site público e um formulário digital, reduzindo o consumo de papel e de materiais gráficos.
- O site será construído de forma leve, com imagens otimizadas e código enxuto, para carregar rápido, gastar menos dados móveis e consumir menos energia.
- Por não utilizar servidor nem banco de dados, o site exige menos recursos para funcionar.

### 2.3 Acessibilidade

O site será pensado para que qualquer pessoa consiga utilizá-lo, incluindo pessoas com deficiência visual, baixa visão ou que navegam apenas pelo teclado. Para isso, serão aplicadas as seguintes práticas:

- Botões para aumentar e diminuir o tamanho da fonte
- Botão de modo alto contraste
- Texto alternativo (`alt`) em todas as imagens
- Boa diferença de cor (contraste) entre texto e fundo
- Estrutura HTML semântica (`<header>`, `<nav>`, `<main>`, `<footer>`) e títulos na ordem correta
- Formulário com campos identificados por `<label>`, permitindo o uso com leitores de tela
- Layout responsivo, funcionando bem no celular

## 3. Problemas que o Site Irá Resolver

Durante o levantamento de requisitos com a academia **Base Forte Leste**, foram identificados problemas na forma como a academia se comunica com alunos, interessados e comunidade. O site foi pensado para resolver cada um deles.

### 3.1 Informações espalhadas e difíceis de encontrar

**Situação atual:** atualmente, a academia utiliza apenas o WhatsApp e o Instagram para divulgação. Nesses canais, as informações sobre modalidades, turmas, horários e história ficam espalhadas entre mensagens e publicações, e as mais antigas se perdem no feed. Quem tem interesse precisa ir até a academia ou perguntar por mensagem.

**Como o site resolve:** centraliza todas as informações em um só ambiente digital, organizado e disponível 24 horas, com seções de Sobre Nós, História, Modalidades, Turmas e Horários e Blog de Notícias. O site complementa as redes sociais, que podem direcionar os visitantes para ele.

**Pilar relacionado:** Impacto Social e Acessibilidade.

### 3.2 Uso de materiais impressos

**Situação atual:** a divulgação depende de panfletos, cartazes e formulários impressos, que geram consumo de papel e de materiais gráficos e precisam ser refeitos a cada mudança de horário ou evento.

**Como o site resolve:** substitui o material impresso por páginas digitais e um formulário online, que podem ser atualizados sem custo de impressão.

**Pilar relacionado:** Sustentabilidade.

### 3.3 Pouca divulgação das ações sociais

**Situação atual:** as aulas gratuitas aos sábados voltadas ao público juvenil alcançam principalmente quem já conhece a academia ou passa por ela.

**Como o site resolve:** cria uma seção dedicada às ações sociais, explicando o projeto, quem pode participar e como se inscrever, ampliando o alcance para jovens e famílias da região.

**Pilar relacionado:** Impacto Social.

### 3.4 Pedidos de aula sem padrão

**Situação atual:** a aula experimental é agendada pelo WhatsApp ou presencialmente, sem um padrão de informações. Cada interessado envia dados diferentes, e a academia precisa fazer várias perguntas antes de confirmar a aula.

**Como o site resolve:** oferece um formulário padronizado para pedido de aula experimental e inscrição na aula gratuita de sábado. Ao enviar, o JavaScript valida os campos obrigatórios, monta uma mensagem organizada com os dados preenchidos e abre o WhatsApp da academia com o texto pronto. Assim, todos os pedidos chegam no mesmo formato, e a conversa fica registrada no WhatsApp da academia.

**Pilar relacionado:** Impacto Social e Sustentabilidade.

### 3.5 Comunicação pouco acessível

**Situação atual:** materiais impressos não podem ser lidos por leitores de tela e nem ampliados por pessoas com baixa visão, excluindo parte do público.

**Como o site resolve:** oferece botões para aumentar e diminuir a fonte, modo de alto contraste, textos alternativos nas imagens, estrutura HTML semântica e layout responsivo para celular.

**Pilar relacionado:** Acessibilidade.

## 4. Público-Alvo

O site da academia **Base Forte Leste** foi pensado para atender públicos diferentes, cada um com necessidades próprias. Além de informar, o site também funciona como uma **ferramenta de marketing digital**, ajudando a academia a atrair novos alunos, fortalecer sua imagem na comunidade e manter os alunos atuais engajados.

### 4.1 Novos interessados em artes marciais

**Quem são:** pessoas que ainda não treinam na academia e querem começar uma arte marcial, seja por saúde, condicionamento físico, defesa pessoal ou hobby. Muitos são iniciantes e não sabem qual modalidade escolher.

**O que procuram:** quais modalidades existem, horários das turmas, como funciona a primeira aula e se precisam de experiência ou equipamento.

**Como o site atende:**
- Apresenta cada modalidade de forma simples, ajudando o iniciante a escolher
- Mostra os horários das turmas de forma organizada
- Divulga a **aula experimental** como porta de entrada, com pedido feito pelo botão do WhatsApp
- Informa que **não é necessário ter experiência** para começar, pois as turmas recebem iniciantes
- Informa que **alunos novos não precisam ter equipamentos** para participar das aulas

**Objetivo de marketing:** transformar visitantes do site em alunos matriculados, removendo barreiras comuns para quem quer começar, como a falta de experiência ou de equipamento.

### 4.2 Jovens e seus responsáveis

**Quem são:** jovens menores de 18 anos da região e seus pais ou responsáveis, interessados nas aulas gratuitas aos sábados.

**O que procuram:** como funciona o projeto social, quem pode participar, dias e horários, e como fazer a inscrição.

**Como o site atende:**
- Seção de **Ações Sociais** explicando o projeto de forma clara
- Botão de acesso ao WhatsApp da academia, onde o responsável faz a inscrição do jovem
- Linguagem simples, acessível tanto para o jovem quanto para a família

**Objetivo de marketing:** ampliar o alcance do projeto social e aproximar a academia das famílias da comunidade.

### 4.3 Famílias

**Quem são:** grupos familiares que buscam uma atividade física para treinar juntos.

**O que procuram:** opções de plano para mais de uma pessoa e modalidades que atendam diferentes idades.

**Como o site atende:** divulga a existência do **plano Família**, válido a partir de duas pessoas, e apresenta as modalidades e turmas disponíveis. Os valores dos planos não serão exibidos no site; o interessado poderá consultá-los diretamente com a academia pelo WhatsApp.

**Objetivo de marketing:** aumentar o número de matrículas por meio de planos em grupo.

### 4.4 Alunos atuais

**Quem são:** pessoas que já treinam na academia.

**O que procuram:** horários atualizados, novidades, eventos e notícias da academia.

**Como o site atende:**
- Seção de **Turmas e Horários** sempre disponível
- **Blog de Notícias** com eventos, graduações e novidades

**Objetivo de marketing:** manter os alunos engajados, reforçar o sentimento de pertencimento e incentivar que indiquem a academia para outras pessoas.

### 4.5 Pessoas com deficiência

**Quem são:** pessoas com deficiência visual, baixa visão ou que navegam apenas pelo teclado, que muitas vezes encontram barreiras em sites comuns.

**O que procuram:** conseguir acessar as mesmas informações que qualquer outro visitante, sem depender de ajuda.

**Como o site atende:** botões de tamanho da fonte, modo alto contraste, textos alternativos nas imagens, estrutura HTML semântica e botão do WhatsApp com descrição para leitores de tela.

**Objetivo de marketing:** mostrar que a academia é um espaço inclusivo, alcançando um público que muitas vezes é ignorado.

### 4.6 Comunidade da região

**Quem são:** moradores da zona Leste, região onde a academia está localizada, que ainda não conhecem a Base Forte Leste.

**O que procuram:** conhecer a academia, sua história e o que ela oferece para a comunidade.

**Como o site atende:** seções de **Sobre Nós**, **História** e **Ações Sociais**, mostrando a trajetória da academia e seu compromisso com a região.

**Objetivo de marketing:** fortalecer a reputação da academia como referência local em artes marciais e projeto social.

### 4.7 O Site como Ferramenta de Marketing

Além de informar, o site contribui diretamente para a divulgação da academia:

- **Credibilidade:** um site próprio transmite mais profissionalismo do que apenas perfis em redes sociais
- **Integração com as redes:** o Instagram e o WhatsApp, já usados pela academia, passam a direcionar os visitantes para o site, onde as informações ficam completas e organizadas
- **Disponibilidade:** o site funciona 24 horas, permitindo que um interessado conheça a academia a qualquer momento
- **Captação de alunos:** o botão do WhatsApp leva o visitante direto ao contato com a academia, transformando o interesse em conversa real
- **Menos barreiras de entrada:** informar que não é preciso ter equipamento nem experiência incentiva iniciantes a darem o primeiro passo
- **Imagem positiva:** a divulgação das ações sociais e o cuidado com acessibilidade e sustentabilidade reforçam uma imagem de academia comprometida com a comunidade
- **Economia:** reduz gastos com materiais impressos de divulgação
## 5. Objetivos

## 6. Funcionalidades principais

## 7. Requisitos técnicos

## 8. Requisitos não funcionais

## 9. Estrutura de pastas
```markdown
BaseForteLeste/
├── index.html              # páginas HTML na raiz
├── sobre.html
├── historia.html
├── modalidades.html
├── turmasehorarios.html
├── blognews.html
├── acoes.html
├── formulario.html
├── css/style.css
├── js/script.js
├── img/                    # imagens do site
└── docs/readme.md          # este plano de contexto
```

Responsabilidades:<br>
• **Interface**: HTML semântico e css em `style.css`. Sem estilo inline.<br>
• **Comportamento**: JavaScript em arquivo próprio, progressivo (a página funciona sem ele, exceto o envio de informações do formulário que depende de sua validação).
## 10. Pendências

## 11. Critérios de sucesso
