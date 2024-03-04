function toggleMenu(){
    const menu=document.querySelector(".menu-links");

    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function scrollToContact() {
   
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  }
 
 function darkMode(){
  const body=document.querySelector(".styled-section");
 
  body.classList.toggle("dark-mode");
  
}
  
    