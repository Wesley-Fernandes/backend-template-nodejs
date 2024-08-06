# Backend Server Template

Este é um template para criar um servidor backend utilizando Express, Prisma e TypeScript.
![preview](https://github.com/user-attachments/assets/56041943-f64c-4be7-84d1-fb323edae557)

## Dependências

- **@prisma/client**: Cliente Prisma para interagir com o banco de dados.
- **express**: Framework web para Node.js.
- **prisma**: Ferramenta ORM para bancos de dados.

## Dependências de Desenvolvimento

- **@types/bcrypt**: Tipos para a biblioteca bcrypt.
- **@types/express**: Tipos para a biblioteca express.
- **@types/jsonwebtoken**: Tipos para a biblioteca jsonwebtoken.
- **@types/node**: Tipos para o Node.js.
- **bcrypt**: Biblioteca para hashing de senhas.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.
- **express-async-errors**: Tratamento de erros assíncronos no Express.
- **jsonwebtoken**: Biblioteca para trabalhar com tokens JWT.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **onchange**: Executa comandos quando arquivos são alterados.
- **prettier**: Ferramenta de formatação de código.
- **ts-node**: Executor de arquivos TypeScript.
- **typescript**: Linguagem de programação TypeScript.
- **zod**: Biblioteca de validação e parsing de dados.

## Scripts

- **dev**: Inicia o servidor em modo de desenvolvimento com `nodemon` e `ts-node`.
- **prettier**: Formata os arquivos alterados usando Prettier.

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/Wesley-Fernandes/backend-template-nodejs
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o Prisma:

   ```bash
   npx prisma init
   ```

4. Configure suas variáveis de ambiente criando um arquivo `.env` na raiz do projeto e adicionando suas variáveis:

   ```env
   DATABASE_URL="sua-string-de-conexão-com-o-banco-de-dados"
   ```

5. Gere os artefatos do Prisma:

   ```bash
   npx prisma generate
   ```

## Estrutura do Projeto

```plaintext
├── prisma
│   ├── schema.prisma    # Definição do esquema do banco de dados
├── src
│   ├── config           # Configurações
│   ├── index.ts         # Arquivo principal do servidor
│   ├── routes           # Definição das rotas
│   ├── controllers      # Lógica dos controladores
│   ├── middlewares      # Lógica dos middlewares
│   ├── utils            # Utilitários
│   ├── schema           # Interfaces, Types e Schemas
├── .env                 # Arquivo de variáveis de ambiente
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configurações do TypeScript
```

## Executando o Servidor

Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

```bash
npm run dev
```

## Formatação de Código

Para formatar os arquivos alterados em tempo real usando Prettier, utilize o comando:

```bash
npm run prettier
```

## Formatar todos arquivos

Para formatar os arquivos alterados em tempo real usando Prettier, utilize o comando:

```bash
npm run format
```

## Contribuição

Se deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
