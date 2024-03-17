const deadline = new Date("2024-03-16T20:29:59").getTime();

window.onload = () => {
    setInterval(() => {
        const date = new Date();

        const time = deadline - date.getTime();
        
        document.querySelector('#days').innerHTML = date.getDate();
        document.querySelector('#hours').innerHTML = date.getHours();
        document.querySelector('#minutes').innerHTML = date.getMinutes();
        document.querySelector('#seconds').innerHTML = date.getSeconds();
    }, 1000);
}


// const time = `${date.getHours()}:${date.getMinutes()}`;