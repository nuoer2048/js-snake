;(function (argument) {
     

	var Game = function (map) {
		this.map = map;
		this.start = map.find('button#start');
		this.pause = map.find('button#pa');
			  this.food = food.init(map);
	  this.snake = snake.init(map);
		// this.snakeMove();
		this.bindKey();
		this.timeId = 0;
		var self = this;
		this.start.click(function(event) {
			self.snakeMove();
		});
		this.pause.click(function(event) {
			window.clearInterval(self.timeId)
		});

	}
	Game.prototype={

		begin:function (argument) {
			this.snakeMove();
		},
		bindKey:function (argument) {
			var self = this;
		    $(document).keydown(function (e) {
		        switch(e.keyCode){

		        	case 37:
                       self.snake.direcation = 'left';
                       self.snake.move(self.food,self.map)
                       break;
                       case 38:
                       self.snake.direcation = 'top';
                         self.snake.move(self.food,self.map)
                       break;
                       case 39:
                       self .snake.direcation ='right';
                         self.snake.move(self.food,self.map)
                       break;
                       case 40:
                       self.snake.direcation ='down';
                         self.snake.move(self.food,self.map)
		        	
		        }
		    })
		},
		snakeMove:function (argument) {
	 var self = this;
       self.timeId = setInterval(function (argument) {
       	self.snake.move(self.food,self.map)
       },200)
		}

	}
	Game.init = function (map) {
		
	
	
		new this(map);
	}
	window.Game = Game;
}(jQuery))