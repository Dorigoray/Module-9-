window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
    document.getElementById('jobsOutput').innerText = initPerson.job;

};

document.querySelector('#gnt').addEventListener('click', window.onload);

document.querySelector('#clear').addEventListener('click', function () {
        document.getElementById('surNameOutput').innerText = '';
        document.getElementById('firstNameOutput').innerText = '';
        document.getElementById('middleNameOutput').innerText = '';
        document.getElementById('genderOutput').innerText = '';
        document.getElementById('birthYearOutput').innerText = '';
        document.getElementById('jobsOutput').innerText = '';   
});