const APIError = require("./APIError");

const handleError = async (err,req,res,next)=>{
    let myError;
    if(err instanceof APIError){ // err est il une instance d'APIError
        myError = err;
    }
    else{
        // si mon erreur n'est pas de type APIError, alors je la transforme
        myError = new APIError(err,req.url);
    }
    
    // gestion des logs pour la plateforme (pour nous)
    await myError.log();

    // gestion du retour utilisateur
    res.status(myError.status).json(myError.message);
};

module.exports = handleError