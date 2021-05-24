const fs = require('fs')

// fs.readFile('public/images/pic2.jpeg', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   con
//   // const img = {
//   // 	contentType : 'image/jpeg',
//   // 	data : data
//   // }
// })


const data =  await fs.readFile('public/images/pic2.jpeg', 'utf8');
console.log(data)