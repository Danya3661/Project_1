hello();

const body = document.querySelector('body');
const container = document.querySelector('.container');
const new_js = document.querySelector('.new_js');

function videoPlay(){
	document.querySelector(".VideoCover").style.display = "none";
	document.querySelector(".VideoIframe").src += "&autoplay=1";

	document.querySelector(".VideoWrap").removeEventListener("click", videoPlay);
}
document.querySelector(".VideoWrap").addEventListener("click", videoPlay);

const burger = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.hlist');
const headerLinkAll = document.querySelectorAll('.header__nav_item');

burger.addEventListener('click', function(){
	headerMenu.classList.toggle('active')
})


headerLinkAll.forEach(function(item){
item.addEventListener('click', function(){
	headerMenu.classList.remove('active')
})
})

