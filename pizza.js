//receipt function
    function getReceipt(){
        var text1="<h3>You ordered:</h3>";
        var runningTotal=0;
        var sizeTotal=0;
        var sizeArray=document.getElementsByClassName("size");
    };
//check if sizes are selected
function validateSize(){
    var sizes = [document.getElementById('size1'),document.getElementById('size2'),document.getElementById('size3'),document.getElementById('size4')];
    var error = 0;

    for (i=0;i<sizes.length;i++){
        if (sizes[i].value=" "){
            sizes[i].style.backgroundColor="red";
            error++;
         }
        }
        if (error === 0){
        return true;
        }else{
        return false;
    }
}


//check if meats are selected
function validateMeat(){
var meats =[document.getElementById('Pep'),document.getElementById('Sau'),document.getElementById('Can'),document.getElementById('Gro'),document.getElementById('Anc'),document.getElementById('Chi')];
var error=0;

for(i=0;i<meats.length;i++){
    if (meats[i].value=""){
        meats[i].style.backgroundColor="red";
        error++;
    }
}
if (error===0){
    return true;
} else {
    return false;
}
}


//check if veggies are selected
function validateVeg(){
var veggies =[document.getElementById('tom'),document.getElementById('oni'),document.getElementById('oli'),document.getElementById('gre'),document.getElementById('mus'),document.getElementById('pin'),document.getElementById('spi'),document.getElementById('jal')];
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
//check if cheeses are selected
function validateCheese(){
var cheese =[document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3')];
var error=0;

for(i=0;i<cheese.length;i++){
    if (cheese[i].value=""){
        cheese[i].style.backgroundColor="red";
        error++;
    }
}
if (error===0){
    return true;
} else {
    return false;
}
}

//check if sauces are selected
function validateSauce(){
var sauce =[document.getElementById('s1'),document.getElementById('s2'),document.getElementById('s3'),document.getElementById('s4')];
var error=0;

for(i=0;i<sauce.length;i++){
    if (sauce[i].value=""){
        sauce[i].style.backgroundColor="red";
        error++;
    }
}
if (error===0){
    return true;
} else {
    return false;
}
}

//check if crusts are selected
function validateCrust(){
var crust =[document.getElementById('t1'),document.getElementById('t2'),document.getElementById('t3'),document.getElementById('t4'),document.getElementById('t5')];
var error=0;

for(i=0;i<crust.length;i++){
    if (crust[i].value=""){
        crust[i].style.backgroundColor="red";
        error++;
    }
}
if (error===0){
    return true;
} else {
    return false;
}
}
//Validate if every field has at least one selection when click on the order button
function send(){
    if (validateSize()==false){
        alert("Please select a size.");
        return;
    };
    if (validateCheese()==false){
        alert("please select cheese");
        return;
    };
    if(validateCrust()==false){
        alert("please select crust");
        return;
    }
    if(validateMeat()==false){
        alert("please select meat");
        return;
    }
    if(validateVeg()==false){
        alert("please select a veggie");
        return;
    }
    if(validateSauce()==false){
        alert("please select sauce");
        return;
    }else{
        alert("Your order has been sent");
        return;
    }
}

//  .checked? radio value switch//what is return;