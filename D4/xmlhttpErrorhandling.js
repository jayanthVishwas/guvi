let xmlhttp = new XMLHttpRequest()

let url = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

xmlhttp.open('GET', url, true);
xmlhttp.onerror = function () {
  console.log("** An error occurred during the transaction");
};
xmlhttp.send();
