/* CSS Document */

body{
	width: 100%;
	height: 100%;
	
}

.butt{
	position: relative;
	left: 50px;
	top:50px;
    color: black;
	padding: 15px 32px;
	font-size: 16px;
    text-align: center;
	border: 2px black solid;
	text-decoration: none;
}

.butt:hover{
	background: #161616;
	color: white;
}

.cart-btn{position:relative;float:right;padding:9px 50px 9px;font-size:0.9em;margin-top:17px}
.cart-btn a{display:inline-block;width:40px;height:40px;margin:10px;}
.cart-btn .line_icon{background:url("https://i.imgur.com/buXk6XB.png") no-repeat left ;background-size: 400%;}
.instagram_icon{background:url("https://i.imgur.com/buXk6XB.png") no-repeat center ;background-size: 400%;}
.cart-btn .fb_icon{background:url("https://i.imgur.com/buXk6XB.png") no-repeat right;background-size: 400% ;}

@font-face {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 300;
  src:local('Noto Sans TC'), local('NotoSansTC-Thin'), 
	  url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format('woff2'),
       url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format('woff'),
       url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format('opentype');
	
}

@font-face {
   font-family: 'Noto Sans TC';
   font-style: normal;
   font-weight: 400;
	src:local('Noto Sans TC'), local('NotoSansTC-Regular'),
 url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format('opentype');
 }


.font{
	font-family: "Noto Sans TC",NotoSansTC-Regular,sans-serif;
	font-size: 30px;
	text-align: center;
	position: relative;
	top:-90px;
	
}

.pdt{
	font-family: "Noto Sans TC",NotoSansTC-Regular,sans-serif;
	font-size: 30px;
	text-align: center;
	position: relative;
	top:50px;
}

.enn{
	font-family: "Noto Sans TC",NotoSansTC-Thin,sans-serif;
	text-align: center;
	font-size: 20px;
	margin-bottom: 5px;
	color: aquamarine;
	position: relative;
	top:50px;
}

.en{	
	font-family: "Noto Sans TC",NotoSansTC-Thin,sans-serif;
	text-align: center;
	font-size: 20px;
	margin-bottom: 5px;
	color: aquamarine;
	position: relative;
	top:-90px;
}

.tite {
	background:#FFFFFF;
	width: 100%;
	height: 100%;
	margin-top: 50px;
	 
}

.border{
	width: 90%;
	height:200px;
	margin:0px auto;
	border: 2px black solid;
	transition: all 0.3s;
	
}

.border:hover{border-radius:25px;}

.logo{
	background-image: url("https://i.imgur.com/CW4L5BJ.jpg");
	width: 100VW;
	height: 200px;
	background-size: 200px 200px;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	top:-100px;
	
}

.name{
	width: 100%;
	height: 200px;
	text-align: center;
	position: relative;
	top:-50px;
	
}

.name div{
	width: 4%;
	height: 70px;
	display: inline-block;
	
	
	
}

.img01{
	background-image: url("https://i.imgur.com/zUs8Esi.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img02{
	background-image: url("https://i.imgur.com/N13qQAY.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img03{
	background-image: url("https://i.imgur.com/AAnDc3m.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img04{
	background-image: url("https://i.imgur.com/IE1x88f.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img05{
	background-image: url("https://i.imgur.com/Z7Mwtd8.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img06{
	background-image: url("https://i.imgur.com/zwTgEzN.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.img07{
	background-image: url("https://i.imgur.com/qmRxHYC.jpg");
	background-repeat: no-repeat;
	background-size: contain;
}

.shop{
	width: 100%;
	height: 100%;
	text-align: center;
	position: relative;
	top:-120px;
}

.shop div{
	width: 15%;
	height: 200px;
	display: inline-block;
	background-position: center;
	
}

.shop a{
	margin: auto 10px ;
	position: relative;
	top:80px;
	
}



.yaho{
	background-image: url("https://i.imgur.com/A2VnS9o.png");
	background-repeat: no-repeat;
	background-size: contain;
	
}

.sohpp{
	background-image: url("https://i.imgur.com/JteMfPx.png");
	background-repeat: no-repeat;
	background-size: contain;
}

.ruten{
	background-image: url("https://i.imgur.com/kVjmjhi.png");
	background-repeat: no-repeat;
	background-size: contain;
	
}

.one01,.one02,.one03,.one04{width: 200px;height: 200px;background: #F97C7E}
.one{padding-top:50px;  margin:50px auto;height:200px;width:1000px;overflow:hidden;position:relative; }
.one ul{height:160px;width:100000px;position:absolute;left:0;} /*ul width的宽不能过小*/
.one ul li{display:block;float:left;margin:5px;height:200px;border-radius:5px;position:relative;}
.one ul li a{display:inline-block;height:150px;} 
.one ul li div{border-radius:5px;display:block;}
.one ul li a span{height:0;display:block;background:rgba(0,0,0,0.3);position:absolute;bottom:0;color:#fff;font-size:0px;}
.one ul li a:hover span{height:200px;line-height:180px;font-size:20px;text-align:center;transition:all 0.7s;}



@media only screen and (max-width: 768px) {
	
	.one{padding-top:50px;  margin:50px auto;height:200px;width:600px;overflow:hidden;position:relative; 
	.name div{
	width: 10%;
	height: 70px;
	display: inline-block;
		}
	
	.shop div{
	width: 200px;
	height: 200px;
	display: inline-block;
		}
	
}
