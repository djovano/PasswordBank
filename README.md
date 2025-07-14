# Banco de Senhas (PasswordBank)

Aplicativo desktop para gerenciamento seguro de senhas com criptografia, desenvolvido com:

- Frontend: React + Electron
- Backend: Java Spring Boot + Maven
- Banco de dados: MySQL
- Criptografia: AES
- API Documentada com Swagger

---

## Pré-requisitos

Certifique-se de ter instalado:

### Frontend:
- Node.js (v18 ou superior)
- Git

### Backend:
- JDK 17 ou superior
- MySQL Server
- (opcional) IDE como IntelliJ IDEA ou VS Code

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/password-bank.git
cd password-bank
```

---

## Backend (Java + Spring Boot)

### 1. Configurar o banco de dados

Crie um banco MySQL chamado `password_bank`:

```sql
CREATE DATABASE password_bank;
```

### 2. Ajustar as credenciais em `backend/src/main/resources/application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/password_bank
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA
spring.jpa.hibernate.ddl-auto=update
```

### 3. Rodar o backend

Via terminal:

```bash
cd backend
./mvnw spring-boot:run
```

Se estiver no Windows e `mvnw` não for reconhecido, execute:

```bash
mvn spring-boot:run
```

### API disponível em:

```
http://localhost:8080/api/senhas
```

### Swagger (documentação da API):

```
http://localhost:8080/swagger-ui/index.html
```

---

## Frontend (React + Electron)

### 1. Instalar dependências

```bash
cd frontend
npm install
```

### 2. Rodar o frontend (Electron + React)

```bash
npm run dev
```

O Electron será iniciado como aplicativo desktop com a interface React.

O React usará `localhost:5173` em modo dev, e se comunicará com o backend em `http://localhost:8080`.

---
