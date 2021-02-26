// summary date and time
const sum_date_element = document.getElementById("summary-date");

function add_date() {
    const date = document.getElementById("date").value;
    sum_date_element.innerHTML += "Datum: " + date + "<br>";
}

function add_start_time() {
    const start_time = document.getElementById("time-start").value;
    sum_date_element.innerHTML += "Starttid: " + start_time + "<br>";
}

function add_end_time() {
    const end_time = document.getElementById("time-end").value;
    sum_date_element.innerHTML += "Sluttid: " + end_time + "<br>";
}

// summary person
const sum_person_element = document.getElementById("summary-person");

function add_sec_num() {
    const sec_num = document.getElementById("security-number").value;
    sum_person_element.innerHTML += "Personnummer: " + sec_num + "<br>";
}

function add_first_name() {
    const first_name = document.getElementById("first-name").value;
    sum_person_element.innerHTML += "Fornamn: " + first_name + "<br>";
}

function add_surname() {
    const surname = document.getElementById("surname").value;
    sum_person_element.innerHTML += "Efternamn: " + surname + "<br>";
}

function add_adress() {
    const adress = document.getElementById("adress").value;
    sum_person_element.innerHTML += "Adress: " + adress + "<br>";
}

function add_post_num() {
    const post_num = document.getElementById("post-number").value;
    sum_person_element.innerHTML += "Postnummer: " + post_num + "<br>";
}
