//Updating number of projects
let workNumber = 10;

function updateWorkNumber(){
  var textToUpdate = document.querySelectorAll('p.workNumber');
  workNumber += 3;
  textToUpdate.forEach((text) => {
    text.textContent = "" + workNumber;
  })
  var aF = requestAnimationFrame(updateWorkNumber);
  if(workNumber >= 300)cancelAnimationFrame(aF);
}
updateWorkNumber();

//Changing the navbar when scrolling

let navbar = $("#changeNav");
navbar.hide();
window.addEventListener('scroll', () => {
  if(window.scrollY >= 401)navbar.fadeIn();
  else{navbar.fadeOut();}
  
})