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
    let currentIndex = 0;

      // Open lightbox
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
      });
    });
    

  // Show current image
    function showImage() {
      lightboxImg.src = images[currentIndex].src;
    }


    function closeLightbox() {
      lightbox.style.display = 'none';
    }


   // Navigate images
    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      showImage();
    }

        // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex') {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "Escape") closeLightbox();
      }
    });