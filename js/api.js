fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: {
        name: 'User 1'
    }
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))