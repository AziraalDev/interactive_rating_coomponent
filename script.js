const varForm = document.querySelector('[data-js-form]');
const varTemplate = document.querySelector('[data-js-temp]');
const varWrapper = document.querySelector('[data-js-main]');

function checkingSubmit(event) {
    event.preventDefault();

    const varRating = new FormData(event.target).get('rating_number');

    if (varRating) {
        varWrapper.innerHTML = varTemplate.innerHTML.replace(/{{ rating }}/, varRating);
    }
}

varForm.addEventListener('submit', checkingSubmit);