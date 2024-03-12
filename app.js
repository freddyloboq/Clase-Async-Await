// const showItem = () => {
//   console.log('Items')
// }

// const userLogin = (callback) => {
//   console.log("Login");
//   setTimeout(()=>{
//     callback()
//   },3000)
// };

// const userLogout = () => {
//   console.log("Logout");
// };

// userLogin(showItem);
// userLogout()

// const validUser = (user) => {
//   const users = ['Pepe', 'Tomas', 'Seba']

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if (users.includes(user)) {
//         // console.log("users.includes(user)", users.includes(user));
//         resolve(`Welcome ${user}`)
//       } else {
//         reject(new Error('Invalid User'))
//       }
//     },3000)
//   })
// }

// llamada de manera asyncrona con el THEN

// validUser("Pepee").then(
//   (respuesta) => console.log(respuesta),
//   (error) => console.log(error)
//   )


// llamada de manera asyncrona con el Async await
// const llamado = async(usuario) => {
//   try{
//     let respuesta = await validUser(usuario);
//     console.log(respuesta);
//   }catch(error){
//     console.log(error)
//   }
// }

// llamado('Pepeeeee')


fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    console.log('response', response)
    return response.json()})
  .then((data) => console.log(data))
  .catch((error)=>{
    console.log('error', error)
  });

  // CRUD
  // Create
  // Read
  // Update
  // Delete