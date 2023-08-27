
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" }
    })
    const data = await response.json()
    resolve({ data })
  });
}

export function checkUser(loginData) {
  return new Promise(async (resolve, reject) => {

    const email = loginData.email
    const password = loginData.password

    const response = await fetch('http://localhost:8080/users?email=' + email)
    const data = await response.json()
    // console.log(data)

    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] })
      } else {
        reject({ message: 'wrong credientails' })
      }
    } else {
      reject({ message: 'User not found' })
    }
  });
}

export function signout(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "signout success" })
  });
}
