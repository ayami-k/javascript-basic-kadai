const txt = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
 setTimeout(function() {
 text.textContent = 'ボタンをクリックしました';
 }, 2000);
});