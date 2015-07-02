Array.prototype.shuffle=function(){//randomly shuffles an array and returns result
	for(i=this.length-1,tmp=this[i],target=0;i;tmp=this[--i]){
		this[i]=this[(target=Math.floor(Math.random()*i))];
		this[target]=tmp;
	}
	return this;
};
Array.prototype.toRealignedArray=function(){//returns a randomly shuffled array
	var clone=this.slice();
	for(i=clone.length-1,tmp=clone[i],target=0;i;tmp=clone[--i]){
		clone[i]=clone[(target=Math.floor(Math.random()*i))];
		clone[target]=tmp;
	}
	return clone;
};
