document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popupModal = document.getElementById("popup-modal");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error display
    errorName.classList.add("hidden");
    errorEmail.classList.add("hidden");
    errorMessage.classList.add("hidden");

    let valid = true;

    if (!nameInput.value.trim()) {
      errorName.classList.remove("hidden");
      valid = false;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      errorEmail.classList.remove("hidden");
      valid = false;
    }

    if (!messageInput.value.trim()) {
      errorMessage.classList.remove("hidden");
      valid = false;
    }

    if (valid) {
      // Tampilkan modal jika valid
      popupModal.classList.remove("hidden");
      popupModal.classList.add("flex");

      // Reset form input setelah submit
      form.reset();
    }
  });

  // Tombol close modal
  document.querySelectorAll('[data-modal-hide="popup-modal"]').forEach(btn => {
    btn.addEventListener("click", () => {
      popupModal.classList.add("hidden");
      popupModal.classList.remove("flex");
    });
  });
});
