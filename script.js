window.onload = function() {
  // Animation: show elements in sequence
  const animatedEls = document.querySelectorAll('.animated');
  animatedEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 350 + i * 250);
  });

  // Pulse effect on hover for images
  document.querySelectorAll('.main-img, .side-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
      img.style.transition = 'transform 0.18s';
      img.style.transform += ' scale(1.08)';
    });
    img.addEventListener('mouseleave', function() {
      img.style.transform = img.style.transform.replace(' scale(1.08)', '');
    });
  });

  // Social links: pulse/shine on hover
  document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      link.style.boxShadow = '0 0 0 4px #1112, 0 4px 16px #0003';
      link.style.transform += ' scale(1.15)';
    });
    link.addEventListener('mouseleave', function() {
      link.style.boxShadow = '';
      link.style.transform = link.style.transform.replace(' scale(1.15)', '');
    });
  });
}; 