console.log("this is my calculator.This can do all the basic arithmetic operations.");
let screen=document.getElementById('screen');
let screenValue="";
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        
        if(buttonText=="X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="Del"){
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value=eval(screenValue);
            

        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })
}

