const eyeDetails = document.querySelector('details.eye');
if (eyeDetails) {
    const imgs = [...eyeDetails.querySelectorAll('img')];
    let idx = 0;

    function showCurrent() {
        imgs.forEach((img, i) => img.style.display = i === idx ? 'block' : 'none');
    }

    showCurrent();

    eyeDetails.addEventListener('click', e => {
        if (e.target.tagName === 'IMG') {
            idx = (idx + 1) % imgs.length;
            showCurrent();
        }
    });
}
