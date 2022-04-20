const categoryDB = require("../app/model/categoryDB");
const postDB = require("../app/model/postDB");

module.exports = {
    Query: {
        categories(){
            return categoryDB.getAll();
        },
        posts(){
            return postDB.getAll();
        },
        category( _, args){
            return categoryDB.getById(args.id);
        }
      },

      Category: {
          // le parent est ici la Category, on vient chercher ses posts
          posts(parent){
              console.log(parent);
              return postDB.getPostByCategory(parent.id);
          }
      },

      Post: {
          category(parent){
              console.log(parent);
              return categoryDB.getById(parent.category_id);
          }
      },
      Mutation: {
          createPost(_,args){
              return postDB.create(args);
          }
      }
};