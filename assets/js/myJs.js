  let a =document.getElementById('a').children,
	 x=document.getElementById('a'),
	 i=0,
	 image =document.createElement('img'),
	 image1 =document.createElement('img'),
	 image2 =document.createElement('img'),
	 btn1 =document.getElementById('btn1'),
	 btn2 =document.getElementById('btn2'),
	 btn3 =document.getElementById('btn3'),
	 btn4 =document.getElementById('btn4'),
	 btn5 =document.getElementById('btn5'),
	 btn6 =document.getElementById('btn6'),
	 popup=document.getElementById('popup'),
     title =document.getElementById('title'),
     link=document.getElementById('link'),
     desc =document.getElementById('desc');
const Obj ={
    title:{SpringApp:'Spring Boot Application',
		  eCommerce:'E-Commerce Web Application',
		  ReactJs:'React Js Application',
		  Laravel:'PHP Laravel Web App',
		  WordPress:'Word Press Web App',
		  Symfony:'PHP Symfony Web App'},
    description:{SpringApp:'A responsive Blog website ,Frontend and Backend Development with Spring-Boot ,Mysql and Jsp ..etc<br>',
				 eCommerce:'Multi sellers E-Commerce Project, Frontend and Backend Development with Dashboard for Admin.Used technologies are Php and Javasript<br>',
				 ReactJs:'A responsive template for building websites with React,React Router and Bootstrap<br>',
				 Laravel:'Online Blog with Laravel Frameword ,Backend Development with Custom Ready-made Frontend Template<br>',
				 WordPress:'A web application that allows Blog owners to manage their content and membership<br>',
				 Symfony:'School mangement website that allow teachers login and post Content like Videos and text lessons<br> '
				 },
	tools:{SpringApp:'<span>Java</span> <span>Spring-Boot</span> <span> JSP</span> <span>XML</span> <span> CSS3</span> <span> Bootstrap</span> <span>MySql</span>',
	      eCommerce:'<span>PHP8</span> <span>MySql</span> <span>JAVAScript</span> <span> Html</span> <span> Css3</span> <span>Bootstrap</span>',
		  ReactJs:'<span>React Js</span> <span >React Router</span> <span>Html</span> <span> Css3</span> <span> Bootstrap</span>',
		  Laravel:'<span>PHP-Laravel</span> <span>Mysql</span> <span>JavaScript</span> <span>HTML5</span> <span> Css3</span> <span> Bootstrap</span>',
		  WordPress:'<span>Word Press plugin</span> <span>Php</span> <span>Html </span> <span>Css</span> <span>Mysql</span>',
		  Symfony:'<span>PHP-Symfony</span> <span> Mysql</span> <span>Html</span> <span>Css3</span> <span>Bootstrap</span> <span> JS</span>'
		  },
    images: {SpringApp:{img1:'assets/img/portfolio/spring1.png',img2:'assets/img/portfolio/spring.png',img3:'assets/img/portfolio/spring-db.png'},
			eCommerce:{img1:'assets/img/portfolio/ecommerce1.png',img2:'assets/img/portfolio/ecommerce2.png',img3:'assets/img/portfolio/ecommerce3.png'},
			ReactJs:{img1:'assets/img/portfolio/reacthome.png',img2:'assets/img/portfolio/react2.png',img3:'assets/img/portfolio/react3.png'},
			Laravel:{img1:'assets/img/portfolio/laravel1.jpg',img2:'assets/img/portfolio/laravel2.png',img3:'assets/img/portfolio/laravel3.png'},
			WordPress:{img1:'assets/img/portfolio/w3.png',img2:'assets/img/portfolio/w2.png',img3:'assets/img/portfolio/w1.png'},
			Symfony:{img1:'assets/img/portfolio/symfony1.png',img2:'assets/img/portfolio/symfony2.png',img3:'assets/img/portfolio/symfony3.png'}
}

}

function spring(){
    
    image.setAttribute('src',Obj.images.SpringApp.img1);
	image1.setAttribute('src',Obj.images.SpringApp.img2);
	image2.setAttribute('src',Obj.images.SpringApp.img3);
	title.innerHTML=Obj.title.SpringApp;
	desc.innerHTML=Obj.description.SpringApp+'<h4>Tools :</h4>'+Obj.tools.SpringApp;
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}
	 function laravel(){
    
    image.setAttribute('src',Obj.images.Laravel.img1);
	image1.setAttribute('src',Obj.images.Laravel.img2);
	image2.setAttribute('src',Obj.images.Laravel.img3);

	title.innerHTML=Obj.title.Laravel;
	desc.innerHTML=Obj.description.Laravel+'<h4>Tools :</h4>'+Obj.tools.Laravel;
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}
	function wordpress(){
    
    image.setAttribute('src',Obj.images.WordPress.img1);
	image1.setAttribute('src',Obj.images.WordPress.img2);
	image2.setAttribute('src',Obj.images.WordPress.img3);
	title.innerHTML=Obj.title.WordPress;
	desc.innerHTML=Obj.description.WordPress+'<h4>Tools :</h4>'+Obj.tools.WordPress;
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}
	
	function react(){
    
    image.setAttribute('src',Obj.images.ReactJs.img1);
	image1.setAttribute('src',Obj.images.ReactJs.img2);
	image2.setAttribute('src',Obj.images.ReactJs.img3);
	title.innerHTML=Obj.title.ReactJs;
	desc.innerHTML=Obj.description.ReactJs+'<h4>Tools :</h4>'+Obj.tools.ReactJs;
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}
	function symfony(){
    
    image.setAttribute('src',Obj.images.Symfony.img1);
	image1.setAttribute('src',Obj.images.Symfony.img2);
	image2.setAttribute('src',Obj.images.Symfony.img3);
	title.innerHTML=Obj.title.Symfony;
	desc.innerHTML=Obj.description.Symfony+'<h4>Tools :</h4>'+Obj.tools.Symfony;
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}
	function ecommerce(){
    
    image.setAttribute('src',Obj.images.eCommerce.img1);
	image1.setAttribute('src',Obj.images.eCommerce.img2);
	image2.setAttribute('src',Obj.images.eCommerce.img3);
	title.innerHTML=Obj.title.eCommerce;
	desc.innerHTML=Obj.description.eCommerce+'<h4>Tools :</h4>'+Obj.tools.eCommerce;
    link.setAttribute('href','http://azizwa.epizy.com');
	x.appendChild(image);
    x.appendChild(image1);
	x.appendChild(image2);
	}

 function pop(){
    popup.style.display="block";
   };
	function change(){
	if(i>a.length-1){i=0;}
	else if (i<0) {i=a.length-1;  }
	document.getElementById('a').style.transform=`translateX(${-i * 720}px)`;
	}
	function run(){
	i++;
	change();
	}
	setInterval(run,2000);

    // popup=document.getElementById('popup');
    function closePopup(){
   //console.log("ggg");
   link.removeAttribute('href');
   popup.style.display="none";
   
   }
   
