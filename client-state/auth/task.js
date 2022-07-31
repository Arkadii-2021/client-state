const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const columnForm = document.getElementsByTagName('input');
const signinForm = document.getElementById('signin__form');

if (checkUserId()) {
	toggleClass(JSON.parse(userId).user_id);	
}


document.forms.signin__form.onsubmit = async (e) => {
	e.preventDefault();

    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
      method: 'POST',
      body: new FormData(signinForm)
    });

    let result = await response.json();
	console.log(result);
	if (result.success === true && response.status === 200 && checkUserId() != result.user_id) {
		localStorage.setItem('data_auth', JSON.stringify(result));
		toggleClass(result.user_id);
	} else {
		signinForm.reset();
		welcome.classList.add('welcome_active');
		welcome.textContent = 'Неверный логин/пароль';
	}
};

function toggleClass (resultUserId) {
	let card = document.getElementsByClassName('card')[0];
	signin.classList.toggle('signin_active');
	welcome.classList.add('welcome_active');
	welcome.textContent = `Добро пожаловать, пользователь #${resultUserId}`;
	card.insertAdjacentHTML('afterBegin', '<button class="btn">Выйти</button>');
	card.addEventListener('click', (event) => {
		localStorage.removeItem('data_auth');
		location.reload();
	})
};

function checkUserId () {
	if (localStorage.getItem('data_auth')) {
		userId = localStorage.getItem('data_auth');
		return JSON.parse(userId).user_id;
	}
};
