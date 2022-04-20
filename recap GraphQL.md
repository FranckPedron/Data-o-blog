# GraphQL

GraphQL nous permet de venir créer une API différente de celle que l'on connaissait.

GraphQL n'utilise qu'une route qui est "/graphql" (sans paramètre).

Les requêtes à notre API vont se faire via le body qui est envoyé à notre serveur.

GraphQL va analyser le body reçu et va rediriger vers le resolver correspondant ou remonter une erreur.

## Schéma

Le schéma de GraphQL permet de définir les types qui vont être utilisés dans notre API ainsi que les méthodes disponibles pour les personnes qui veulent consommer notre API.

Ici nous utilisons deux tables en BDD : "category" et "post".

Nous allons fournir une API autour de celles-ci.

Le schéma va donc décrire les champs attendus mais également ceux qui sont obligatoires.

Pour indiquer qu'un champs est NOT NULL, on ajoute ! en suffixe.

### Query

Par défaut, le schéma doit toujours comporter un type Query. Il faut le voir comme les routes par défaut.
Dans notre cas, il s'agit de récupérer tous les posts, toutes les catégories ou bien un post par son id ou une catégorie par son id.

### Mutation

Les mutations vont nous permettre de modifier les données (update, insert, delete).

On les définit comme le type Query. Les méthodes seront également définies dans le resolver.

## Resolver

Le ou les resolvers agissent comme nos controlleurs. Ils vont appellés les méthodes du datamapper (ou Active Record) et retourner les données.
