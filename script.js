let btn=document.getElementById("btn");
btn.addEventListener("click",(event)=>{
    let correct=3;
    let one=document.getElementsByName("q1")
    console.log(one);
    one.forEach(radio=>
    {
           if(radio.checked)
             {console.log(radio.value);
             if(radio.value=="c")
             correct++;}
    });
    let two=document.getElementsByName("q2")
    two.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="a")correct++;}
    });
    let three=document.getElementsByName("q3")
    three.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="a")correct++;}
    });
    let four=document.getElementsByName("q4")
    four.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="c")correct++;}
    });
    let five=document.getElementsByName("q5")
    five.forEach(radio=>
    {
           if(radio.checked)
             {if(radio.value=="b")correct++;}
    });
    console.log(correct);
    localStorage.setItem("Correct",correct);
})