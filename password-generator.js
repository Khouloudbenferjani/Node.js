var generator = require('generate-password');

var password = generator.generate({
    // mengthmeans nbe de caratere numbers means false: without number
	length: 100,
	numbers: false
});

// 'uEyMTw32v9'
console.log(password);