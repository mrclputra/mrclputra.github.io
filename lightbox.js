const lightbox = document.querySelector('.lightbox');
if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.dataset.caption || '';
            lightbox.showModal();
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.close();
    });
}
