let input=document.getElementById('INPUTBOX');
let button=document.querySelector('button');
 

let string="";
let arr=Array.from(button);
arr.forEach(button =>{
    button.addEventListe('click',(e) =>{
    if(e.target.innerHtml=='=')
    {
        string=eval(string);
        input.value=string;
    }
    string+=e.target.innerHtml;
    input.value=string;
    })
})