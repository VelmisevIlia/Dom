const btn = document.querySelector('#ddleg')
btn.addEventListener('click', () => {
let input = document.querySelector('input')
console.log(input.value)
if (input.value !=''){
const li = document.createElement('li')
li.innerHTML = input.value
li.className = 'list-group-item'
const ul = document.querySelector('ul')
ul.appendChild(li)
const btnd = document.createElement('button')
btnd.innerHTML = 'Удалить'
btnd.className = 'btn btn-danger'
li.appendChild(btnd)
	btnd.addEventListener('click', function() {
		this.parentElement.remove();
	});
input.value = ''     
}else{}
} 
)












