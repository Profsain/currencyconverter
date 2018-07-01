
if (!window.indexedDB) {
    window.alert("Your browser doesn't support IndexedDB.");
}

// opening  database
let maindb;
var request = window.indexedDB.open(maindb, 1);

request.onerror = function(event) {
  // Do something with request.errorCode!
  alert("IndexDb storage "+ event.target.errorCode);
};
var db;
request.onsuccess = function(event) {
  // Do something with request.result!
  db = event.target.result;
};
  
request.onupgradeneeded = function(event) { 
		
	  	// Save the IDBDatabase interface 
	  	db = event.target.result;

	  	// Create new objectStore for this database
	  	var objectStore = db.createObjectStore(maindbStore, { keyPath: "id" });
	  	
	  	objectStore.createIndex("id", "id", { unique: true });

	  	objectStore.transaction.oncomplete = function(event) {
	  		// Store values in the created objectStore.
	  		var currenciesObjectStore = db.transaction(maindbStore, "readwrite").objectStore(STORE_NAME);
	  		fetch(BASE_URL+'/api/v5/countries')
	  		.then(res => res.json()).then(json => {
	  			//to caluclate the initial Outputed result
	  			console.log(json);
	  			var currencies = json;
	  			const curs = currencies.results;
	  			for (const key in curs) {
	  			  const objs =curs[key];
	  			  currenciesObjectStore.add(objs);
	  			}
	  		}).catch( (error) => {
	  			console.log(error);
	  		});
	  	};
	    console.log('after transaction');
};