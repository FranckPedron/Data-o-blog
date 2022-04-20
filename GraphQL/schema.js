/**
 * Le fichier de schéma va nous permettre de définir les types qui vont être pris en compte par GraphQL
 * 
 */
 const { gql } = require("apollo-server");

 const schema = gql`
     # le # permet d'écrire des commentaires
     # le schema est la présentation de nos types
 
     type Post{
 
         # ! représente NOT NULL, pour le GET, on n'autorise pas une valeur nulle pour ces champs
 
         id: ID! # l'id est de type ID
         slug: String! # String représente le type string (du texte)
         title: String!
         content: String
         excerpt: String
 
         category: Category! # on précise que la clef category est de type Category (défini juste après)
     }
 
     type Category{
         id: ID!
         route: String!
         label: String!
         posts:[Post] # on précise que les catégories ne remontent pas forcément les posts associés
     }
 
     ## après avoir défini les types, on vient définir nos end points via Query
 
     type Query{
         # on définit les routes
 
         "Liste des catégories"
         categories: [Category]
 
         "Liste des posts"
         posts: [Post]
 
         "Catégorie par id"
         category(id: ID!): Category
     }
 
     ## Les mutations nous permettent de venir étendre notre API GraphQL pour ne plus être en lecture seule mais également en écriture
 
     type Mutation{
         # dans le type mutation, on vient placer des méthodes du CRUD ou plutôt comme le ferait un controller redirigé vers la méthode du dataMapper
 
         createPost(
             slug: String! 
             title: String!
             content: String
             excerpt: String
             category_id: ID!
         ) : Post # les : Post indiquent quel va être le retour de la fonction/méthode
     }
 `;
 
 
 module.exports = schema;