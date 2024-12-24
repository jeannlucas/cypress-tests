# Cypress Tests - Primeiros Passos 🧪

Este repositório contém o código do meu primeiro teste automatizado com Cypress.

## 🚀 Objetivo do Projeto

Testar o fluxo de criação de conta em uma aplicação Magento 2 Demo, validando se o formulário funciona corretamente com dados dinâmicos.

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **Faker.js**: Geração de dados aleatórios para os testes.
- **Node.js**: Ambiente de execução.

## 📂 Estrutura do Projeto

- cypress/e2e/createAccount.cy.js: Contém o teste de criação de conta.
- cypress/support/selector/selectorCreateAccount.js: Contém os seletores dos elementos da página.
- cypress.config.js: Arquivo de configuração do Cypress.

## 💻 Como Rodar o Projeto

1. Clone o repositório:

```bash
    git clone https://github.com/jeannlucas/cypress-tests.git
```

2. Instale as dependências:

```bash
   npm install
```

3. Execute os testes:

```bash
   npx cypress open
```

4. Na interface do Cypress, selecione o teste createAccount.cy.js para executá-lo.

## 📊 Descrição do Teste

### Cenário Testado:

**BIG01**: Testar o fluxo de criação de conta em uma aplicação Magento 2 Demo. O teste valida se a tela de registro é exibida corretamente quando o usuário clica na opção para criar uma nova conta.

### Fluxo do Teste:

1. Acessar a página inicial do Magento (https://magento2-demo.magebit.com/).

2. Clicar na opção "Create an Account".
3. Verificar se a URL corresponde à tela de criação de conta.
4. Validar a presença das seções "Create New Customer Account" e "Personal Information".
5. Preencher o formulário com dados dinâmicos (nome, sobrenome, e-mail, senha gerados pelo Faker.js).
6. Enviar o formulário para concluir a criação da conta.

## 🔧 Melhorias Futuras

- Criar casos de teste adicionais para validar fluxos alternativos, como login com dados inválidos ou recuperação de senha.
- Integrar os testes ao pipeline de CI/CD para automação contínua.
- Adicionar validações para campos com dados inválidos e garantir que mensagens de erro sejam exibidas corretamente.

---

**Contribuições:** Caso deseje contribuir com melhorias ou sugestões, fique à vontade para abrir um Pull Request.
