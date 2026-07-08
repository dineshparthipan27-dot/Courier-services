const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("toggle");

  if (navLinks.classList.contains("nav-active")) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    hamburger.classList.remove("toggle");

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  });
});

/* ===============================
   Footer Newsletter Validation
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  const newsForm = document.getElementById('newsletterForm');
  const newsEmail = document.getElementById('newsletterEmail');
  const newsMsg = document.getElementById('newsletterMsg');
  const newsBtn = document.getElementById('newsletterBtn');

  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Form submit aagi page reload aagaratha thadukkum

      const emailVal = newsEmail.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      newsMsg.className = 'newsletter-msg';
      newsForm.classList.remove('shake-form');


      void newsForm.offsetWidth;


      if (emailVal === '') {
        newsMsg.textContent = '⚠️ Please enter your email address.';
        newsMsg.classList.add('show', 'msg-error-text');
        newsForm.classList.add('shake-form');
      }

      else if (!emailRegex.test(emailVal)) {
        newsMsg.textContent = '⚠️ Please enter a valid email (e.g. name@mail.com).';
        newsMsg.classList.add('show', 'msg-error-text');
        newsForm.classList.add('shake-form');
      }

      else {
        newsMsg.textContent = '✅ Subscribed successfully!';
        newsMsg.classList.add('show', 'msg-success-text');
        window.location.href = '404.html'

        const originalBtnText = newsBtn.innerHTML;
        const originalBtnColor = newsBtn.style.backgroundColor;

        newsBtn.innerHTML = '✔';
        newsBtn.style.backgroundColor = '#4CAF50';


        setTimeout(() => {
          newsEmail.value = ''; // clear input
          newsMsg.classList.remove('show');
          newsBtn.innerHTML = originalBtnText; // Back to arrow
          newsBtn.style.backgroundColor = originalBtnColor;
        }, 3000);
      }
    });
  }
});