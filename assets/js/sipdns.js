const toggle = document.getElementsByClassName('toggle');
const sidebar = document.getElementsByClassName('sidebar'); 
const itemSidebar = document.getElementsByClassName('item-sidebar'); 
 
toggle[0].addEventListener('click', ()=>{

    toggleClass('toggle', 'toggle-mini');
    toggleClass('main-sidebar', 'sidebar-mini');
    // toggleClass('main-sidebar', 'active');
    toggleClass('main-top', 'main-top-lg');
    toggleClass('main-content', 'main-content-lg');
})


for(element of itemSidebar){
	element.addEventListener('mouseover', ()=>{
		removeAddClass('inActive','active','active')
	})
}

sidebar[0].addEventListener('mouseout', ()=>{
	removeAddClass('active','inActive','inActive')
})

function removeAddClass(add, remove ,target){
	const targetClass = document.getElementsByClassName(target); 
	if(targetClass.length>0){
		targetClass[0].classList.add(add)		
		targetClass[0].classList.remove(remove)		
	}
}

function toggleClass(target,toggle) {
	const targetClass = document.getElementsByClassName(target); 
	 targetClass[0].classList.toggle(toggle)
}

const alert = document.getElementById('btn-alert')
const alertshow = document.getElementsByClassName('alert')
// console.log(alert
alert.addEventListener('click', ()=>{
 alertshow[0].style.display='block'
})
