const countElement = document.getElementById('count');
const errorElement = document.getElementById('para-error');
const decrementButton = document.querySelector('.decrement');
const clearButton = document.querySelector('.clear');

let count = 0;

function increment() {
  count++;
  updateCount();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  } else {
    showError('Error: Cannot go below 0');
  }
}

function clearCount() {
  count = 0;
  updateCount();
  hideError();
}

function updateCount() {
  countElement.textContent = count;
  if (count === 0) {
    decrementButton.style.display = 'none';
  } else {
    decrementButton.style.display = 'block';
  }
}

function showError(message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError() {
  errorElement.style.display = 'none';
}
