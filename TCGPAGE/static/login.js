document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInput.value;

    if (password === '277353') {
      localStorage.setItem('logueado', 'true');
      window.location.href = '/admin_productos/'; // Redirige a tu sección privada
    } else {
      errorMsg.classList.remove('hidden');
    }
  });
});
