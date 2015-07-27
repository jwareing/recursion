// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (obj === null){
		return "null";
	}
	else if (typeof obj === "undefined"){
		return "undefined";
	}
	else if (typeof obj === "number"){
		return obj.toString();
	}
	else if (typeof obj === "boolean"){
		return obj.toString();
	}
	else if (typeof obj === "string"){
		return '"'+obj+'"';
	}
	else{
		var keyList = Object.keys(obj);
		var stringParts = [];
		var arrayParts = [];
		for (var i=0;i<keyList.length;i++){
			var keyVal = obj[keyList[i]];
			var keyStr = "\""+keyList[i]+"\":";
			if (typeof keyVal=="function" || typeof keyVal=="undefined"){
				return '{}';
			}
			else{
				keyStr = keyStr+stringifyJSON(keyVal);
			}
			arrayParts.push(stringifyJSON(keyVal));
			stringParts.push(keyStr);
		}
	}
	if (Array.isArray(obj)){
		return "[" +arrayParts.join(",")+"]";
	}
	return "{" + stringParts.join(",") +"}";
};
