
// fonction pour modifier le paragraphe
function customParagraph() {
  //Début de modification
  // récupère la couleur
  var color = this.getAttribute('class').split(' ').slice(-1).toString();
  //fin de la modification
  var paragraph = document.querySelector('p');
  paragraph.style.color = color;
  }
  /*var parent = document.querySelector('#text+div');
  //selectionne le texte de la div
  parent.addEventListener('click',function(event){
  let target = event.target;
  let classes = target.getAttribute('class');
  // récupére couleur
  let color = classes.split(' ').slice(-1).toString();
  customParagraph(color);
  })
  on va selectionner l'élément DIV parent des boutons
  */
  // On effectue une boucle pour appliquer la couleur aux éléments
   var targets = document.querySelectorAll('.color');
   for (var i = 0; i < targets.length; i++) {
     targets[i].addEventListener('click',customParagraph)
   }
