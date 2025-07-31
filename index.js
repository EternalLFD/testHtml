(function () {
	const box = document.querySelector("div.box");

	box.onclick = (e) => {
		if (e.target.classList.contains("item")) {
			console.error(1);
			console.error(2);
			console.error(3);
			console.error(4);
		}
	};
})();
