function validerFormulaire() {
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (nom === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  if (!email.includes("@")) {
    alert("Veuillez entrer un email valide !");
    return false;
  }

  alert("Message envoyé avec succès !");
  return true;
}
