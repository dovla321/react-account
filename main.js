let accountsTableBody = document.querySelector('#accounts-table-body');
let accountsViewBtn = document.querySelector('[href="accounts-view"]');
let addAccountsViewBtn = document.querySelector('[href="add-accounts-view"]');

console.log(addAccountsViewBtn);

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