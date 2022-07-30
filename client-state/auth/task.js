const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const columnForm = document.getElementsByTagName('input');

document.forms.signin__form.onsubmit = async (e) => {
	e.preventDefault();

    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
      method: 'POST',
      body: new FormData(signin__form)
    });

    let result = await response.json();
	if (result.success === true && response.status === 200) {
		localStorage.setItem('data_auth', JSON.stringify(result));
		signin.classList.toggle('signin_active');
		welcome.classList.add('welcome_active');
		welcome.textContent = `Добро пожаловать, пользователь #${result.user_id}`;
	} else {
		columnForm.login.value = ''
		columnForm.password.value = ''
		welcome.classList.add('welcome_active');
		welcome.textContent = 'Неверный логин/пароль';
	}
};