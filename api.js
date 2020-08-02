apiclient = require('https');

p = new Promise((resolve, reject) => {
	apiclient.get('https://xxrlhh11wd.execute-api.us-east-1.amazonaws.com/test/myFirstLambaFunction', (resp) => {
  	let data = '';

  	resp.on('data', (chunk) => {
    		data += chunk;
  	});

  	resp.on('end', () => {
    		resolve(data);
  	});

	}).on("error", (err) => {
  		reject("Error: " + err.message);
	});

});


p.then(result => { console.log(result); console.log('FIM') }).catch(error => { console.log(error) });

	
