import React from 'react';

const Portfolio = () => {




  // function camelize(str) {
  //   return str
  //     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
  //     .map(
  //       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
  //       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
  //       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  //     )
  //     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  // }

  // let links = document.querySelectorAll('a');
  //
  // for (let link of links) {
  //   let href = link.getAttribute('href');
  //   if (!href) continue; // нет атрибута
  //
  //   if (!href.includes('://')) continue; // нет протокола
  //
  //   if (href.startsWith('http://internal.com')) continue; // внутренняя
  //
  //   link.style.color = 'orange';
  // }
  // найти все ссылки, атрибут href у которых содержит ://
// и при этом href не начинается с http://internal.com
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);
//
// links.forEach(link => link.style.color = 'orange');



  // let hamster = {
  //   stomach: [],
  //
  //   eat(food) {
  //     this.stomach.push(food);
  //   }
  // };
  //
  // let speedy = {
  //   stomach: [],
  //   __proto__: hamster
  // };
  //
  // let lazy = {
  //   stomach: [],
  //   __proto__: hamster
  // };
  //
  // // Этот хомяк нашёл еду
  // speedy.eat("apple");
  // alert( speedy.stomach ); // apple
  //
  // // У этого хомяка тоже есть еда. Почему? Исправьте
  // alert( lazy.stomach ); // apple

  // let head = {
  //   glasses: 1
  // };
  //
  // let table = {
  //   pen: 3
  // };
  //
  // let bed = {
  //   sheet: 1,
  //   pillow: 2
  // };
  //
  // let pockets = {
  //   money: 2000
  // };
  //
  // pockets.__proto__ = bed
  // bed.__proto__ = table
  // table.__proto__ = head
  //
  // alert(bed.glasses)

  // // методы animal
  // let animal = {
  //   walk() {
  //     if (!this.isSleeping) {
  //       alert(`I walk`);
  //     }
  //   },
  //   sleep() {
  //     this.isSleeping = true;
  //   }
  // };
  //
  // let rabbit = {
  //   name: "White Rabbit",
  //   __proto__: animal
  // };
  //
  // // модифицирует rabbit.isSleeping
  // rabbit.sleep();
  //
  // alert(rabbit.isSleeping); // true
  // alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

  // var animal = {
  //   eats: true
  // };
  //
  // var rabbit = {
  //   jumps: true,
  //   __proto__: animal
  // };
  //
  // for (var key in rabbit) {
  //   if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
  //   alert( key + " = " + rabbit[key] ); // выводит только "jumps"
  // }

  // var animal = {
  //   eats: true
  // };
  //
  // var rabbit = {
  //   jumps: true,
  //   __proto__: animal
  // };
  //
  // for (var key in rabbit) {
  //   alert( key + " = " + rabbit[key] ); // выводит и "eats" и "jumps"
  // }

// function sumInput( ) {
//   let numbers  = [];
//   let value  =  prompt( "Введите число", 0);
//     alert (arr[0]);
// return arr;
// }
// sumInput();


//   var a = [0, 1, 2, 3, 4, 5, 6];
// // Удалим три средних элемента
// a.splice(-1, 0 , 9, 9, 9);
// prompt (a);  // 0,1,5,6
// // Добавим два элемена перед последним
// a.splice(-1, 0, 7, 8);
// alert(a);  // 0,1,5,7,8,6
// // Заменим второй и третий элементы на три строки
// a.splice(1, 2, 'a', 'b', 'c');
// alert(a);  // 0,a,b,c,7,8,6

// let styles = [' Jazz', " Blues"];
// alert( styles );
// styles.push(' RockAndRoll');
// alert( styles );
// styles[Math.floor((styles.length - 1)/2)]  = 'Classics' ;
// alert( styles );
// alert( styles.shift());
// styles.unshift('Rap','Raggy');
// alert( styles );


//
// alert ( styles );
// alert ( arr );

//   // разные типы значений
// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
//
// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( arr[1].name ); // Джон
//
// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет

//   // до вызова функции
//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//
//   multiplyNumeric(menu);
//
//   function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
//
// alert( menu.width )
// alert( menu.height )

  // let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130
  // };
  // let  sum = 0;
  // function multiplyNumeric(obj) {
  //   for (let key in obj) {
  //     sum += obj[key];
  //   }
  // }
  // multiplyNumeric(salaries);
  // alert( sum );
  // alert( salaries.John );

//   function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }
//     let schedule  = {};
// let kiss = 'isEmpty(schedule)';
// alert( kiss );
// schedule ['poops']=87
// alert( isEmpty.schedule.key );
  //
  // alert( isEmpty(obj) ); // true
  //
  // alert( obj.poops ); // false
  //
  // function MessageThread() {
  // const [message, setMessage] = useState('');
  // const latestMessage = useRef('');
  //
  // const showMessage = () => {
  //   alert('You said: ' + latestMessage.current);
  // };
  //
  // const handleSendClick = () => {
  //   setTimeout(showMessage, 3000);
  // };
  //
  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  //   latestMessage.current = e.target.value;
  // };

// Объявляем новую переменную состояния, которую назовём "count"
// код находит элемент с пометкой и показывает запрошенную информацию

const [count, setCount] = React.useState(9);
const [countr, setCountr] = React.useState(9);

return (
  // пометить div, чтобы показать здесь поле "name"

  <div>
    <p>Вы кликнули {count} раз</p>
    <button onClick={() => setCount(count + 1)}>
      Кликни меня!
    </button>
    <p>Вы кликнули {countr} раз</p>
    <button onClick={() => setCountr(countr + 1)}>
      Кликни меня!
    </button>
  </div>
);

}

export default Portfolio;
