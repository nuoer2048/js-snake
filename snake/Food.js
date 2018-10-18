;(function (argument) {
	
	var foods = [];
var food =function (bac) {
   this.bac = bac;
		this.x = 0;
		this.y = 0;
		this.color ="#b71c1c";
		this.width = 20;
		this.height = 20;
		this.initialize(bac);
		

}
food.prototype={
	initialize:function (map) {
		    this.remove();
			var div = $('<div></div>');
			var borderW = map.outerWidth()/this.width;
			var borderH = map.outerHeight()/this.height;
			this.x = Math.floor(Math.random()*borderW)*this.width;
			this.y = Math.floor(Math.random()*borderH)*this.height;
			$(div).appendTo(map);
			$(div).css({
				'width':this.width+'px',
				'height':this.height+'px',
				'backgroundColor':this.color,
				'position':'absolute',
				'top':this.y +'px',
				'left':this.x +'px',
				'borderRadius':'50%'
			})
			foods.push(div);
		},
		remove:function(){
			var self = this;
          $(foods).each(function (key) {
             $(this).remove();
               foods.splice(key,1)
          })

		},

		
}
food.init=function (bac) {
	var food = new this(bac);
	return food ;
}
 window.food = food;
}(jQuery))