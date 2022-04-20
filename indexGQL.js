require("dotenv").config();
const { ApolloServer} = require("apollo-server");

const typeDefs = require("./GraphQL/schema"); // la définition de nos modèles pour la gestion des routes
const resolvers = require("./GraphQL/resolvers"); // les actions à mener suivant les routes (rôle du controller)

const server = new ApolloServer({typeDefs,resolvers});

const PORT = process.env.PORT || 3001;
server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});