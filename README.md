# Organização de Jobs:
Essa aplicação foi realizada para receber uma quantidade de tarefas a serem realizadas com data máxima de realização e com tempo de realização. Ao enviar as tarefas, o sistema faz um agrupamento das tarefas para serem realizadas em ordem de prioridade.

# Setup
Execute o comando `npm install` para instalar as dependências do projeto.

# Iniciar servidor
Para iniciar utilize `npm run dev` ou `yarn dev`.

# API End-Points:
* [GET] - /jobs
  - Ordena os jobs que estão na "base de dados" _./src/database/data.ts_, retorna um array com a ordenação dos jobs.
* [POST] - /jobs
  - Ordena os jobs que foram enviamos via requisição, retorna um array com a ordenação dos jobs.

## Exemplo requisição

```
 [
   {
     id: number;
     descricao: string;
     dataMaxima:"(YYYY-MM-DD HH:MM:SS)";
     tempoEstimado: number;
   }
 ]
```

# Teste: 
* Para executar os testes utilize o Postman. [Postman]https://www.postman.com/downloads/
* Com o Postman instalado, importe o arquivo da collection que está na pasta **teste**.
* Rode a collection e verifique o resultado dos testes.
