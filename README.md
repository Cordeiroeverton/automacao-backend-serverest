# Cenários de Teste Automatizados - Backend

Este projeto contém testes automatizados utilizando Cypress para validar fluxos críticos de login e operações de produtos em um sistema de API.

## Estrutura dos Testes

### 1. Fluxo de Login - API

**Descrição:**

Testa o fluxo de login de um usuário, garantindo o funcionamento esperado em diferentes cenários.

**Cenários Testados:**

- **Login com sucesso:**
  - O usuário insere credenciais válidas e recebe um token de autorização válido.
  
- **Login com credenciais inválidas:**
  - O usuário insere credenciais inválidas e recebe um erro de "Email e/ou senha inválidos".
  
**Comandos:**
- Acesse a URL da API `https://serverest.dev/login`.
- Utilize o arquivo de fixture `data.json` para carregar as credenciais do usuário.

**Pré-requisitos:**
Certifique-se de que o arquivo `data.json` contém as credenciais de um usuário válido no seguinte formato:

```json
{
  "validUser": {
    "email": "usuario@usuario.com",
    "password": "senhaValida"
  },
  "invalidUser": {
    "email": "usuarioInvalido@usuario.com",
    "password": "senhaInvalida"
  }
}
