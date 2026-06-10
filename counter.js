fetch('https://mrclputra.goatcounter.com/counter/%2F.json')
    .then(r => r.json())
    .then(d => { document.getElementById('gc-count').textContent = d.count; })
    .catch(() => { document.getElementById('gc-count').textContent = '?'; });
