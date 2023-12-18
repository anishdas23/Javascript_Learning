const accountId= 152018878
let accountEmail="anishdas@gmail.com"
var accountPassword="12345"
 /* Prefer not to use var in code
because of issue in block and funcational scope */    
accountCity="Kolkata"

let accountState;
// accountId= 1458789  TypeError: Assignment to constant variable. NOT ALLOWED


console.log(accountId) // Simple print funcation
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])