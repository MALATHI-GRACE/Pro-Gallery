  function filterGallery(category) {
      const images = document.querySelectorAll('.gallery img');
      images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }

    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    function closeLightbox() {
      lightbox.style.display = 'none';
    }

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        closeLightbox();
      }
    });