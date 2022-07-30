const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close modal__close_times')[0];

function elModal() {
    if (getCookie('modalActive') === undefined) {
        subscribeModal.classList.add('modal_active');
        modalClose.addEventListener('click', (event) => {
            subscribeModal.classList.toggle('modal_active');
        });
        setCookie('modalActive', 0);
    }
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

elModal();
