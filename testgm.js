const fs = require('fs');
const gm = require('gm');

// gm("testimage.jpg").identify(function(err, value) {
//     console.log(value);

//     if(err) {
//         console.log(err);
//     }
// });

gm("testimage.jpg")
	.resize(150, 150, '^')
	.gravity('Center')
	.extent(150, 150)
	.noProfile()
	.write('./imagestest/newimage.jpg', function (err) {
		if (err) {
			console.log('Ошибка при загрузке аватар', err)
		}
	})