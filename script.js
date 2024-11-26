(function() {
  let count = 0;
  const maxCount = 10;
  const counterElement = document.getElementById('counter');
  const messageElement = document.getElementById('message');

  document.getElementById('increment').addEventListener('click', function() {
      if (count < maxCount) {
          count++;
          updateCounter();
      }
  });

  document.getElementById('decrement').addEventListener('click', function() {
      if (count > 0) {
          count--;
          updateCounter();
      }
  });

  document.getElementById('reset').addEventListener('click', function() {
      count = 0;
      updateCounter();
  });

  function updateCounter() {
      counterElement.textContent = count;
      if (count >= maxCount) {
          messageElement.style.display = 'block';
      } else {
          messageElement.style.display = 'none';
      }
  }
})();
