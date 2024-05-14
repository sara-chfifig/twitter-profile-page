// Sélectionnez tous les boutons "J'aime" et "Commentaire"
const likeButtons = document.querySelectorAll(".like-button");
const commentButtons = document.querySelectorAll(".comment-button");

// Ajoutez un gestionnaire d'événements pour le bouton "J'aime"
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ajoutez une classe pour indiquer que le tweet a été aimé
    button.classList.toggle("liked");
  });
});

// Ajoutez un gestionnaire d'événements pour le bouton "Commentaire"
commentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ouvrez une boîte de dialogue ou une autre interface pour les commentaires
    alert("Ajoutez votre commentaire ici !");
  });
});
