var data;
var order;

function start() {
	document.getElementById("entry").style.display = "none";
	const reader = new FileReader();
	reader.onload = () => {
		data = JSON.parse(reader.result);
		order = [...Array(data.length).keys()];
		for(let i = data.length - 1; i >= 0; --i){
			const j = Math.floor(Math.random() * (i + 1));
			[order[i], order[j]] = [order[j], order[i]];
		}
		next();
		document.getElementById("answer").style.display = "block";
	}
	reader.readAsText(document.getElementById("source").files[0]);
}

function ans() {
}

function next() {
	if(order.length > 0){
		let index = order.pop();
		document.getElementById("question").innerHTML = data[index]["question"];
		document.getElementById("input").type = "button";
	}
}
