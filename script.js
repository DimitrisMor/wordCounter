const countButton = document.getElementById('count-button');
const textInput=document.getElementById('text');
const clearButton=document.getElementById('clear-button');
var array;

countButton.addEventListener('click', ()=>{
    countWords(textInput.value);
})    

clearButton.addEventListener('click', clearText);

function countWords(text){
    if (text){
        array=text.split(" ");
        console.log(array.length);
        document.getElementById('result').innerHTML='The text consists of '+array.length+' words.';
    }
    else{
        document.getElementById('result').innerHTML='There exists no text.';
    }    
}

function clearText(text){
    textInput.value="";
    document.getElementById('result').innerHTML='';

}
