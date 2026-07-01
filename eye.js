const eyeDetails = document.querySelector('details.eye');
if (eyeDetails) {
    const imgs = [...eyeDetails.querySelectorAll('img')];
    let idx = 0;

    function showCurrent() {
        imgs.forEach((img, i) => img.style.display = i === idx ? 'block' : 'none');
    }

    showCurrent();

    eyeDetails.addEventListener('toggle', () => {
        if (!eyeDetails.open) {
            idx = (idx + 1) % imgs.length;
            showCurrent();
        }
    });
}
