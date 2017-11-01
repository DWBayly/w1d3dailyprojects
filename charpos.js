function charcounter(list){
	var result = {};//create empty object
	for(var i = 0; i < list.length; i++){//itterate through string
		var letter = list[i];
		if(letter===" "){//strip whitespace
			
		}else if(result[letter]===undefined){//check if letter is already in object
			result[letter] = [i];//if not, create an array and add i to it.
		}else{
			result[letter].push(i);//else push i into the already present array
		}
		//console.log(result);
	}
	return result;
	
}
console.log(charcounter(process.argv[2]));//get first string from argv

console.log(charcounter("Hello world"));//test code