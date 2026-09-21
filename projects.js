document.querySelectorAll('.showcase-grid a').forEach((a, index) => {
    const imgs = [...a.querySelectorAll('.showcase-img')];
    if (imgs.length < 2) return;

    let i = 0;
    function next() {
        // gifs should be longer
        // const delay = 4000;
        const delay = imgs[i].tagName === 'VIDEO' ? 10000 : 5000;
        setTimeout(() => {
            imgs[i].style.opacity = '0';
            i = (i + 1) % imgs.length;
            imgs[i].style.opacity = '1';
            next();
        }, delay);
    }
    setTimeout(next, (index + 1) * 500);
});
