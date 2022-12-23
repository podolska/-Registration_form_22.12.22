const buttonForm = document.querySelector('#button');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const birthInput = document.querySelector('#birth');
const sexInput = document.querySelector('#sex');

nameInput.addEventListener('input', event => {
    nameInput.value = nameInput.value.replace(/[0123456789!@#$%^&*()_+=.,?'"`;:/|\ ]/gmi, '');
});

surnameInput.addEventListener('input', event => {
    surnameInput.value = surnameInput.value.replace(/[0123456789!@#$%^&*()_+=.,?'"`;:/|\ ]/gmi, '');
});

birthInput.addEventListener('input', event => {
    birthInput.value = birthInput.value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюієї!@#$%^&*()_+=,?'"`;:/|\ ]/gmi, '');
});

buttonForm.addEventListener('click', (event) => {
    console.log(document.querySelector('#birth').value.length);
    if ( document.querySelector('#name').value.length > 2 && document.querySelector('#surname').value.length > 2 && document.querySelector('#address').value.length > 5 && document.querySelector('#birth').value.length == 10 ) {
        document.querySelector('.result').style.opacity = 1;

        document.querySelector('#name').style.border = '1px solid black';
        document.querySelector('#surname').style.border = '1px solid black';
        document.querySelector('#address').style.border = '1px solid black';
        document.querySelector('#birth').style.border = '1px solid black';

        // Ім'я
        document.querySelector('.result__name span').textContent = document.querySelector('#name').value;
        // Прізвище
        document.querySelector('.result__surname span').textContent = document.querySelector('#surname').value;
        // Дата народження
        document.querySelector('.result__birth span').textContent = document.querySelector('#birth').value;
        // Стать
        if ( document.querySelector('#man').checked ) {
            document.querySelector('.result__sex span').textContent = 'Чоловік';
        } else if ( document.querySelector('#woman').checked ) {
            document.querySelector('.result__sex span').textContent = 'Жінка';
        }
        // Місто
        if ( document.querySelector('#city').value == 'kyiv' ) {
            document.querySelector('.result__city span').textContent = 'Київ';
        } else if ( document.querySelector('#city').value == 'vinnitsa' ) {
            document.querySelector('.result__city span').textContent = 'Вінниця';
        } else if ( document.querySelector('#city').value == 'odesa' ) {
            document.querySelector('.result__city span').textContent = 'Одеса';
        } else if ( document.querySelector('#city').value == 'kharkiv' ) {
            document.querySelector('.result__city span').textContent = 'Харків';
        } else if ( document.querySelector('#city').value == 'dnipro' ) {
            document.querySelector('.result__city span').textContent = 'Дніпро';
        } 
        // Адреса
        document.querySelector('.result__address span').textContent = document.querySelector('#address').value;
        // Мови
        let languages = '';
        if ( document.querySelector('#langUa').checked ) {
            languages += 'Українська '
        }
        if ( document.querySelector('#langPl').checked ) {
            languages += 'Польска '
        }
        if ( document.querySelector('#langEn').checked ) {
            languages += 'Англійська '
        }
        if ( document.querySelector('#langGr').checked ) {
            languages += 'Німецька'
        }
        document.querySelector('.result__language span').textContent = languages;

    } else if ( document.querySelector('#name').value.length <= 2 ) {
        console.log('LITTLE NAME');
        document.querySelector('#name').style.border = '2px solid red';
        document.querySelector('#surname').style.border = '1px solid black';
        document.querySelector('#address').style.border = '1px solid black';
        document.querySelector('#birth').style.border = '1px solid black';
    } else if ( document.querySelector('#surname').value.length <= 2 ) {
        document.querySelector('#surname').style.border = '2px solid red';
        document.querySelector('#name').style.border = '1px solid black';
        document.querySelector('#address').style.border = '1px solid black';
        document.querySelector('#birth').style.border = '1px solid black';
    } else if ( document.querySelector('#birth').value.length != 10 ) {
        document.querySelector('#address').style.border = '1px solid black';
        document.querySelector('#name').style.border = '1px solid black';
        document.querySelector('#surname').style.border = '1px solid black';
        document.querySelector('#birth').style.border = '2px solid red';
    } else if ( document.querySelector('#address').value.length <= 5 ) {
        document.querySelector('#address').style.border = '2px solid red';
        document.querySelector('#name').style.border = '1px solid black';
        document.querySelector('#surname').style.border = '1px solid black';
        document.querySelector('#birth').style.border = '1px solid black';
    } 

})