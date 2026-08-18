const box = document.querySelector('.quote');
const text = document.getElementById('quote-text');

const versions = [
    'If you ever go out the back door, remember to water the flowers',
    'If you ever go out the back door, remember to water the <b>garden</b>',
    'If you ever go out the <b>front</b> door, remember to water the <b>garden</b>',
    'If you <b>never</b> go out the <b>front</b> door, remember to water the <b>garden</b>',
    'If you are still inside, did you ever leave?'
];

let toggleCount = 0;

box.addEventListener('toggle', () => {
    if (!box.open) return;
    text.innerHTML = versions[toggleCount % versions.length];
    toggleCount++;
});
