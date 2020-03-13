async function getInfo() {
    let id = document.querySelector('#stopId');
    let name = document.querySelector('#stopName');
    let busesUl = document.querySelector('#buses');

    busesUl.innerHTML = '';

    const res = await fetch(`https://remotedb-6a1f6.firebaseio.com/businfo.json`);
    const data = await res.json();

    if (!data[id.value]) {
        name.textContent = 'Error';
        return;
    }
    name.textContent = data[id.value].name;
    const buses = data[id.value].buses;
    Object.entries(buses).forEach(([bus, time]) => {
        const x = document.createElement('li');
        x.textContent = `Bus ${bus} arrives in ${time} minutes`;
        busesUl.appendChild(x);
    });
}