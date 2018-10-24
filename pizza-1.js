var runningTotal;
function getReceipt(){
    var txt1="<h3>You Ordered</h3>";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra-Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal += sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getReceipt(runningTotal,txt1); // All three of these variables will be passed on to each function
};
