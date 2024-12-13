
const navLinks = document.querySelectorAll('.nav-links a');


navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();  
    

    const targetId = link.getAttribute('href').substring(1);
    
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});