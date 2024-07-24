// Original URL: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholde.typicode.com/users") // remove any word for url to get error
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

async function handle() {
    try {
        const response = await fetch("https://jsoplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

handle();