# Orçamento e Hospedagem - Base Forte Leste

Este documento detalha a infraestrutura web escolhida para o portal da academia Base Forte Leste, incluindo os comparativos de mercado, custos de domínio e o impacto ambiental da infraestrutura selecionada.

---

## 1. Local de Publicação

O site foi publicado utilizando a plataforma Vercel, que é otimizada para o ecossistema de Front-End. O processo de publicação (deploy) é realizado de forma contínua a partir do repositório no GitHub.


---

## 2. Comparativo de Hospedagem

Antes da definição da infraestrutura, foram analisadas três das principais plataformas de mercado para a hospedagem de site estático (HTML5, CSS3 e JavaScript).

| Critério | Vercel (Plano Hobby) | Render (Workspace Hobby) | Railway |
| :--- | :--- | :--- | :--- |
| **Custo Inicial** | Gratuito (sem prazo de validade) | Gratuito para sites estáticos | Período de teste de 30 dias ($5); após, $1/mês de crédito |
| **Tráfego Incluído** | 100 GB por mês | 5 GB por mês | Descontado dos créditos de uso |
| **Arquitetura** | Sites estáticos e Front-End | Sites estáticos e aplicações completas | Aplicações com servidor e banco de dados |
| **Pontos de Atenção** | Plano gratuito restrito a uso não comercial. | Franquia de tráfego reduzida recentemente para 5 GB. | Ausência de plano gratuito permanente para manutenção contínua do site. |

---

## 3. Comparativo de Domínio

Para assegurar uma identidade institucional e profissional à academia, foram avaliados diferentes fornecedores para o registro de domínio.

| Provedor | Preço Inicial (1º Ano) | Renovação | Vantagens | Desvantagens |
| :--- | :--- | :--- | :--- | :--- |
| **Registro.br** | R$ 40,00 | R$ 40,00 / ano | Órgão oficial no Brasil; preço fixo e transparente. | Restrito a domínios com extensão `.br`. |
| **HostGator** | R$ 26,90 (promocional) | R$ 89,90 / ano | Desconto promocional no primeiro ano. | Custo elevado no período de renovação. |
| **GoDaddy** | R$ 24,99 (promocional) | R$ 99,99 / ano | Interface acessível e serviços agregados. | Incidência de taxas adicionais e renovação onerosa. |

---

## 4. Justificativa da Escolha: Vercel

A partir do cruzamento de dados técnicos e financeiros, a Vercel foi selecionada como a solução definitiva para a hospedagem, integrada ao Registro.br para a gestão do domínio oficial.

* **Custo-benefício:** O plano Hobby disponibiliza 100 GB de tráfego mensal, o qual atende com margem o volume esperado para o escopo regional de uma academia local.
* **Desempenho (Edge Network):** A distribuição global de conteúdo assegura tempos de carregamento reduzidos.
* **Integração:** Conexão nativa e automatizada com o versionamento no GitHub.

### Resumo do Orçamento Inicial
* **Hospedagem (Vercel Hobby):** R$ 0,00 / mês
* **Registro de Domínio (Opcional):** R$ 40,00 / ano
* **Custo Operacional Total Estimado:** **R$ 0,00** (sem considerar o domínio próprio)

---

## 5. Sustentabilidade e Eficiência Energética

Em conformidade com as diretrizes de sustentabilidade no desenvolvimento de software, a infraestrutura foi selecionada considerando a minimização da pegada de carbono.

* **Energia Renovável:** Utilização de provedores de nuvem fundamentados em metas de neutralidade de carbono.
* **Eficiência de Processamento (Edge):** Processamento descentralizado que otimiza o tráfego de dados até o usuário final.
* **Arquitetura Estática:** O uso de HTML e CSS puro elimina a necessidade de processamento intenso em servidores dedicados, reduzindo o consumo energético nos centros de dados.

---

## 6. Referências Consultadas

* Vercel Pricing. Disponível em: <https://vercel.com/pricing>
* Render Pricing. Disponível em: <https://render.com/pricing>
* Railway Pricing. Disponível em: <https://railway.app/pricing>
* Registro.br. Disponível em: <https://registro.br/>



