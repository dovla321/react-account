let accountsTableBody = document.querySelector('#accounts-table-body');
let accountsView = document.querySelector('#accounts-view');
let addAccountsView = document.querySelector('#add-account-view');
let allLinks = document.querySelectorAll('.nav-link');
let views = document.querySelectorAll('.view');

// SELEKTOVANJE INPUT POLJA POMOĆU PLACEHOLDERA
let idInput = document.querySelector('[placeholder="id"]');
let nameInput = document.querySelector('[placeholder="name"]');
let lastNameInput = document.querySelector('[placeholder="lastname"]');
let emailInput = document.querySelector('[placeholder="email"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', saveAccount);

function saveAccount(){
	const newAccount = {
		id: idInput.value,
		name: nameInput.value,
		lastname: lastNameInput.value,
		email: emailInput.value,
		phone :phoneInput.value
	}

	db.push(newAccount);
	idInput.value = "";
	nameInput.value = "";
	lastNameInput.value = "";
	emailInput.value = "";
	phoneInput.value = "";
	createAccountsTable();
	showView("#accounts-view");
}






for(let i = 0; i < allLinks.length; i++){
allLinks[i].addEventListener('click', showView);
}

function showView(e){

	for(let i = 0; i < views.length; i++){
		views[i].style.display = "none";
	}


	if(e instanceof Event){
		e.preventDefault();
		let id = `#${this.getAttribute("href")}`;
		document.querySelector(id).style.display = "block";
	}else{
		document.querySelector(e).style.display = "block";
	}
	
	
}


createAccountsTable();


function createAccountsTable(){
	let htmlAccounts = ``;
	for(let i=0; i < db.length; i++){
		const account = db[i];
		htmlAccounts += `<tr>
							<th>${account.id}</th>
							<th>${account.name}</th>
							<th>${account.lastname}</th>
							<th>${account.email}</th>
							<th>${account.phone}</th>
						</tr>`
	}

	accountsTableBody.innerHTML = htmlAccounts;
}