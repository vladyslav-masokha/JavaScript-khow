// Navigation
const navEl = document.getElementsByTagName('nav');
const bodyEl = document.querySelector('body');

document.getElementById('close-menu').onclick = () => {
	navEl[0].classList.add('un-active-navbar');
	navEl[0].style.display = 'none';
};
document.getElementById('check-burger').onclick = () => {
	navEl[0].classList.remove('un-active-navbar');
	navEl[0].style.display = 'flex';
};

// Clock
function myClock() {
	setTimeout(function () {
		const d = new Date();
		const n = d.toLocaleTimeString();
		document.getElementById('clock').innerHTML = n;
		myClock();
	}, 1000);
}
myClock();
