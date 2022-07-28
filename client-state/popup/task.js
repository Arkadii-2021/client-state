const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close modal__close_times')[0];

function elModal() {
	if (!localStorage.getItem('modalActive')) {
		subscribeModal.classList.add('modal_active');
		modalClose.addEventListener( 'click', (event) => {
			subscribeModal.classList.toggle('modal_active');
		});
		localStorage.setItem('modalActive', 0)
	}
}

elModal();