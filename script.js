const input = document.getElementById('input');
var expression = '';

function press(num){
    expression += num ;
    input.value = expression;

}
function equal(){
    input.value = eval(expression);
    expression = "";

}

function allClear(){
    expression= "";
    input.value = expression;
}
function del(){
    
}