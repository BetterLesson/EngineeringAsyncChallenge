const form = document.querySelectorAll('form')[0];
const submit = document.querySelectorAll('button')[0];
submit.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(new FormData(form));
});
