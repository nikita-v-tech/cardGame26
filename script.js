//ищем все карточки 
const element1 = document.querySelectorAll('.card');
//перебираем карточки
element1.forEach(function(card) {
  //  вешаем клик 
  card.addEventListener('click', () =>{ 
    //добавляем свойства только по клику и отклику
    if (card.classList.contains('active')){
      //убираем класс у карточки
      card.classList.remove('active')
      //снова перебираем карточки
    }else{element1.forEach(function(card2){
      //убираем класс у всех
      card2.classList.remove('active')
    });
    //добавляем класс актив
      card.classList.add('active');
    }
});
});