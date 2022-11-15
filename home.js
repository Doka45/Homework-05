// 1. Таблицу с `id="age-table"`.
let ageTable = document.getElementById('age-table');

// 2. Все элементы `label` внутри этой таблицы (их три).
ageTable.getElementsByTagName('label');

// 3. Первый `td` в этой таблице (со словом «Age»).
ageTable.getElementsByTagName('td');
ageTable.querySelector('td');

// 4. Форму `form` с именем `name="search"`.
document.querySelector('search');
let form = document.getElementsByName('search')[0];

// 5. Первый `input` в этой форме.
form.getElementsByTagName('input')[0];

// 6. Последний `input` в этой форме.
form.getElementsByTagName('input')[length - 1];

//Что выведет этот код?
Body