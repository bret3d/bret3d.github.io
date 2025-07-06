(function() {
  setTimeout(function() {
    if (window.location.hash && window.location.hash.includes('contact-us')) {
      window.location.href = '/contact.html';
    }
  }, 10); // A small delay to ensure the hash is available
})();
