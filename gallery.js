const pairs = new Map();

document.querySelectorAll('[data-pair]').forEach(img => {
    const key = img.dataset.pair;
    if (!pairs.has(key)) pairs.set(key, []);
    pairs.get(key).push(img);
});

[...pairs.values()].forEach((imgs, index) => {
    let i = 0;
    function next() {
        // gifs should be longer
        // const delay = 4000;
        const delay = imgs[i].src.endsWith('.gif') ? 5000 : 2500;
        setTimeout(() => {
            imgs[i].style.opacity = '0';
            i = (i + 1) % imgs.length;
            imgs[i].style.opacity = '1';
            next();
        }, delay);
    }
    setTimeout(next, (index + 1) * 500);
});