
const timeBeforNY = (new Date(2022, 0 , 1).getTime() - (new Date().getTime())) / 1000;
const daysBeforNY = Math.floor((timeBeforNY / 60 / 60 / 24) % 364);

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
const dayNow = new Date().getDay();


const hoursNow = new Date().getHours();
let partOfDay = 'Я пока не знаю что за окном';
if (hoursNow > 6 &&  hoursNow < 12){
	 partOfDay = 'Доброе утро'
} else if (hoursNow >= 12 && hoursNow < 16) {
	partOfDay = 'Добрый день'
} else if (hoursNow >= 16 && hoursNow < 23) {
	partOfDay = 'Добрый вечер'
} else {
	partOfDay = 'Доброй ночи'
}


console.log(`Добрый ${partOfDay}
Сегодня: ${days[dayNow]}
Текущее время:${new Date().toLocaleTimeString('en')}
До нового года осталось ${daysBeforNY} дней`);


