/* --- Aici am facut un formular de inregstrare care cere: username,parola,confirmare parola,
       email,varsta,sex,preferinte alimentare
       Campuri obligatorii: username,parola,confirmare parola si email
       Parola trebuie sa contina cel putin: 8 caractere,o majuscula,o miniscula,o cifra si un caracter special
       Daca campurile parola si confirmare parola nu au aceiasi valoare,formularul nu va da submit
   --- */


const form  = document.getElementById('form');
const username = document.getElementById('username')
const password = document.getElementById('password')
const password_confirmation = document.getElementById('password_confirmation');
const email = document.getElementById('email');

/* Aici am facut un slider pentru varsta,cu valoarea presetata la 18 */
var age_slider = document.getElementById('range_varsta');   
var age_output = document.getElementById('valuare_varsta');

age_output.innerHTML = age_slider.value;

age_slider.oninput = function() {
    age_output.innerHTML = this.value;
}
/* ------------------------------------------------------------------------------------------------------------------------------------*/

form.addEventListener('submit',(parametru) => {

    let messages = [];  // Array cu erorile posbilie la submiterea formularului

    let campuri_obligatorii = [username,password,password_confirmation,email]; // array cu campurile obligatorii

    for(i = 0;i < campuri_obligatorii.length;i++) {
        if(campuri_obligatorii[i].value.trim() == null || campuri_obligatorii[i].value.trim() === '') {  // La primul camp obligatoriu gol 
                                                                                                        // array-ul este updatat si for-ul se opreste
            messages.push('CAMP OBLIGATORIU GOL!');
            break;
        }
    }

    if(password.value != password_confirmation.value) {  // Verific daca parola si confirmare parola au aceiasi valoare
        messages.push('PAROLELE NU COINCID!');
        
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/  // parola: minim 8 caractere,o lit mare
                                                                                   // o lit mica,o cifra si un caracter special

    const verifica_parola = regex.test(password.value) // testez daca parola introdusa respecta cerintele de mai sus

    /* Daca verifica_parola == true ==> parola valida
       Altffel ==> parola invalida si apare mesaj cu eroare */

    if(!verifica_parola) {
        messages.push('PAROLA TREBUIE SA CONTINA: o majuscula,o miniscula,o cifra,un caracter special SI SA AIBA CEL PUTIN 8 CARACTERE');
    }

    if(messages.length > 0) {  /* Daca messages contine vreun element ==> exista eroare ==> formularul nu se submite */
        parametru.preventDefault();
        document.getElementById('camp-obligatoriu').style.display = "none";
        error.innerText = messages.shift();  /* Afisez prima eroare gasita */
    }

})
    
    