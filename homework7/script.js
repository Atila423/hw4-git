const name="Андрей";
const village="Заиграево";
const placeOfBirth="Новый Уоян";
const fieldOfActivity="Энергетики";
const birthday= new Date (1987,11,01);
function formatTime(birthday){
    const date=birthday.getDate();
    const month=birthday.getMonth();
    const year=birthday.getFullYear();

    return`${ date}.${month}.${year}.`
}
let birthyear= new Date (birthday.getFullYear());
let now = new Date();
let year = new Date(now.getFullYear());
let mystory =`Привет, меня зовут ${name} и в ${birthday.getDate()}.${birthday.getMonth()}.${birthday.getFullYear()}. году я родился, в поселке ${placeOfBirth}, мне ${year-birthyear} лет. Сейчас я живу в поселке ${village}.Работаю я в сфере ${fieldOfActivity}.`;
console.log(mystory);