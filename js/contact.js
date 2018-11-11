window.onload = function() {
	var show = document.getElementById("show-modal");
	var close = document.getElementById("close-modal");
	var modal = document.getElementById("contact-modal");
	var bg = document.getElementById("modal-background");
	show.onclick = function() {
		modal.classList.add("is-active");
	}
	close.onclick = function() {
		modal.classList.remove("is-active");
	}
	bg.onclick = function() {
		modal.classList.remove("is-active");
	}
}


