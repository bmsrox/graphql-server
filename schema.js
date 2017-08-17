const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

const customers = [
  {id:'1', name: 'Bruno', email: 'bmsrox@gmail.com', age: 30},
  {id:'2', name: 'Joe', email: 'joe@mail.com', age: 29},
  {id:'3', name: 'Sara', email: 'sara@mail.com', age: 23},
  {id:'4', name: 'Alan', email: 'alan@mail.com', age: 38}
]

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt},
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {type:GraphQLString}
      },
      resolve(parentValue, args) {
        for(let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id)
          return customers[i]
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
