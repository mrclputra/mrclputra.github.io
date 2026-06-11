const BIRTH = new Date('2006-04-10T00:00:00');
const MS_PER_YEAR = 365.25 * 24 * 3600 * 1000;

function tick() {
    const age = (Date.now() - BIRTH) / MS_PER_YEAR;
    document.getElementById('age').textContent = age.toFixed(10);
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
