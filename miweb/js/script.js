
const TARGET_DATE_ISO = '2025-10-28';

(function(){
  const target = new Date(TARGET_DATE_ISO);
  const daysEl = document.getElementById('days');
  const msgEl = document.getElementById('message');

  function update(){
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    const msPerDay = 1000*60*60*24;
    const daysLeft = Math.ceil(diff / msPerDay);

    if (isNaN(target.getTime())) {
      daysEl.textContent = '--';
      msgEl.textContent = 'Fecha inválida. Edita la variable TARGET_DATE_ISO.';
      return;
    }

    if (diff > 0) {
      daysEl.textContent = daysLeft + (daysLeft === 1 ? ' día' : ' días');
      msgEl.textContent = '¡Faltan pocos días! ❤️';
    } else if (Math.abs(diff) < msPerDay) {
      daysEl.textContent = '¡Hoy!'; 
      msgEl.textContent = '¡TE AMO! 🥰';
    } else {
      daysEl.textContent = '0 días';
      msgEl.textContent = 'La fecha ya pasó';
    }
  }

  update();
  setInterval(update, 60*1000);
})();
