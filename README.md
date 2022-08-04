Anotações do Curso

Requisitos para o projeto: Node, Npm e Yarn instalado

Montagem do projeto em node;

Inicializar o projeto - Gerar o package.json
yarn init -y

Instalar - Adicionar dependencias
yarn add typescript jest @types/jest ts-node ts-jest

Criar o arquivo de configurações do Typescript
npx tsc --init

Criar configuração para o ts-jest
npx ts-jest config:init 

Interpretar o Typescript e executar o teste
npx jest

Executar o teste com coverage Modo de detalhes da execução do método (mapa de calor)
npx jest --coverage

Executar o comando de teste de forma constante - se alterar o arquivo o teste sera executado na sequencia - rodar o teste de forma automática
npx jest --watchAll

---------
Todos os testes tem 3 partes

Given/Arrange - Preparação do cenário
When/Act - Ação ou Execução do comportamento
Then/Assert - Validação, verificação das espectativas

--------------

Princípios do Code Smells - Sinal de alerta

Análise do arquivo calc-refatorar.ts

1 - Ter que rolar a página para analisar todo o método;
2 - Afastamento da margem;
3 - Nomes estranhos - movArray, mov, dist, ds, result, calc

Renomear qualquer coisa que não estava bem entendida

4 - Números mágicos

extrair constante
extrair variável explicativa
extrair enum

5 - Comentários útil, que explica alguma coisa

Extrair função ou método
extrair variável explicativa

6 - Código comentado ou morto

apagar comentário

7 - Condição complexa ou extensa

Extrair função ou método
extrair variável explicativa

8 - Linhas em branco

Apagar linhas em branco dentro do algoritmo

9 - Retornos estranhos (códigos numéricos)

Depende da linguagem

Utilizar algum tipo de tratamento de erros/exceptions ou outro tupo de result pattern

8 - Condições confusas

Extrair a condição extensa para uma função ou método
Introduzir cláusulas guarda
consolidar condições

9 - Falta de tratamento de erros ou exceções

Utilizar algum tipo de tratamento de erros/exceptions ou outro tupo de result pattern

10 - Método longo

Quebra do SRP, Single Responsibility Principle: Devemos separar coisas que mudam por motivos diferentes;
Quebra do OCP, Open/Closed Principle: Devemos estar abertos para extensão e fechados para modificação






