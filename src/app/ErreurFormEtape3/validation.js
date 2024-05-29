 
const validation = (userProfile) =>{
    const error = {}
 
    if(userProfile.firstname === ""){
        error.firstname = "Nom invalide!";
    }
    if(userProfile.firstname.length  < 3){
        error.firstname = "Nom trop court!";
    }
    if(userProfile.lastname === ""){
        error.lastname = "Prenom invalide!";
    }
    if(userProfile.firstname.length < 3){
        error.lastname = "Prenom trop court!";
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (userProfile.email === "" || !emailRegex.test(userProfile.email)) {
      error.email = "Email invalide!";
    }
    if(userProfile.tel === ""){
        error.tel = "Selected and Option Please!";
    }

    return error
}
export default validation;