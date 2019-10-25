console.log("Hi there!!!")
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
}

const a = new ArrayList();

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

