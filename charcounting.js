function charcounter(list){
	var result = {};//create empty object
	for(var i = 0; i < list.length; i++){//itterate through string
		var letter = list[i];
		if(letter===" "){//strip whitespace
			
		}else if(result[letter]===undefined){//check if letter is already in object
			result[letter] = 1;//if not, add it to object with value of 1
		}else{
			result[letter] ++;//else add 1
		}
		//console.log(result);
	}
	return result;
	
}
console.log(charcounter(process.argv[2]));//get first string from argv

console.log(charcounter("Hello world"));//test code