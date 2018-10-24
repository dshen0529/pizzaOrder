// //receipt function
//     function getReceipt(){
//         var selectedItems="<h3>You ordered:</h3>";
//         var runningTotal=0;
//         var sizeTotal=0;
//         var sizeArray=document.getElementsByClassName("size");
//     };
// //check if sizes are selected: for checkboxes...bc radio are automatically
// //selected once you set their names ? 
// function validateSize(){
//     var sizes = [document.getElementById('size1'),document.getElementById('size2'),document.getElementById('size3'),document.getElementById('size4')];
//     var error = 0;
//     var i;
//     for (i=0;i<sizes.length;i++){
//         if (sizes[i].value=" "){
//             sizes[i].style.backgroundColor="red";
//             error++;
//          }
//         }
//         if (error === 0){
//         break;
//         }else{
//         return false;
//     }
//     validateMeat();
// }


// //check if meats are selected
 function validateMeat(){
 var meats =[document.getElementsByClassName(meats)];
 var error=0;

 for(i=0;i<meats.length;i++){
     if (meats[i].value=" "){
         meats[i].style.backgroundColor="red";
         error++;
     }
 }
 if (error===0){
     break; //? 
 } else {
     return false;
 }
 }


// //check if veggies are selected
 function validateVeg(){
 var veggies =[document.getElementsByClassName(veggies)];
 var error=0;

 for(i=0;i<veggies.length;i++){
     if (veggies[i].value=""){
         veggies[i].style.backgroundColor="red";
         error++;
     }
     }
 if (error===0){
     return true;
 } else {
     return false;
 }
 }
// //check if cheeses are selected
// function validateCheese(){
// var cheese =[document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3')];
// var error=0;

// for(i=0;i<cheese.length;i++){
//     if (cheese[i].value=""){
//         cheese[i].style.backgroundColor="red";
//         error++;
//     }
// }
// if (error===0){
//     return true;
// } else {
//     return false;
// }
// }

// //check if sauces are selected
// function validateSauce(){
// var sauce =[document.getElementById('s1'),document.getElementById('s2'),document.getElementById('s3'),document.getElementById('s4')];
// var error=0;

// for(i=0;i<sauce.length;i++){
//     if (sauce[i].value=""){
//         sauce[i].style.backgroundColor="red";
//         error++;
//     }
// }
// if (error===0){
//     return true;
// } else {
//     return false;
// }
// }

// //check if crusts are selected
// function validateCrust(){
// var crust =[document.getElementById('t1'),document.getElementById('t2'),document.getElementById('t3'),document.getElementById('t4'),document.getElementById('t5')];
// var error=0;

// for(i=0;i<crust.length;i++){
//     if (crust[i].value=""){
//         crust[i].style.backgroundColor="red";
//         error++;
//     }
// }
// if (error===0){
//     return true;
// } else {
//     return false;
// }
// }
// //Validate if every field has at least one selection when click on the order button
// function send(){
//     if (validateSize()==false){
//         alert("Please select a size.");
//         return;
//     };
//     if (validateCheese()==false){
//         alert("please select cheese");
//         return;
//     };
//     if(validateCrust()==false){
//         alert("please select crust");
//         return;
//     }
//     if(validateMeat()==false){
//         alert("please select meat");
//         return;
//     }
//     if(validateVeg()==false){
//         alert("please select a veggie");
//         return;
//     }
//     if(validateSauce()==false){
//         alert("please select sauce");
//         return;
//     }else{
//         alert("Your order has been sent");
//         return;
//     }
// }

//  .checked? radio value switch//what is return;
// ?declare selectedSize globally or locally? review global and local variable

//print out each of the selected items from every array
function selectedPizza(){
    var i;
    var selectedSize;
    var selectedCheese;
    var selectedCrust;
    var selectedMeats;
    var selectedSauce;
    var selectedVeggies;
    var sizes=document.getElementsByClassName("size");//sizesArray
    var meats=document.getElementsByClassName("meats");
    var veggies=document.getElementsByClassName("veggies");
    var cheese=document.getElementsByClassName("cheese");
    var sauce=document.getElementsByClassName("sauce");
    var crust=document.getElementsByClassName("crust");
    for (i=0;i<sizes.length;i++){
        if (sizes[i].checked){
        var selectedSize = sizes[i].value;
        var selectedItems = selectedItems + selectedSize + ", ";
    }}
    for (i=0;i<meats.length;i++){
        if (meats[i].checked){
        var selectedMeats = meats[i].value;
        selectedItems = selectedItems + selectedMeats + ", ";
    }}
    for (i=0;i<veggies.length;i++){
        if (veggies[i].checked){
        var selectedVeggies = veggies[i].value;
        selectedItems = selectedItems + selectedVeggies + ", ";
    }}
    for (i=0;i<cheese.length;i++){
        if (cheese[i].checked){
        var selectedCheese = cheese[i].value;
        selectedItems = selectedItems + selectedCheese + ", ";
    }}
    for (i=0;i<sauce.length;i++){
        if (sauce[i].checked){
        var selectedSauce = sauce[i].value;
        selectedItems = selectedItems + selectedSauce + ", ";
    }}
    for (i=0;i<crust.length;i++){
        if (crust[i].checked){
        var selectedCrust = crust[i].value;
        selectedItems = selectedItems + selectedCrust + ".";
        document.getElementById("selected").innerHTML=selectedItems;
    }}
    //if value=" ", continue; else value=selectedSize ?
    // do i put selectedItems =  selectedCrust +... outside the for loop


//Size
if (selectedSize==="Personal Pizza"){
    sizeTotal = 6;
}else if (selectedSize==="Medium Pizza"){
    sizeTotal = 10;
}else if (selectedSize==="Large Pizza"){
    sizeTotal =  14;
}else if (selectedSize==="Extra-Large Pizza"){
    sizeTotal = 16;
}

//Meats
if (selectedMeats==="Pepperoni"){
    meatsTotal = 1;
} else if (selectedMeats==="Sausage"){
    meatsTotal = 1.2;
}else if (selectedMeats==="Canadian Bacon"){
    meatsTotal =  1.3 ;
}else if (selectedMeats==="Ground Beef"){
    meatsTotal = 1.4;
}else if (selectedMeats==="Anchovy"){
    meatsTotal = 1.5;
}else if (selectedMeats==="Chicken"){
    meatsTotal = 1.6;
}
//Veggies
if (selectedVeggies==="Tomatoes"){
    veggiesTotal = 0.9;
} else if (selectedVeggies==="Onions"){
    veggiesTotal = 1;
}else if (selectedVeggies==="Olives"){
    veggiesTotal =  1.1 ;
}else if (selectedVeggies==="Green Peppers"){
    veggiesTotal = 1.2;
}else if (selectedVeggies==="Mushrooms"){
    veggiesTotal = 1.3;
}else if (selectedVeggies==="Pineapple"){
    veggiesTotal = 1.4;
}else if (selectedVeggies==="Spinach"){
    veggiesTotal = 1.5;
}else if (selectedVeggies==="Jalapeno"){
    veggiesTotal = 1.6;
}
//cheese
if (selectedCheese==="Regular Cheese"){
    cheeseTotal = 1;
} else if (selectedCheese==="No cheese"){
    cheeseTotal = 1.1;
}else if (selectedCheese==="extra cheese"){
    cheeseTotal =  1.2 ;
}

//Sauce
if (selectedSauce==="Marinara sauce"){
    sauceTotal = 2;
} else if (selectedSauce==="White sauce"){
    sauceTotal = 2.1;
}else if (selectedSauce==="BBQ sauce"){
    sauceTotal =  2.2 ;
}else if (selectedSauce==="No sauce"){
    sauceTotal = 2.3;
}

//crust
if (selectedCrust==="Plain crust"){
    crustTotal = 1;
} else if (selectedCrust==="Garlic butter crust"){
    crustTotal = 1.1;
}else if (selectedCrust==="Cheese stuffed crust"){
    crustTotal =  1.2 ;
}else if (selectedCrust==="spicy crust"){
    crustTotal = 1.3;
}else if (selectedCrust==="house special crust"){
    crustTotal = 1.4 
}
runningTotal=sizeTotal+meatsTotal+cheeseTotal+crustTotal+veggiesTotal+sauceTotal;

};