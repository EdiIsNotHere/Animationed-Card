  const cards = document.querySelectorAll('.container div');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const color = card.getAttribute('data-color');
      body.style.backgroundColor = color;
      overlay.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      body.style.backgroundColor = '';
      overlay.classList.remove('active');
    });
  });
