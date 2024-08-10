

const right=document.querySelector(".right");
alert("Page has loaded");

function change(){

    const list=document.querySelectorAll('input[type="number"]');
    let principalamt=list[0];
    let term=list[1];
    let rate=list[2];
    
    
    principalamt.addEventListener('change',(ele)=>{
    principalamt.value=ele.target.value;
    });
    term.addEventListener('change',(ele)=>{
    term.value=ele.target.value;
    });
    rate.addEventListener('change',(ele)=>{
    rate.value=ele.target.value;
    });
    if(principalamt.value=="")
    {
        const ptag=document.querySelector(".g");
        
        const ttag=document.querySelector("input[name='amount']");
        ptag.style.backgroundColor="red";
        ttag.style.border="1px solid red";

        const element=document.querySelector('.values');
        const parent1=document.querySelector('.left');
        const create=document.createElement('p');
        const isthere=document.querySelector('.jk');
        if (isthere)
        {}
        else
        {
        create.setAttribute('class','small-text jk');
        create.textContent="This field is required";
        parent1.insertBefore(create,element);
        }
    }
    if(term.value=="")
        {
            const ptag1=document.querySelector(".i");
            
            const ttag1=document.querySelector("input[name='term']");
            ptag1.style.backgroundColor="red";
            ttag1.style.border="1px solid red";
    
            const element1=document.querySelector('.par');
            const parent1=document.querySelector('.left');
            const create1=document.createElement('p');
            const isthere1=document.querySelector('.jk1');
            if (isthere1)
            {}
            else
            {
            create1.setAttribute('class','small-text jk jk1');
            create1.textContent="This field is required";
            parent1.insertBefore(create1,element1);
            }
        }
    if (rate.value=="")
    {
        const ptag2=document.querySelector(".j");
            
            const ttag2=document.querySelector("input[name='rate']");
            ptag2.style.backgroundColor="red";
            ttag2.style.border="1px solid red";
    
            const element2=document.querySelector('.par');
            const parent2=document.querySelector('.left');
            const create2=document.createElement('p');
            const isthere2=document.querySelector('.jk3');
            if (isthere2)
            {}
            else
            {
            create2.setAttribute('class','small-text jk jk3');
            create2.textContent="This field is required";
            parent2.insertBefore(create2,element2);
            }
    }
       
    let result=0;
    let termamt=0;
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption)
    {   
        const totalmonths=term.value*12;
            
            const rate1 = rate.value / 100 / 12;
            let exp=Math.pow(1+rate1,totalmonths);
            let val=principalamt.value*(rate1*exp)/(exp-1);
            result=val.toFixed(2);
            termamt=(totalmonths*val).toFixed(2);
        if (selectedOption.value=='interest')
        {
            result=(termamt-principalamt.value)/12;
            result=result.toFixed(2);
            termamt=termamt-principalamt.value;
            termamt=termamt.toFixed(2);
        }
        
    }
    else
    {
        alert('Select a Mortgage type');
    }
    






right.innerHTML="";
right.innerHTML=" <h4 class='secres'>Your results</h4>";
let element=document.createElement('p');
element.setAttribute('class','small-text');
element.textContent=" Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.";
right.appendChild(element);

element=document.createElement('div');
element.setAttribute('class','right-box');

let element3=document.createElement('div');
element3.setAttribute('class','top-right-part');

let element2=document.createElement('p');
element2.setAttribute('class','small-text');
element2.textContent=" Your monthly repayments";
element3.append(element2);

let element4=document.createElement('h1');
element4.textContent="€"+result;
element3.append(element4);

element.append(element3);
right.appendChild(element);

element3=document.createElement('div');
element3.setAttribute('class','bottom-right-part');

let element6=document.createElement('div');
element6.setAttribute('class','small-text just');
element6.textContent="Total you'll repay over the term";
element3.append(element6);

let element5=document.createElement('h4');
element5.textContent="€"+termamt;

element3.append(element5);
element.appendChild(element3);

}
const cop=document.querySelector('.align');
cop.addEventListener('click',function clear(){
    right.innerHTML="";
    right.innerHTML="<img src='./assets/images/illustration-empty.svg'/>";
    let element=document.createElement('h4');
    element.setAttribute('class','result');
    element.textContent="Results shown here";
    right.appendChild(element);
    element=document.createElement('p');
    element.setAttribute('class','small-text');
    element.textContent="Complete the form and click “calculate repayments” to see what your monthly repayments would be.";
    right.appendChild(element);
    const somele4=document.querySelector('input[name="amount"]');
    const somele5=document.querySelector('input[name="term"]');
    const somele6=document.querySelector('input[name="rate"]');
    somele4.value="";
    somele5.value="";
    somele6.value="";
    somele4.style.border="0.7px solid black";
const somme4=document.querySelector('.g');
somme4.style.backgroundColor='hsl(202, 86%, 94%)';
somme4.style.color='hsl(201, 74%, 29%)';
const deltext4=document.querySelector('.jk');
if (deltext4.parentNode)
{
deltext4.parentNode.removeChild(deltext4);
}
somele5.style.border="0.7px solid black";
const somme1=document.querySelector('.i');
somme1.style.backgroundColor='hsl(202, 86%, 94%)';
somme1.style.color='hsl(201, 74%, 29%)';
const deltext1=document.querySelector('.jk1');
if (deltext1.parentNode)
{
deltext1.parentNode.removeChild(deltext1);
}
    
somele6.style.border="0.7px solid black";
const somme2=document.querySelector('.j');
somme2.style.backgroundColor='hsl(202, 86%, 94%)';
somme2.style.color='hsl(201, 74%, 29%)';
const deltext2=document.querySelector('.jk3');
if (deltext2.parentNode)
{
deltext2.parentNode.removeChild(deltext2);
}


})
const somele=document.querySelector('input[name="amount"]');
somele.addEventListener('change',(ele)=>{
ele.target.style.border="0.7px solid black";
const somme=document.querySelector('.g');
somme.style.backgroundColor='hsl(202, 86%, 94%)';
somme.style.color='hsl(201, 74%, 29%)';
const deltext=document.querySelector('.jk');
if (deltext.parentNode)
{
deltext.parentNode.removeChild(deltext);
}

});
const somele1=document.querySelector('input[name="term"]');
somele1.addEventListener('change',(ele)=>{
ele.target.style.border="0.7px solid black";
const somme1=document.querySelector('.i');
somme1.style.backgroundColor='hsl(202, 86%, 94%)';
somme1.style.color='hsl(201, 74%, 29%)';
const deltext1=document.querySelector('.jk1');
if (deltext1.parentNode)
{
deltext1.parentNode.removeChild(deltext1);
}

});
const somele2=document.querySelector('input[name="rate"]');
somele2.addEventListener('change',(ele)=>{
ele.target.style.border="0.7px solid black";
const somme2=document.querySelector('.j');
somme2.style.backgroundColor='hsl(202, 86%, 94%)';
somme2.style.color='hsl(201, 74%, 29%)';
const deltext2=document.querySelector('.jk3');
if (deltext2.parentNode)
{
deltext2.parentNode.removeChild(deltext2);
}

});



