/* ---- Acesta este un buton care schimba culoare fundalului --- */


var changeColor_btn = document.getElementById('changeColor-btn');

changeColor_btn.addEventListener('click',() => {

    if(document.getElementById('page').style.backgroundColor == "whitesmoke") {

        document.getElementById('page').style.backgroundColor = "darkkhaki";
    }
    else
    {
        document.getElementById('page').style.backgroundColor = "whitesmoke";
    }
    
})