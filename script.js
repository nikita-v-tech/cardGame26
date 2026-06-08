//ищем все карточки 
const element1 = document.querySelectorAll('.card');
//перебираем карточки
element1.forEach(function(card) {
  //  вешаем клик 
  card.addEventListener('click', () =>{
  //снова перебираем карточки 
    element1.forEach(function(card2){
      //убираем у всех карточек свойства
      card2.classList.remove('active')
    })
    //добавляем свойства только по клику
    card.classList.add('active');
});
});