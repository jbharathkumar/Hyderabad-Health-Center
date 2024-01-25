document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Handle form submission and add patient to the list
    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('patientAge').value;
    const patientphonenumber = document.getElementById('patient phone number').value;
    const patientaddress = document.getElementById('patientaddress').value;




    const patientList = document.getElementById('patientListItems');
    const listItem = document.createElement('li');
    listItem.textContent = `${patientName}, ${patientAge} years old`;
    patientList.appendChild(listItem);
});

let menubtn =document.querySelector('#menu_bars');
let mynav =document.querySelector('.navbar');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
