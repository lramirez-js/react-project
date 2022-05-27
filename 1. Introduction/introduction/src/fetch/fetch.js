const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url, {
  method: "POST", // GET, POST, PUT, PATCH, DELETE
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer CODEDEDEDEDEXXCC123'
  },
  body: JSON.stringify({
    name: 'Willian Lane Craig',
    website: 'reasonablefaith.org'
  })
})
  .then((response) => response.json())
  .then(data => console.log(data))

const fn = async () => {
  const response = await fetch(url, {
    method: "POST", // GET, POST, PUT, PATCH, DELETE
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer CODEDEDEDEDEXXCC123'
    },
    body: JSON.stringify({
      name: 'Willian Lane Craig',
      website: 'reasonablefaith.org'
    })
  })
  
  data = await response.json()
  console.log(data)    
}
fn()