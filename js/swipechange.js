JM.$package("MUI",function(J){
	var $D = J.dom,
		$E = J.event;
	var isTouchDevice = J.platform.touchDevice;
	var dragingElem;
	var isTouchDevice = J.platform.touchDevice;
	var startEvt = isTouchDevice ? "touchstart" : "mousedown";
	var moveEvt = isTouchDevice ? "touchmove" : "mousemove";
	var endEvt = isTouchDevice ? "touchend" : "mouseup";
	var hasClientRect = "getBoundingClientRect" in document.body;

	var SwipeChange = J.Class({extend:MUI.Slide},{
		init:function(options){
			SwipeChange.callSuper(this,"init",options);
			this.startX = 0;
		},
		_handleEvent:function(e){
			SwipeChange.callSuper(this,"_handleEvent",e);
			switch (e.type) {
				case startEvt: this._onStartEvt(e); break;
				case moveEvt: this._onMoveEvt(e); break;
				case endEvt: this._onEndEvt(e); break;
			}
		},
		_onStartEvt:function(e){
			//console.log(0);
			var elem = this.elem;
			//console.log("0001");
			var target = e.target||e.srcElement;
			//console.log("0003");
			//if(!$D.closest(target ,"." + this.wrapClassName)) return;
			//console.log("0003");
			dragingElem = target;
			//console.log("0077");
			var tou = e.touches? e.touches[0] : e;
			var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;

			var x = tou.clientX - elemLeft;
			this.startX = x;//相对于container
			//console.log(1);
		},
		_onMoveEvt:function(e){
			//console.log(2);
			if(!dragingElem) return;
			//console.log(222);
			e.preventDefault();
			var elem = this.elem;
			var tou = e.touches? e.touches[0] : e;
			var x = tou.clientX;
			var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;
			var elemRight = elemLeft + this.contentWidth;

			if(x < elemLeft || x > elemRight) return;
			x = x - elemLeft;

			this.moveDist = x - this.startX;
			this._removeAnimation();
			this._moveTo(this.currentIndex * -this.contentWidth + this.moveDist);
			// e.preventDefault();
				//console.log(22);
		},
		_onEndEvt:function(e){
		//	console.log(3);
			if(!dragingElem) return;

			var d = this.moveDist;
			var elem = this.elem;
			var currentIndex = this.currentIndex;
			var elemLeft = hasClientRect ? elem.getBoundingClientRect().left : elem.offsetLeft;
			var elemHalf = elemLeft + this.contentWidth/4;
			
			if(d > elemHalf) {
				currentIndex = Math.max(0 ,currentIndex - 1);
			}
			else if(d < - elemHalf && options.currentIndex>0) {
				currentIndex = Math.min(this.contents.length - 1 ,currentIndex + 1);
			}
		   // self._moveTo(currentIndex * -self.contentWidth);
			this.slideTo(currentIndex);
			if(d > elemHalf && options.currentIndex>0){
				$("li:last").remove();
				options.currentIndex = options.currentIndex -1 ;
				this.init(options);
		//		console.log(options);
			}
			dragingElem = null;
		//	console.log(4);
		},
		bindHandlers:function(iframe){
			var _handleEvent = this._handleEvent = J.bind(this._handleEvent , this);
			SwipeChange.callSuper(this,"bindHandlers");
		//	$E.on(this.elem,[startEvt,moveEvt,endEvt].join(" "), _handleEvent);
			$E.on(document.getElementById(iframe).contentDocument,[startEvt,moveEvt,endEvt].join(" "), _handleEvent);
		//	console.log(document.getElementById(iframe).contentDocument);
		},
		destory:function(){
			$E.off(this.elem,[startEvt,moveEvt,endEvt].join(" "), this._handleEvent);	
			SwipeChange.callSuper(this,"destory");
		}

	});
	this.SwipeChange = SwipeChange;
});