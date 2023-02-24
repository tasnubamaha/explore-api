function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
     fetch(url)
    .then(response => response.json())  
    // .json is not similar but close to json.parse
    .then(data => console.log(data))
}


function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
     fetch(url)
    .then(response => response.json()) 
    .then(data => console.log(data))
}


function displayUsers(data){
    console.log(data);
}