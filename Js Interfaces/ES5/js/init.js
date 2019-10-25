function List(){
	this.clear = function () {

	};
	this.length = function () {

	};
	this.pop = function(){

	};
	this.push = function(){

	};
	this.shift = function(){

	};
	this.unshift = function(){

	};
	this.toString = function(){

	};
	this.sort = function(){

	};

	this.reverse = function(){

	};
	this.map = function(){

	};
	this.reduce = function(){

	};
}

const a = new ArrayList();

function ArrayList() {
	List.call(this);
	this.size = 0;
	this.array = [];

	this.clear = function () {
		if(arguments.length > 0){
			return false;
		}
		this.array = [];
		this.size = 0;
	}
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
	this.shift = function () {
		let a = [];
		for(let i = 1; i < this.size; i++){
			a[i] = this.array[i]l
		}
		delete this[this.length()];
		return deleted;
	};
	this.unshift = function  (){
		if(arguments.length !== 1){
			return false;
		}
		for(let i = this.length(); i > -1; i--){
			this[i] = this[i - 1];
		}
		this[0] = value;
		return (this[0] = value);
	};
	this.toString = function(){
		if(arguments.length > 0){
			return false;
		}
		let str = "";
		for(let i = 0; i < this.length(); i++){
			str +=this[i] + ", ";
		}
		str = str.substring(0, str.length - 1);
		return str;
	}
	this.sort = function (f) {
		if(f && (typeof f == "function" )){
			for(let i = 0; i < this.length(); i++){
				for(let j = 0; j < this.length(); j++){
					if(j === this.length() - 1){
						break;
					}
					if(f(this[j], this[j+1]) === 1){
						[this[j], this[j+1]] = [this[j+1], this[j]];
					}
				}
			}
		}else{
			for(let i = 0; i < this.length(); i++){
				for(let j = 0; j < this.length(); j++){
					if(j === this.length() - 1){
						break;
					}if( String(this[j]) > String(this[j + 1]) ){
						[this[j], this[j+1]] = [this[j+1], this[j]];
					}
				}
			}
		}
	}

	/*this.reverse = function (arr) {

	}*/
}

function LinkedList() {
	List.call(this);

	this.root = {
		next : null,
		prev : null,
		length : 0,
	};
	
	this.clear = function () {
		this.root.next = null;
		this.root.prev = null;
		this.root.length = 0;
	};
	
	this.createNode = function(el){
		if(arguments.length !== 1){
			return false;
		}
		return {
			el : el ? el : null,
			next : null,
			prev : null,
			index : this.root.length,
		}
	};
	
	this.length = function () {
		if(arguments.length !== 0){
			return false;
		}
		return this.root.length;
	};
	
	this.push = function (el) {
		if(arguments.length !== 1){
			return false;
		}
		const newNode = this.createNode(el);
		let tmp = this.root;
		while (tmp.next && (tmp.next !== this.root)){
			tmp.next.prev = tmp;
			tmp = tmp.next;
			newNode.prev = tmp
		}
		tmp.next = newNode;
		this.root.prev = null;
		this.root.length++;
		return true;
	};
	
	this.pop = function (){
		if(this.root.length === 0){
			return false;
		}

		if(this.root.length === 1){
			let deleted = this.root.next;
			this.root.next = null;
			this.root.length --;
			return deleted;
		}

		let tmp = this.root;
		while(tmp.next !== null){
			tmp = tmp.next;

			if(tmp.index === (this.root.length - 2) ){
				let deleted = tmp.next;
				tmp.next == null;
				this.root.length --;
				return deleted
			}
		}
	};
	
	this.shift = function () {
		if(this.root.next = null){
			return false;
		}else{
			const tmp = this.root.next.next;
			this.root.next = tmp;
			this.root.length--;
		}
	};
	this.unshift = function  (el){
		const newNode = this.createNode(el);
		if(this.root.next == null){
			this.root.next = newNode;
			this.root.length++;
		}else{
			let tmp = this.root.next;
			this.root.next = newNode;
			this.root.next.next = tmp;
			this.root.length++;
		}
		return true;
	};
	
	this.toString = function(){
		let str = "";
		let tmp = this.root;
		while(tmp.next !== null){
			tmp = tmp.next;
			str += tmp.el + ", ";
		}
		str = str.substring(0, str.length - 2);
		return str;
	};
	
	this.sort = function (f) {
		if(f && (typeof f == "function" )){
			let firstNoda = this.root.next;
			while(firstNoda && firstNoda.next){
				if(f(firstNoda.el, firstNoda.next.el) > 0){
					[firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
				}
			}
		}else{
			let firstNoda = this.root.next;
			if(!firstNoda){
				return false;
			}
			while(firstNoda && firstNoda.next){
				if(String(firstNoda.el) > String(firstNoda.next.el)){
					[firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
				}
				firstNoda = firstNoda.next;;
			}
		}
	};
}

