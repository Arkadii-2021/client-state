const welcome = document.getElementById('welcome');

document.forms.signin__form.onsubmit = async (e) => {
	e.preventDefault();

    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
      method: 'POST',
      body: new FormData(signin__form)
    });

    let result = await response.json();
	if (result.success === true) {
		localStorage.setItem('user_id', result.user_id);
		localStorage.setItem('data_auth', JSON.stringify(result));
		welcome.classList.toggle('welcome_active');
		welcome.children.user_id.textContent = result.user_id;
	} else {
		welcome.classList.add('welcome_active');
		welcome.textContent = 'Неверный логин/пароль';
	}
};