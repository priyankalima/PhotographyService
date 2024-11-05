main.appendChild(
    // banner section
    Object.assign(
        document.createElement('section'),
        {
            className:"banner",
            id:"banner",
            innerHTML: `
             <div class="carousel-content" id="carouselContent"></div>
             <div class="carousel-control" id="carouselControl"></div>
            `,
            function: addEventListener("load",()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main;
                    item.forEach(e => {
                        carouselContent.innerHTML += `
                        <div class="carousel">
                            <div class="container d-flex">
                                <div class="left-content">
                                    <span class="title"> ${e.title}</span>
                                    <span class="para">${e.para}</span>
                                </div>
                                <div class="right-img">
                                    <img src=${e.img}>
                                </div>
                            </div>
                        </div>
                        `
                    });

                    carouselContent.addEventListener('touchmove',()=>{
                        alert('hello')
                    })
                    
                })
            })
        }
    )
)