var myVar = setInterval(showMessage,15000); // Afisez un mesaj odata la 15 secunde

function showMessage() {

    alert('APASA ESCAPE CA SA AFISEZI COMENTARIILE!');
}


window.onkeyup = function(event) {  //  Cand userul apasa escape (cod = 27) dispar sectiuni de pe pagina si apare sectiunea de comentarii
    if(event.keyCode == 27) {
        this.document.getElementById('frame-one').style.display = "none";
        this.document.getElementById('header').style.display = "none";
        this.document.getElementById('frame-two').style.display = "block";
        this.document.getElementById('validarecss').style.display = "none";
        this.clearInterval(this.myVar); // alerta dispare dupa ce apesi escape
        this.myVar = 0;
    }
}

button = document.getElementById('show-comments');
comentarii = document.getElementById('comentarii');

button.addEventListener("click",(event) => {  // La apasarea butonului fac un apel AJAX

    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','http://localhost:3000/comentarii');  /* Am folosit un API gata facut de pe https://jsonplaceholder.typicode.com/ 
                                                                 Datele pe care le afisez pe site le am in db.json */
    myRequest.onload = function() {

    var myData = JSON.parse(myRequest.responseText);  // Transform textul luat de pe server intr-un obiect js

    renderHTML(myData);  // Inserez textul sub forma HTML
};
    myRequest.send();
});

function renderHTML(data) {

    var htmlString = "";

    for(i = 0;i < data.length;i++) {
        htmlString += "<p>" +  data[i].nume + ": " + data[i].mesaj + "<br>" + "</p>";
    }
    comentarii.insertAdjacentHTML('beforeend',htmlString);
    button.style.display = "none";

}

