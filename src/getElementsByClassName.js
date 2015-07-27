// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var overall = document.body;
	var nodeList = [];

	function checker(element){
		if (element.classList && element.classList.contains(className)){
			nodeList.push(element);
		}
		for (var i=0;i<element.childNodes.length;i++){
			checker(element.childNodes[i]);
		}
	}
	checker(overall);
	return nodeList;
}