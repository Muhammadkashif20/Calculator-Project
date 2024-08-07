// Programming For Calculator Project:-
let disValue=document.getElementById('dis-Value')
function valueGet(value) {
 disValue.value+=value
}
function delAll() {
disValue.value=''
}
function delsequence() {
    if(disValue.value){
        disValue.value=disValue.value.slice(0,-1)
    }
}
function valueResult() {
    try{
        if(disValue.value){
            disValue.value=eval(disValue.value)
        }
        else{
            disValue.value='Syntax Error'
        }
    }catch{
        disValue.value = 'Syntax Error'
    }
}
