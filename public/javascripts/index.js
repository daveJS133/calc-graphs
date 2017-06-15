
document.getElementById('titleBox').addEventListener("input", function(){
	titleIn(document.getElementById('titleBox'))
});

function titleIn(titleBox) {
	if (titleBox.value.length>0) {
		document.getElementById('submit').disabled = "";
	}else{
		document.getElementById('submit').disabled = "disabled";
	}
	console.log(titleBox.value.length);
}