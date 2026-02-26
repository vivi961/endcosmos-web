(() => {
  // Year in footer
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Optional: prevent dead links if pages don't exist yet
  // (You can remove this later.)
  const placeholders = ['/news', '/lore', '/ranking', '/download', '/privacy', '/terms', '/contact'];
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (placeholders.includes(href)) {
      a.addEventListener('click', (e) => {
        // If those pages don't exist yet, avoid 404 during early stage
        // Comment this block when you create the pages.
        e.preventDefault();
        alert('Coming soon.');
      }, { once: true });
    }
  });
})();