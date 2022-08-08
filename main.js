const navigation = document
.querySelector("#navigation")

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(projects)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limite da secao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500)
  {
    backToTopButton.classList.add('show')
  } else 
  {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() 
{
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700
}).reveal(`
#home,
#home img, 
#home .stats, 
#services,
#services header,
#services .card
#about,
#about header,
#about .content `)


//let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
},10000  )

function nextImage(){
  count++;
  if(count>4){
     count=1;
  }

  document.getElementById("radio"+count).checked = true;
}


let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 1;

loadMoreBtn.onclick = () =>{
  let slider = [...document.querySelectorAll("")];
  for (var i = currentItem; i < currentItem + 3; i++){
    slider[i].style.display = "inline-block";
  }
  currentItem += 1;

  if(currentItem >= boxes.length){
  loadMoreBtn.style.display = "none";
  }
}


