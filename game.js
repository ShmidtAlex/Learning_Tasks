/*для идентификации юзера, его игрового статуса, статуса при броске кубика, количества ходов, 
 результаов броска кубика*/
const Users = [
  {username: user_1, baseSquareAddress: a1, status: active, winSatus: false, movements: 0, rollResult: null},
  {username: user_2, baseSquareAddress: e5, status: active, winSatus: false, movements: 0, rollResult: null}
]
/*для хранения состояния игрового поля перед игрой/во время игры, 
пока пользователи не бросят кубик для определения кто ходит первый*/
const Board = { status: inactive }
/*для хранения количества попыток*/
const Dise = { diseAttempts: 0}
/*для хранения данных каждой игровой клетки*/
const DefaultSquares = [
  {squareAddress: a1, owner: user_1, status: captured},
  {squareAddress: e5, owner: user_2 status: captured},
  {squareAddress: a2, owner: null, status: freeForCapture }, etc
  {squareAddress: a2, owner: null, status: lockedForCapture }, etc
]
/*бросить кубик*/
rollDise() {
  let diseResult = random number from 1 to 6
  //проходим циклом массив Users и присваиваем случайное число первому свойству rollResult,
  //значение которого еще равно null
  if User[i].rollResult === null 
      User[i].rollResult = diseResult
      Dise.diseAttempts++
  //прерываем цикл после первого присваивания
      break
  //если все свойства != null, функция прерывается
  else break
  // и вызывается метод
    chooseWhoIsFirst()
}
/*определить кто ходит первый через бросок кубика, чтобы поле Board стало активным*/
chooseWhoIsFirst() {
  if Общее количество бросков Dise.diseAttempts < 2 {
    message('бросьте кубик по очереди')
  }
  else if Общее количество бросков Dise.diseAttempts === 2 {
    //доска становится активной и меняется статус игрока, разрешая запись хода и захвата клетки
    if Users[0].rollResult > Users[1].rollResult {
      Users[0].winStatus = true
      Users[1].status = inactive
      Board.status = active
    }
    else if Users[0].rollResult < Users[1].rollResult {
     Users[1].winStatus = true
     Users[0].status = inactive
     Board.status = active
    }
    else {
      message('try again, there is a dead heat')
    }
  }
}
/*определяем адрес клетки*/
function defineAddress() { 
  let squareAddress = this.attribute('data-address')
  return squareAddress
}
/*изменение статуса клеток*/
function changeSquareStatus() {
  циклом пробегаем все squareAddress в массиве DefaultSquares
  если клетка находится по соседству с захваченной, меняем ее status с lockedForCapture на freeForCapture,
}
/*засчитать кликнутую клетку игроку*/
function assignSquareToWinner(defineAddress) {
  //если игровое поле активно
  if Board.status == active {
    //узнаем индекс объекта который кликнули, в массиве DefaultSquares, присваиваем его переменной
    let index = DefaultSquares.indexOf(defineAddress)
    if(defineAddress === )
    //узнаем значение свойства status в объекте с индексом(index)
    if (DefaultSquares[index].status === freeForCapture) {
      //пробегаем циклом по объекту Users чтобы выяснить, 
      //у какого пользователя winStatus true (кто ходит первый после броска кубика) 
      //или status: acive (чья очередь ходить)
      if (Users[i].status === active || Users[i].winStatus === true) {
        //проверяем, не является ли клетка уже принадлежащей данному пользователю
        if(DefaultSquares[index].owner !== Users[i].username){
          DefaultSquares[index].owner = Users[i].username
          DefaultSquares[index].status = captured
          Users[i].status = inactive
          //получаем индекс деактивированного пользователя
          var inactiveUserIndex = Users[i]
          Если элемент массива находится на индексе, отличном от индекса деактивированного
          if (!Users[i].indexOf(inactiveUserIndex)){
            присваиваем ему статус active
            Users[i].status = active
          }
          //и вызываем метод изменяющий статус соседних клеток
          changeSquareStatus()
        }
      }
    } else if DefaultSquares[index].status === captured {
        message('roll dise!')
        //с помощью цикла возвращаем результаты бросков кубика по умолчанию 
        //для повторного использования метода rollDise()
        Users[i].rollResult = null
        //обнуляем результаты количества бросков кубика
        Dise.diseAttempts = 0
        //обнуляем результаты метода chooseWhoIsFirst
        Users[i].winStatus = false
        DefaultSquares[index].status = freeForCapture
        после чего пользователи по очереди нажимают на кнопку "кубик", вызывая метод rollDise()
        а затем заново нажимают на клетку, на которую претендуют снова вызывая метод assignSquareToWinner()
      }
    } else if (DefaultSquares[index].status === captured && )
    countUsersSquare()
  }
}
function countUsersSquares()) {
  пробегаем циклом по массиву DefaultSquares и узнаем
  сколько клеток какому юзеру принадлежит по свойству owner, каждый раз 
  при встрече одного из имен юзера, увеличиваем
  Users[i].movements на 1
  если при проходе циклом оказывается, что каждый игрок исчерпал кол-во ходов
  if Users[i].movements === 7{
    message('Game over')
    и возвращение всех значений на исходные позиции и обнуление числовых значений
    Board.status = inactive и т.п.
  }
}

squares.forEach(square => square.eventListener('click', assignSquareToWinner))
squares.forEach(square => square.eventListener('click', countUsersMovement))
buttonDise.EventListener('click', rollDise)