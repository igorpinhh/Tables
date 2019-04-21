const btn = document.querySelector('button')
const allNumbers = document.querySelector('#allNumbers')
const numberToCalc = document.querySelector('#num')
const historic = []


const transformArray = () => {
	// this function turns rowsnode into an array
	const rowsNode = document.querySelectorAll('.row');
	const rows = Array.from(rowsNode)
	rows.forEach( (item) => {
		// adds the firstNumb class to the first element of each array...
		item.firstElementChild.classList.add('firstNumb')
	})
}

btn.addEventListener('click', () =>{
	// check if the number has already been calculated
	if ( historic.includes(numberToCalc.value) ) {
		alert('este numero já foi digitado')
	} else {
		// takes the value typed and adds it to the historic array
		const numberToCalc = document.querySelector('#num').value
		historic.push(numberToCalc)

		const createTable = () => {
			// creates a new div with class and name row
			const spacer = document.createElement('div')
			allNumbers.appendChild(spacer)
			spacer.classList.add('row')
			spacer.setAttribute("name", "row")

			for( var i = 1; i < 11; i++ ) {
				// create 10 divs with each multiple number inside row
				let table = num * i
				const div = document.createElement('div')
				spacer.appendChild(div)
				div.classList.add('number')
				div.innerText = table;
			}

			if (i = 1) {
				document.querySelector('.number').classList.add('firstNumb')
			}
			
		}

		const num = document.querySelector('#num').value;

		if(document.body.contains(document.querySelector('[name="row"]'))){
			// se existir o cod abaixo sera executado
			const rowsNode = document.querySelectorAll('.row');
			var rows = Array.from(rowsNode)
			const lastDiv = rows.length - 1
			const lastRow = rows[lastDiv]
			const firstEl = lastRow.firstElementChild
		}
		
		createTable()
		transformArray()
		document.querySelector('#num').value = ""
		document.querySelector('#num').focus()
	}
})

