let accountsTableBody = document.querySelector('#accounts-table-body');
let accountsView = document.querySelector('#accounts-view');
let addAccountsView = document.querySelector('#add-account-view');
let accountsViewBtn = document.querySelector('[href="accounts-view"]');
let addAccountsViewBtn = document.querySelector('[href="add-accounts-view"]');

addAccountsViewBtn.addEventListener('click', (e) =>{
	e.preventDefault();
	addAccountsView.style.display = "block";
	accountsView.style.display = "none";
});

accountsViewBtn.addEventListener('click', (e) =>{
	e.preventDefault();
	addAccountsView.style.display = "none";
	accountsView.style.display = "block";
});

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