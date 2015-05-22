function Vector(x,y){
	this.x=x;
	this.y=y;
	this.size=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	this.copy=function(){
		return new Vector(this.x,this.y);
	};
	this.toString=function(){
		return "("+this.x+","+this.y+")";
	};
	this.toArray=function(){
		return [this.x,this.y];
	};
	this.add=function(v){
		return new Vector(this.x+v.x,this.y+v.y);
	};
	this.sub=function(v){
		return new Vector(this.x-v.x,this.x-v.x);
	};
	this.mul=function(i){
		return new Vector(this.x*i,this.y*i);
	};
	this.div=function(i){
		return new Vector(this.x/i,this.y/i);
	};
	this.angle=Math.atan(y/x)/Math.PI*180;
	this.innerProduct=function(v){
		return this.x*v.x+this.y*v.y;
	};
	this.unFloat=function(){
		this.x=parseInt(this.x);
		this.y=parseInt(this.y);
		return new Vector(parseInt(this.x),parseInt(this.y));
	};
	this.round=function(){
		this.x=Math.round(this.x);
		this.y=Math.round(this.y);
		return new Vector(Math.round(this.x),Math.round(this.y));
	};
	this.toUnit=function(){
		return this.div(this.size);
	};
	this.rotate=function(rad){
		return Vector.fromRad(rad+this.angle).mul(this.size);
	};
	this.rotateDeg=function(deg){
		return Vector.fromDeg(deg+this.angle).mul(this.size);
	};
}

Vector.fromArray=function(arr){
	return new Vector(arr[0],arr[1]);
};
Vector.fromRad=function(rad){
	return new Vector(Math.cos(rad),Math.sin(rad));
};
Vector.fromDeg=function(deg){
	return new Vector(Math.cos(deg/180*Math.PI),Math.sin(deg/180*Math.PI));
};
