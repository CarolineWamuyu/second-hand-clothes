"use strict";
/* ---- Hamburger Menu Toggle ---- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    /* ---- Navbar scroll style change ---- */
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 32);
    }, { passive: true });

    /* ---- Scroll Reveal Animations ---- */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // once only
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => revealObserver.observe(el));

    /* ---- Wishlist heart toggle ---- */
    document.querySelectorAll('.product-card__wish').forEach(btn => {
      btn.addEventListener('click', () => {
        const isWished = btn.textContent.trim() === '♥';
        btn.textContent = isWished ? '♡' : '♥';
        btn.style.color = isWished ? '' : '#EF4444';
        btn.setAttribute('aria-pressed', !isWished);
      });
    });

    
document.getElementById("whatsappBtn").addEventListener("click", function(e) {
  e.preventDefault();

  const message = `Hello 👋,
I found your thrift store online.

I'm interested in your clothes 👕👗.
Do you have new arrivals available?`;

  const phone = "254700000000"; // 🔥 CHANGE TO YOUR NUMBER

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

// featured 

document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();

    const category = card.querySelector('.cat-card__name').innerText;

    alert(`You clicked ${category} category`);
    // later → redirect to filtered shop page
  });
});