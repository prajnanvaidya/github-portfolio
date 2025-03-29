// Smooth scrolling for navigation links with fixed offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 70;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active nav link highlighting using IntersectionObserver
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }, options);
  sections.forEach(section => observer.observe(section));
  
  // Toggle "More Details" sections
  document.querySelectorAll('.more-details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const detailsSection = document.getElementById(targetId);
      if (detailsSection) {
        if (detailsSection.style.display === 'block') {
          detailsSection.style.display = 'none';
          button.textContent = 'More Details';
        } else {
          detailsSection.style.display = 'block';
          button.textContent = 'Less Details';
        }
      }
    });
  });
  