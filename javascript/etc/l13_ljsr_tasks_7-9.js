// 7.  Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
//
//     Приватное свойство food хранит массив еды.
//     Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
//     Если холодильник выключен, то добавить еду нельзя, будет ошибка.
//     Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
//     Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
//
// 8.  Добавьте в холодильник методы:
//
//     Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
//     Публичный метод removeFood(item), который удаляет еду item из холодильника.
//
//9.   Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];

    this.addFood = function () {
        if (!this._enabled) {
            console.log('ошибка, холодильник выключен');
            return;
        }

        if ((food.length + arguments.length) > (this._power / 100)) {
            console.log('ошибка, слишком много еды');
            return;
        }

        [].forEach.call(arguments, function(item){
            food.push(item);
        });
    };

    this.getFood = function () {
        return food.slice();
    };

    this.filterFood = function (func) {
        return food.filter(func);
    };

    this.removeFood = function (item) {
        var idx = food.indexOf(item);
        if (idx !== -1) {
            food.splice(idx, 1);
        }
    };

    var disabled = this.disable;

    this.disable = function () {
        if (!food.length) {
            console.log('выключаюсь...');
            disabled();
        } else console.log('ошибка, в холодильнике есть еда');
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
//fridge.removeFood("кус-кус");

fridge.disable(); // ошибка, в холодильнике есть еда