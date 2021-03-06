//#region Random
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.Integer = function (Min, Max) {
        return parseInt(String(Math.random() * (Max - Min) + Min));
    };
    Random.Element = function (array) {
        return array[Random.Integer(0, array.length)];
    };
    return Random;
}());
//#endregion
//#region Files
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.Save = function (Key, Value) {
        window.localStorage.setItem(this._Path + Key, Value);
    };
    Files.Load = function (Key, Value) {
        if (window.localStorage.getItem(this._Path + Key) === null) {
            return Value;
        }
        else {
            var Value_1 = localStorage.getItem(this._Path + Key);
            //Number Check
            if (!isNaN(Number(Value_1))) {
                return Number(Value_1);
            }
            //Boolean Check
            else if (Value_1 === "true" || Value_1 === "false") {
                return (Value_1 === "true");
            }
            //String Check
            else {
                return Value_1;
            }
        }
    };
    Files._Path = "FiveEelements.LocalKey.";
    return Files;
}());
//#endregion
//#region Console
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.Write = function (Message) {
        document.getElementById("TextConsole").textContent = Message;
        document.getElementById("DivConsole").style.visibility = "visible";
        document.getElementById("DivConsole").style.transform = "translateY(0%)";
        document.getElementById("DivConsole").style.transition = Interface.SlideTime + "s";
        setTimeout(function () {
            document.getElementById("DivConsole").style.transform = "translateY(-100%)";
            document.getElementById("DivConsole").style.transition = Interface.SlideTime + "s";
            document.getElementById("DivConsole").style.visibility = "hidden";
        }, Interface.ConsoleTime * 1000);
    };
    return Console;
}());
//#endregion
