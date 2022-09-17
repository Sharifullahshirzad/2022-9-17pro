



// const items = '{"name":"TV":"price":200,"model":"sony"}'
// console.log(items)


// const itemsobj = JSON.parse(items)
// console.log(itemsobj)
// for(let key in itemsobj){
//     console.log(key+':'+itemsobj[key])
// }


// const items = '["tv","pc","remote","pen","somting"]'

// console.log(items)

// const itemsobj = JSON.parse(items);
// console.log(itemsobj[0])

// for(let x in itemsobj){
//     console.log(itemsobj[x])
// }


// const text = `[
//     {
//       "userId": 1,
//       "firstName": "Krish",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-1.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "fayaz",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-1.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "asee",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-3.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "narati",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-2.jpeg"
//     },
//     {
//       "userId": 3,
//       "firstName": "rabin ",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-1.jpeg"
//     } 
//   ]`;



//   const textobj = JSON.parse(text)
// //   console.log(textobj)

// const plc = document.getElementById('data_out');
// var out = '';

// var i = 0;
// var j = 1;
// while(i<textobj.length){
//     out += `<tr> 
//     <td>${j++}</td>
//     <td>${textobj[i].firstName}</td> 
//     <td>${textobj[i].lastName}</td> 
//     <td>${textobj[i].phoneNumber}</td> 
//     <td>${textobj[i].emailAddress}</td> 
//     <td> <img src = "${textobj[i].photo}" style="height: 100px; width: auto;"></td>  
    
    
//     </tr>`

//     i++
//     plc.innerHTML=out;
//}


// fetch("myproducts.json")
// .then(function(response){
//     return response.json();

// })

// .then(function(myproducts){
//     var plc = document.querySelector('#data_out')
//     var out = '';

//     for (let pro of myproducts){
//         out += ` <tr>
//                 <td>${pro.userId}</td>
//                 <td><img src = '${pro.photo}' style="height: 100px; width: auto;"></td>
//                 <td>${pro.firstName}</td>
//                 <td>${pro.lastName}</td>
//                 <td>${pro.phoneNumber}</td>
//                 <td>${pro.emailAddress}</td>
        
//         </tr>`
//     }

//     plc.innerHTML = out ;
// })

var ourRequest = new XMLHttpRequest()

 ourRequest.open('GET',' https://learnwebcode.github.io/json-example/animals-1.json')

 ourRequest.onload =function(){

    console.log(ourRequest.responseText)

 }


