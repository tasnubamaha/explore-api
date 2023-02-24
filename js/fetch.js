function loadData() {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
       fetch(url)
      .then(response => response.json())  
      // .json is not similar but close to json.parse
      .then(json => console.log(json))
}

 