GraphQL Server
==============

Learn about GraphQL

    docker container run -it -v /home/bruno/Workspace/graphQL/:/home/node/graphQL -p 3000:3000 -p 4000:4000 node:8.4.0-alpine sh 

### Installation

    npm install

### Running

    npm run dev:server
    npm run json:server

### Browser Access

Json Server

    http://localhost:3000

GraphQL Client

    http://localhost:4000/graphql

### Commands

#### Fetching

    {
      customer(id:"2") {
        id,
        name
      }
    }

#### Mutations

add customer

      mutation{
        addCustomer(
          name: "Rafael",
          email: "rafael@test.com",
          age:35
        ){
          id,
          name,
          email
        }
      }

edit customer

    mutation{
      editCustomer(id:"1", age:100){
        id
        name
      }
    }

delete customer

    mutation{
      deleteCustomer(id: "1") {
        id
      }
    }
