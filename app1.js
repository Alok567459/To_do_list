let button=document.getElementById('button')
let input=document.getElementById('input')
let mood=document.querySelector(".con2")
let sad_quotes=document.querySelector(".sad_quotes")
let chill_quotes=document.querySelector(".chill_quotes")
let focused_quotes=document.querySelector(".focused_quotes")

function Select(){ 
    if(input.value.trim()===""){
        alert("Please enter your mood:");
    }
    else if(input.value===("😀")){
          mood.style.display="block";
          input.value="";
    }
    else if(input.value==="😞"){
        sad_quotes.style.display="block";
        input.value="";
    }
    else if(input.value==="😙"){
        chill_quotes.style.display="block";
        input.value="";
    }
    else if(input.value==="🤨"){
        focused_quotes.style.display="block";
        input.value="";
    }
}

button.addEventListener('click',Select);
document.addEventListener('keypress',function(event){
    if(event.key==="Enter"){
        button.click();
    }
})
