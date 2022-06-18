let accountsTableBody = document.querySelector('#accounts-table-body');
let accountsView = document.querySelector('#accounts-view');
let addAccountsView = document.querySelector('#add-account-view');
let allLinks = document.querySelectorAll('.nav-link');
let views = document.querySelectorAll('.view');


for(let i = 0; i < allLinks.length; i++){
allLinks[i].addEventListener('click', showView);
}

function showView(e){
	e.preventDefault();
	for(let i = 0; i < views.length; i++){
		views[i].style.display = "none";
	}

	let id = `#${this.getAttribute("href")}`;
	document.querySelector(id).style.display = "block";
	
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