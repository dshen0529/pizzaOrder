// //check if meats are selected
function validateMeat(){
    var meats =[document.getElementsByClassName(meats)];
    var error=0;
   
        for(i=0;i<meats.length;i++){
            if (!meats[i].checked){
                meats[i].style.backgroundColor="red";
                error++;
            }
        };
        if (error===0){
            return true; 
        } else {
            return false;
        }
    }
   
   
   // //check if veggies are selected
    function validateVeg(){
    var veggies =[document.getElementsByClassName(veggies)];
    var error=0;
   
        for(i=0;i<veggies.length;i++){
            if (!veggies[i].checked){
                veggies[i].style.backgroundColor="red";
                error++;
            }
            };
        if (error===0){
            return true;
        } else {
            return false;
        }
    }
    

function getReceipt(){
    var txt1 = "You Ordered: ";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			txt1 = txt1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Small Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra-Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+ sizeTotal +".00");
	console.log("Size customer chose: "+ selectedSize);
	console.log("Subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,txt1); // All three of these variables will be passed on to each function
    // ? getMeat(runningTotal,txt1) why put this here
};

function getMeat(runningTotal,txt1){
    //var runningTotal=0;
    var meatsTotal=0;
    var selectedMeats=[];
    var meats=document.getElementsByClassName("meats");
    for (var j=0;j<meats.length;j++){
        if (meats[j].checked){
        selectedMeats.push(meats[j].value);
        console.log("selected meat item: " + meats[j].value + " ")
        txt1 +=  selectedMeats + "<br>"; //text1 = text1+meatArray[j].value+"<br>"?
            }
        }
    //price for meat://
        var meatCount = selectedMeats.length;
	if (meatCount > 1) {
		meatsTotal = (meatCount - 1);
	} else {
		meatsTotal = 0;
    }
    
	runningTotal += meatsTotal;
	console.log("Meats price = $"+meatsTotal+".00");
	console.log("meats: "+selectedMeats+" ");
    console.log("subtotal: $"+runningTotal+".00");
    getVeggies(runningTotal,txt1);
    }

function getVeggies(runningTotal,txt1){
    var veggiesTotal=0;
    var selectedVeggies=[];
    var veggies=document.getElementsByClassName("veggies");
    for (var a=0; a<veggies.length; a++){
        if (veggies[a].checked){
        selectedVeggies.push(veggies[a].value);
        txt1 = txt1 + selectedVeggies + "<br>";
    }}
    
        var veggiesCount=selectedVeggies.length;
        if (veggiesCount>1){
            veggiesTotal=(veggiesCount-1)
        }else{
            veggiesTotal=0;
        }

	runningTotal += veggiesTotal;
	console.log("Price for selected veggies = $"+veggiesTotal+".00");
	console.log("Selected Veggies: "+selectedVeggies+"<br>");
    console.log("Subtotal: $"+runningTotal+".00");
    getCheese(runningTotal,txt1);
}

function getCheese(runningTotal,txt1){
    var cheeseTotal=0;
    var cheeseArray=document.getElementsByClassName("cheese");
    for (var b=0;b<cheeseArray.length;b++){
        if (cheeseArray[b].checked){
        var selectedCheese =cheeseArray[b].value;
        txt1 = txt1 + selectedCheese + "<br>";
    }}
    
    if (selectedCheese==="Regular Cheese"){
        cheeseTotal = 1;
    } else if (selectedCheese==="No cheese"){
        cheeseTotal = 1.1;
    }else if (selectedCheese==="extra cheese"){
        cheeseTotal = 1.2 ;
    }
	runningTotal += cheeseTotal;
	console.log("Price for selected cheese = $"+ cheeseTotal +".00");
	console.log("customer selected: "+ selectedCheese);
    console.log("Subtotal: $"+runningTotal+".00");
    getSauce(runningTotal,txt1);
}
function newFunction(cheeseArray, b) {
    return cheeseArray[b].value;
}

function getSauce(runningTotal,txt1){
    var sauceTotal=0;
    var sauceArray=document.getElementsByClassName("sauce");
    for (var c=0;c<sauceArray.length;c++){
        if (sauceArray[c].checked){
        var selectedSauce = sauceArray[c].value;
        txt1 = txt1 + selectedSauce + "<br>";
    }}
    
    if (selectedSauce==="Marinara sauce"){
        sauceTotal = 2;
    } else if (selectedSauce==="White sauce"){
        sauceTotal = 2.1;
    }else if (selectedSauce==="BBQ sauce"){
        sauceTotal =  2.2 ;
    }else if (selectedSauce==="No sauce"){
        sauceTotal = 2.3;
    }
	runningTotal += sauceTotal;
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("selectedSauce: "+ selectedSauce);
    console.log("subtotal: $"+runningTotal+".00");
    getCrust(runningTotal,txt1);
}

function getCrust(runningTotal,txt1){
    var crustTotal=0;
    var crustArray=document.getElementsByClassName("crust");
    for (var d=0;d<crustArray.length;d++){
        if (crustArray[d].checked){
        var selectedCrust = crustArray[d].value;
        txt1 = txt1 + selectedCrust + "! :)";
    }}
    
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
    
    runningTotal += crustTotal;
    runningTotal= runningTotal.toFixed(2);
	console.log("Price for selected crust is+ = $"+crustTotal+".00");
	console.log("You selected: "+selectedCrust);
    console.log("subtotal: $"+runningTotal+".00");
    document.getElementById("showText").innerHTML=txt1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+" "+"</strong></h3>";
    
}

