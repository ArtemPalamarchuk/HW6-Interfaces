class ArrayList extends  List {
	array = [];
	size = 0;
	str = "";

	clear =  () => {
		this.array = [];
		this.size = 0;
	};
	length =  () => {
		return this.size;
	};
	push = (value) => {
		this.array[this.size] = value;
		this.size++;
		return value;
	};
	pop = () => {
		let lastElem = this.array[this.size - 1];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i];
		}
		this.array = a;
		this.size--;
		return lastElem;
	};
	shift = () => {
		let firstElem = this.array[0];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i + 1];
		}
		this.array = a;
		this.size--;
		return firstElem;
	};
	unshift = (value) =>{
		let a = [];
		a[0] = value;
		for(let i = 0; i < this.size; i++){
			a[i + 1] = this.array[i];
		}
		this.array = a;
		this.size++;
		return value;
	};
	toString = () => {
		for(let i = 0; i < this.size; i++){
			this.str +=this.array[i] + ", ";
		}
		this.str = this.str.substring(0, this.str.length - 2);
		return this.str;
	}
	sort = (f) => {
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