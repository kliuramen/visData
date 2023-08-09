let personIndex = 0;

console.log(data);

function changePerson()
{
    const nameHeading = document.getElementById("person_name");
    nameHeading.innerHTML = `${data[personIndex].name.first} ${data[personIndex].name.last}`;
    
    const personAge = document.getElementById("age");
    personAge.innerHTML = `${data[personIndex].dob.age} Years Old`;

    const personGender = document.getElementById("gender");
    personGender.innerHTML = `${data[personIndex].gender}`;

    const personContact = document.getElementById("contact");
    personContact.innerHTML = `${data[personIndex].email}`;

    const personImage = document.getElementById("person_image");
    personImage.src = data[personIndex].picture.large;
}

const nextButton = document.getElementById("next_btn");
nextButton.addEventListener("click", ()=> {
    let randomNum = Math.random() * data.length;
    let randInt = Math.floor(randomNum);
    personIndex = randInt;
    
    changePerson();
});

