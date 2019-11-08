function ArrayList() {
	List.call(this);
	this.size = 0;
	this.array = [];
	this.str = "";

	this.clear = function () {
		if(arguments.length > 0){
			return false;
		}
		this.array = [];
		this.size = 0;
	};
	
	this.length = function () {
		return this.size;
	};
	
	this.push = function (value) {
		if(arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == "undefined"){
			return false;
		}
		this.array[this.size] = value;
		this.size++;
		return value;
	};
	
	this.pop = function (){
		lastElem = this.array[this.size - 1];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i];
		}
		this.array = a;
		this.size--;
		return lastElem;
	};
	
	this.unshift = function  (value){
		if(arguments.length !== 1){
			return false;
		}
		let a = [];
		a[0] = value;
		for(let i = 0; i < this.size; i++){
			a[i + 1] = this.array[i];
		}
		this.array = a;
		this.size++;
		return value;
	};
	
	this.shift = function () {
		firstElem = this.array[0];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i + 1];
		}
		this.array = a;
		this.size--;
		return firstElem;
	};
	
	this.toString = function(){
		if(arguments.length > 0){
			return false;
		}
		for(let i = 0; i < this.size; i++){
			this.str +=this.array[i] + ", ";
		}
		this.str = this.str.substring(0, this.str.length - 2);
		return this.str;
	};

	this.sort = function (f) {
		if(f && (typeof f == "function" )){
			for(let i = 0; i < this.size; i++){
				for(let j = 0; j < this.size; j++){
					if(j === this.size - 1){
						break;
					}
					if(f(this.array[j], this.array[j+1]) === 	1){
						[this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
					}
				}
			}
		}else{
			for(let i = 0; i < this.size; i++){
				for(let j = 0; j < this.size; j++){
					if(j === this.size - 1){
						break;
					}if( String(this.array[j]) > String(this.array[j + 1]) ){
						[this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
					}
				}
			}
		}
	}
}