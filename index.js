var fs = require('fs');

const lerArquivo = (file) => {

	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if(!err) {
				resolve(data.toString());
			}
			else {
				reject(err);
			}		
		});
	});
}

const escreveSucesso = (result) => {
	console.log(result);
	console.log('OK!');
}

const escreveErro = (err) => {
	console.log(err.path);
	console.log('Erro!');
}

lerArquivo('teste.txt')
	.then(result => { escreveSucesso(result); console.log('++++')})
	.catch(result => { escreveErro(result); console.log('----');});
