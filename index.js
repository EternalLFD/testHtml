;
(function () {
    const box = document.querySelector('div.box');

    box.onclick = e => {
        console.error(e.target.classList)
        if (e.target.classList.contains('item')) {
            console.error(2)
        }
    }
})()