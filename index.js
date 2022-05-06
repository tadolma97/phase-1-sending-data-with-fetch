// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {        
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        document.body.textContent=data.id
    })
    .catch(function (error){
        document.body.textContent=error.message
    })
}
submitData()
