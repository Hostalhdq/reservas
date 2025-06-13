document.getElementById('reservaForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const jsonData = {};
  data.forEach((value, key) => {
    jsonData[key] = value;
  });
  const res = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: { 'Content-Type': 'application/json' }
  });
  const result = await res.text();
  document.getElementById('respuesta').textContent = result;
});
