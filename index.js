;
(function () {
    const box = document.querySelector('div.box');

    box.onclick = e => {
        if (e.target.classList.contains('item')) {
            console.error(2)
        }
    }
})()