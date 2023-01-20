// Use https://localhost:8080/hello-query?person=alice&shout=true
const userInput = document.getElementById('userName')
const shoutInput = document.getElementById('shoutText')
const responseDisplay = document.getElementById('responseText')
const sendQueryButton = document.getElementById('getWithQueryButton');
const sendPathButton = document.getElementById('getWithPathButton');
const sendPostButton = document.getElementById('postWithBodyButton');
function getInputs() {
    return {
        userName: `${userInput.value}`,
        shoutInput: `${shoutInput.checked}`
    }
}
function fetchWithGet(fullURL){
    fetch(fullURL,{
        method: 'GET'
    })
    .then(response =>{
        if (response.status !== 200){
            console.log('error', response.status)
            return
        }
        response.text()
        .then(data=>{
            console.log(`data${data}`)
            responseDisplay.innerText = `${data}`
        })
    })
    .catch((error) => {
        console.log('There was an error:', error);
      });
}
function fetchWithPost(fullUrl, nameText, shoutFlag) {
    const sendData = {
        person: nameText,
        shout: shoutFlag
    }
    fetch(fullUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })
    .then((response) => {
        if (response.status !== 200) {
          console.log('that was wrong. Response status:', response.status);
          return;
        }
        response.text().then((data) => {
          console.log(`data =${data}`);
          responseDisplay.innerText = `${data}`;
        });
      })
      .catch((error) => {
        console.log('There was an error:', error);
      });
}
function sendDataByQuery(){
    const inputs =getInputs()
    const fullURL ='http://localhost:8080/hello-query?person=alice&shout=true'
    console.log('input username', inputs.userName)
    console.log('input shoutText', inputs.shoutInput)
    fetchWithGet(fullURL)
}
function sendDataByPath() {
    const inputs = getInputs();
    const fullUrl = 'http://localhost:8080/hello-path2/alice/shout/true';
    console.log('input username', inputs.userName);
    console.log('input shoutText', inputs.shoutInput);
    fetchWithGet(fullUrl);
  }
function sendDataByPost() {
    const inputs = getInputs();
    const fullUrl = 'http://localhost:8080/hello-query-post'
    console.log('input username', inputs.userName);
    console.log('input shoutText', inputs.shoutInput);
    fetchWithPost(fullUrl, inputs.userName, inputs.shoutInput)
}
sendQueryButton.addEventListener('click', sendDataByQuery)
sendPathButton.addEventListener('click', sendDataByQuery)
sendPostButton.addEventListener('click', sendDataByPost)