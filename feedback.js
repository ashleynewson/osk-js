{
    const display = document.getElementById('display');

    const body = document.body;

    body.addEventListener('keydown', function(e){
        let msg = "Down " + e.key + " " + e.code + " " + e.keyCode + " " + e.charCode;
        display.textContent = msg;
        console.log(msg);
    });
    body.addEventListener('keyup', function(e){
        let msg = "Up " + e.key + " " + e.code + " " + e.keyCode + " " + e.charCode;
        display.textContent = msg;
        console.log(msg);
    });
    body.addEventListener('keypress', function(e){
        let msg = "Press " + e.key + " " + e.code + " " + e.keyCode + " " + e.charCode;
        console.log(msg);
    });
}
