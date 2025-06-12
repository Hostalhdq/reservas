
document.getElementById('reserva-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensaje').textContent = 'Reserva enviada correctamente. Pronto recibirás confirmación por correo.';
  document.getElementById('reserva-form').reset();
});
