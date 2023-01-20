/* fetch("https://api.githubXXX.com/users/torvalds/repos?page=0")
.then((response) => response.json())
.then((data) => console.log(data))
.catch(error => console.log("there was an error: " + error)) */

fetch('https://api.github.com/usersXXXX/torvalds/repos?page=0')
.then(response => {
if (response.status >= 400) {
throw new Error(`error status: ${response.status}`)
}
return response.json()
})
.then(data => console.log(data))
.catch(error => console.log("there was an error: " + error))