// Filter Function
function filterGallery(category) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    if (category === 'all') {
      item.classList.remove('hidden');
    } else {
      item.classList.toggle('hidden', !item.classList.contains(category));
    }
  });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
