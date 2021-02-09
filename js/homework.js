
var name1=("Roxy");
var name2=("Winston");
var name3=("Lyla");
var name4=("Cheesecake");
var name5=("Luna");
var name6=("Shadow");
var name7=("Lyra");

document.write(`<p> Total Pets Registered: </p>
<p>${name1}</p>
<p> ${name2} </p>
<p> ${name3}</p>
<p>${name4}</p>
<p> ${name5} </p>
<p> ${name6}</p>
<p> ${name7}</p>`);

const saloon={
    name:"Pet Names",
    
    pets:[
        {name:"Roxy,",age:"11 Weeks",breed:"Hound",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Winston,",age:"11 Weeks",breed:"Irish Setter",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Lyla,",age:"11 Weeks",breed:"Husky",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Cheesecake,",age:"10",breed:"Hound,Beagle",gender:"Female",owner:"Yvonne",contact:"813-399-0882"},
        {name:"Luna,",age:"10",breed:"Hound,Beagle",gender:"Female",owner:"Yvonne",contact:"813-399-0882"},
        {name:"Shadow,",age:"11 Weeks",breed:"Lab",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Lyra,",age:"11 Weeks",breed:"Siberian Husky",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
    ]
}
for (var i=0;i<7;i++){
    console.log(saloon.pets[i]);
}



