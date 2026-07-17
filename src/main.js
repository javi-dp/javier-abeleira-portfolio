import './style.css'

// Gestión de interactividad de Tarea 1: Navbar al hacer scroll & Modal de CVs
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const cvModal = document.getElementById('cv-modal');
  const btnOpenModal = document.getElementById('btn-open-cv-modal');
  const btnHeroCv = document.getElementById('btn-hero-cv');
  const btnCloseModal = document.getElementById('btn-close-cv-modal');

  // Efecto en Navbar durante el scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('py-2', 'shadow-2xl');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.add('py-5');
      navbar.classList.remove('py-2', 'shadow-2xl');
    }
  });

  // Funciones Modal CV
  const openModal = () => {
    if (cvModal) {
      cvModal.classList.remove('opacity-0', 'pointer-events-none');
      const modalBox = cvModal.querySelector('.glass-panel');
      if (modalBox) {
        modalBox.classList.remove('scale-95');
        modalBox.classList.add('scale-100');
      }
    }
  };

  const closeModal = () => {
    if (cvModal) {
      cvModal.classList.add('opacity-0', 'pointer-events-none');
      const modalBox = cvModal.querySelector('.glass-panel');
      if (modalBox) {
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');
      }
    }
  };

  if (btnOpenModal) btnOpenModal.addEventListener('click', openModal);
  if (btnHeroCv) btnHeroCv.addEventListener('click', openModal);
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);

  // Cerrar modal haciendo clic fuera de la tarjeta
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeModal();
    });
  }

  // Refrescar iconos si está Lucide disponible
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
