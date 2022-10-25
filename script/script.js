let offset = 0;
const pictures = document.querySelector('.gallery_line');

document.querySelector('.button_right').addEventListener('click', function(){
	if( offset < -1400){offset=offset;}
	else {offset -= 244;}
	pictures.style.left = offset + 'px';
});



document.querySelector('.button_left').addEventListener('click', function(){
	if( offset==0){offset=0;}
	else {offset += 244;}
	pictures.style.left = offset + 'px';

});

document.querySelector('.button_up').addEventListener('click', function(){
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

 // main, info, about, contacts;

const links = document.querySelectorAll('.nav_text');
links.forEach((item)=>{
	item.addEventListener("click", (event)=>{
		event.preventDefault();
		const el = document.getElementById(item.getAttribute('data-link'));
		el.scrollIntoView({
			behavior: "smooth"
		})
		console.log("kekeke");
		console.log(item.getAttribute('data-link'));
	})
});


const sign = document.querySelector('.button1');
	sign.addEventListener("click", (event)=>{
		event.preventDefault();
		const el = document.getElementById(sign.getAttribute('data-link'));
		el.scrollIntoView({
			behavior: "smooth"
		})
		console.log("kekeke");
		console.log(item.getAttribute('data-link'));
	});

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });



    selectItem.forEach(item => {
        item.addEventListener('click', (event)=>{
		event.preventDefault();
		const el = document.getElementById(item.getAttribute('data-link'));
		el.scrollIntoView({
			behavior: "smooth"
		});
    });
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });



    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        // let text = this.innerText,
             select = this.closest('.select'),
        //     currentText = select.querySelector('.select__current');
        // currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

// const glavnaya = document.querySelector('.nav_text');
// glavnaya.style='color: #5728DD; text-decoration: underline;'



select();

let select_burger = function () {
    let selectHeader_burger = document.querySelectorAll('.select__header_burger');
    let selectItem_burger = document.querySelectorAll('.select__item_burger');

    selectHeader_burger.forEach(item => {
        item.addEventListener('click', selectToggle)
    });



    selectItem_burger.forEach(item => {
        item.addEventListener('click', (event)=>{
		event.preventDefault();
		const el = document.getElementById(item.getAttribute('data-link'));
		el.scrollIntoView({
			behavior: "smooth"
		});
    });
    });

    selectItem_burger.forEach(item => {
        item.addEventListener('click', selectChoose)
    });



    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        // let text = this.innerText,
             select = this.closest('.select'),
        //     currentText = select.querySelector('.select__current');
        // currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

// const glavnaya = document.querySelector('.nav_text');
// glavnaya.style='color: #5728DD; text-decoration: underline;'



select_burger();