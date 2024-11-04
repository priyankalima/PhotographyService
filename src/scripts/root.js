const file = [
    "./src/scripts/header.js",
    "./src/scripts/main.js",
    "./src/scripts/footer.js"
]

file.forEach((item)=>{
    const script = document.createElement('script');
    script.src = item;
    document.body.appendChild(script);
})