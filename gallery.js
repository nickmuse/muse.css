let galleryCurrentIndex = 0;
let galleryPhotos = [];

function galleryInitialize(photos) {
  galleryCurrentIndex = 0;
  galleryPhotos = photos;
  document.getElementById('gallery-lightbox').onclick = (e) => e.target.id === 'gallery-lightbox' && galleryLightboxClose();
  document.onkeydown = (e) => {
    if (!document.getElementById('gallery-lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') galleryLightboxClose();
    else if (e.key === 'ArrowLeft') galleryLightboxFlip(-1);
    else if (e.key === 'ArrowRight') galleryLightboxFlip(1);
  };
}

function galleryLightboxOpen(i) {
  galleryCurrentIndex = i;
  document.getElementById('gallery-lightbox-img').src = galleryPhotos[i];
  document.getElementById('gallery-lightbox').classList.add('active');
}

function galleryLightboxClose() {
  document.getElementById('gallery-lightbox').classList.remove('active');
}

function galleryLightboxFlip(dir) {
  galleryCurrentIndex = (galleryCurrentIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  document.getElementById('gallery-lightbox-img').src = galleryPhotos[galleryCurrentIndex];
}