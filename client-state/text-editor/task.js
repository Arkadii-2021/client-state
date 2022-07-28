const editor = document.getElementById('editor');
const cleaner = document.getElementById('btn-clear-text');

editor.value = localStorage.getItem('editorContent');


editor.addEventListener('keydown', (event) => {
	localStorage.setItem('editorContent', editor.value);
});

cleaner.addEventListener('click', (event) => {
	editor.value = '';
	localStorage.setItem('editorContent', editor.value);
});