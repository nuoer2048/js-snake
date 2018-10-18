;(function (argument) {
	
	var score = 0;
	var snakes = [];
	var snake = function (bac) {
	     this.bac = bac;
	     this.width = 20;
	     this.height = 20;
	     this.direcation = 'right';
         this.body=[
            {x:3,y:2},
            {x:2,y:2},
            {x:1,y:2}
         ];
         this.initialize();


	}
	snake.prototype = {
     randomC:function (argument) {
     	var hex = Math.floor(Math.random() * 16777216).toString(16); 
    while (hex.length < 6) { 
      hex = '0' + hex;
          }
 return '#' + hex; 
     },

     initialize:function (argument) {
          
     	var self = this;
          self.remove();
     	$(this.body).each(function (argument) {
     		
     		 var div = $('<div></div>');
     		 $(div).css({
     		 	"width":self.width + 'px',
     		 	"height":self.height + 'px',
     		 	"backgroundColor":self.randomC(),
     		 	"borderRadius":'50%',
     		 	"position":'absolute',
     		 	"left":this.x*20+'px',
     		 	"top":this.y*20 +'px'

     		 });
     		 $(div).addClass('snake');
     		$(div).appendTo(self.bac);
     		snakes.push(div);
     	})
     },
      move:function(food,map){

        var self = this;
       var j = self.body.length-1;
       for(;j>0;j--)
       {
           self.body[j].x = self.body[j-1].x;
             self.body[j].y = self.body[j-1].y;
       }
     	switch(self.direcation){
     		case "top":self.body[0].y-=1;break;
     		case  "down":self.body[0].y+=1;break;
     		case "right":self.body[0].x+=1;break;
     		case "left":self.body[0].x-=1;break;
     	}
     	 
     
     	self.moveSanke();//判断蛇把食物吃了
     	// console.log(self.body[0].x*20+":"+self.body[0].y*20);
     	// console.log(food.x +':'+food.y);
     	// x <0 || >780
     	// y<0 || >580
     	 var sw = self.body[0].x*20;
     	 var sh = self.body[0].y*20;
     	 var la = self.body.length-1; 
     	 var law = self.body[la].x*20;
     	 var lah = self.body[la].y*20;
      	 //吃到食物
     	 if(sw === food.x && sh === food.y)
     	 {
     	 	score+=1;
     	 
     	 	var obj ={
     	 		x:0,
     	 		y:0
     	 	};
     	 
     	 	obj.x = self.body[la].x;
     	 	obj.y = self.body[la].y;
     	 	self.body.push(obj);

     	 	 var div = $('<div></div>');
     		 $(div).css({
     		 	"width":self.width + 'px',
     		 	"height":self.height + 'px',
     		 	"backgroundColor":food.color,
     		 	"borderRadius":'50%',
     		 	"position":'absolute',
     		 	"left":obj.x*20+'px',
     		 	"top":obj.y*20 +'px'
     		 });
     		 $(div).addClass('snake');
     		$(div).appendTo(self.bac);
     		snakes.push(div);
                map.find('div#score').html(score+"分");
     		 food.initialize(map);
     	 }
     	 //边缘测试
     	 if((sw<0||sw>780)||(sh<0||sh>580)||(sw === law&&sh === lah))
     	 {
     	 	$(self.bac.find('div.snake').get(0)).css('display', 'none');
     	 	
     	 	var res = window.confirm("死亡！想继续么？");
     	 	if(res)
     	 	{
     	 		location.reload(true);
     	 	}
     	 	else{
     	 		self.remove();
     	 		map.find('button').attr('disabled', 'true');
     	 	}
     	 }
      
       
     	                 
     	

     },
     moveSanke:function (argument) {
     	var self = this;
     	$(this.body).each(function (key) {
          
         
     		$(self.bac.find('div.snake').get(key)).css({
     			"left":self.body[key].x*20+'px',
     			"top":self.body[key].y*20+'px'
     		})
     	})
     },
     remove:function (argument) {
     		var self = this;
          $(snakes).each(function (key) {
             $(this).remove();
               snakes.splice(key,1)
          })
     }

	}
	snake.init = function (bac) {
	  var snake = new this (bac);
	  return snake ;
	}
	
	window.snake = snake;
}())