const saloon={
    name:"Lyra",
    address:{
        street: "Blvd 63",
        number: "1"
    },
    hours:{
        open:"8:00 am",
        closes: "5:00 pm"
    },
    pets:[]
}
/*
        name, age, breed, gender, service, owners name, contact phone
*/
document.getElementById("footer-text").innerHTML=`
    <p> ${saloon.name} </p>
    <p> ${saloon.address.street}, ${saloon.address.number} </p>
    <p> It's open from ${saloon.hours.open} to ${saloon.hours.closes}</p>
`;


// Create the pet class
class Pet{
    constructor(name,age,breed,gender,service,owner,phone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}

// Create pets using the constructor

var scooby=new Pet("Scooby", 50, "Husky", "Male", "Full Service", "Owner","555-555-5555");
var lyra=new Pet("Lyra", 2,"Husky", "Male", "Rinse", "Nick","813-399-0882");
var speedy=new Pet("Speedy", 3,"Dane", "Male", "Trimming", "Carl","555-555-5555");

//console.log(scooby,lyra,speedy);
// push the pets into the array
//saloon.pets=[scooby,lyra,speedy];
saloon.pets.push(scooby);
saloon.pets.push(lyra);
saloon.pets.push(speedy);
console.log(saloon.pets);

var txtName=document.getElementById("petNameTxt");
    var txtAge=document.getElementById("petAgeTxt");
    var txtBreed=document.getElementById("petBreedTxt");
    var txtGender=document.getElementById("petGenderTxt");
    var txtService=document.getElementById("petServiceTxt");
    var txtOwner=document.getElementById("ownerNameTxt");
    var txtPhone=document.getElementById("ownerPhoneTxt");

    function clear(){
        txtName.value="";
        txtAge.value="";
        txtBreed.value="";
        txtGender.value="";
        txtService.value="";
        txtOwner.value="";
        txtPhone.value="";
    }
    
// Create the function register
function register(){
    //get the info from the inputs
        //create a generic constructor
    var thePet=new Pet(txtName.value, txtAge.value, txtBreed.value,txtGender.value,txtService.value,txtOwner.value, txtPhone.value);
    console.log(thePet);
    //push the pet into the array
    saloon.pets.push(thePet);
    //display function
    display();
    clear();
    
}


    