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

Executar o comando de teste de forma constante - se alterar o arquivo o teste sera executado na sequencia
npx jest --watchAll

--------------
Análise do arquivo calc-refatorar.ts

Princípios do Code Smells

1 - Ter que rolar a página para analisar todo o método;
2 - Afastamento da margem;

---------
Todos os testes tem 3 partes

Given/Arrange - Preparação do cenário
When/Act - Ação ou Execução do comportamento
Then/Assert - Validação, verificação das espectativas



