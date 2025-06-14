/* File: script.js */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Semua field harus diisi!');
    return;
  }
  alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
  this.reset();
});