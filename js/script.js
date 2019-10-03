
function toggleMenu(visible){
  document.querySelector('.main-menu').classList.toggle('active', visible);

}
document.querySelector('.ham-icon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  console.log('click');
});
