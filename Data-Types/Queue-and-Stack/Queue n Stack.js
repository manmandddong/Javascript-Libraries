function Queue(){
	if(this==(function(){return this;}).call(null))return Queue.apply({},Array.prototype.slice.call(arguments));
	for(i=0;i<arguments.length;i++)this[i]=arguments[i];
	this.length=arguments.length;
	this.iterateOver=function(callback){
		for(i=0;i<this.length;i++)callback(this[i],i,this);
	};
	this.put=function(){
		for(v=0;v<arguments.length;v++)this[this.length++]=arguments[v];
		return Array.prototype.slice.call(arguments);
	};
	this.get=function(v){
		var tmp=[];
		for(i=0;i<this.length;i++){
			if(i<v){
				tmp.push(this[i]);
				delete this[i];
			}
			else{
				this[i-v]=this[i];
				delete this[i];
			}
		}
		this.length-=v;
		return tmp;
	};
	this.toArray=function(){
		var tmp=[];
		this.iterateOver(function(v){tmp.push(v);});
		return tmp;
	};
	this.toStack=function(){
		return Stack.apply({},this.toArray());
	};
	this.toString=function(){
		return this.toArray().toString();
	};
	this._arrMethod=function(callback,argument){
		if(argument.constructor!=Array)argument=[argument];
		return Array.prototype[callback].apply(this,argument);
	};
	return this;
}
Queue.fromArray=function(arr){
	return Queue.apply({},arr);
};
Queue.fromStack=function(stack){
	return Queue.apply({},stack.toArray());
};
function Stack(){
	if(this==(function(){return this;}).call(null))return Stack.apply({},Array.prototype.slice.call(arguments));
	for(i=0;i<arguments.lendgth;i++)this[i]=arguments[i];
	this.length=arguments.length;
	this.iterateOver=function(callback){
		for(i=0;i<this.length;i++)callback(this[i],i,this);
	};
	this.push=function(){
		for(v=0;v<arguments.length;v++)this[this.length++]=arguments[v];
		return Array.prototype.slice.call(arguments);
	};
	this.pop=function(v){
		var tmp=[];
		for(i=this.length-v;i<this.length;i++){tmp.push(this[i]);delete this[i];}
		this.length-=v;
		return tmp;
	};
	this.toArray=function(){
		var tmp=[];
		this.iterateOver(function(v){tmp.push(v);});
		return tmp;
	};
	this.toQueue=function(){
		return Queue.apply({},this.toArray());
	};
	this.toString=function(){
		return this.toArray().toString();
	};
	this._arrMethod=function(callback,argument){
		if(argument.constructor!=Array)argument=[argument];
		return Array.prototype[callback].apply(this,argument);
	};
	return this;
}
Stack.fromArray=function(arr){
	return Stack.apply({},arr);
};
Stack.fromQueue=function(queue){
	return Stack.apply({},queue.toArray());
};
