window.onload=function(){
	canvasGame = document.getElementById('dx-ball');
	canvasGame.style.position = "relative";
	canvasGame.style.height = window.innerHeight+"px";
	canvasGame.style.width = 100+"%";
	canvasGame.style.border = "3px solid #000";
 	window.onresize = function(){
		setTimeout(function(){
				if(window.innerHeight==window.screen.height){
					canvasGame.style.position = "absolute";
					canvasGame.style.height = window.screen.height+"px";
					canvasGame.style.width = window.screen.width+"px";
					canvasGame.style.border = "0px solid #000";
					time_flag = (new Date().getTime());
				}else{
					
						canvasGame.style.position = "relative";
						canvasGame.style.height = 768+"px";
						canvasGame.style.width = 1024+"px";
						canvasGame.style.border = "3px solid #000";
						
					
				}
		},0);
	}
	dx_ball(true,true);
}