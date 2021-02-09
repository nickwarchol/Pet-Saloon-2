function display(){
    //clear the field
    document.getElementById("pets").innerHTML="";

    //travel the pets array
    for(var i=0;i<saloon.pets.length;i++){

    //create a template
        var tmp=`<div class="pet"> 
        <h3>${saloon.pets[i].name}</h3>
        <p>${saloon.pets[i].age}</p>
        <p>${saloon.pets[i].breed}</p>
        <p>${saloon.pets[i].gender}</p>
        <p>${saloon.pets[i].service}
        <p>${saloon.pets[i].owner}</p>
        <p>${saloon.pets[i].phone}</p>
        
        </div>`
     //concatenate all the info
     document.getElementById("pets").innerHTML
    +=tmp;
    
    }

    

}

//use the funtion
display();
