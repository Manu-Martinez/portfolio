// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });
  
  // Form submission alert
  document.querySelector('form')?.addEventListener('submit', () => {
	alert('¡Mensaje enviado! Te contactaré pronto.');
  });