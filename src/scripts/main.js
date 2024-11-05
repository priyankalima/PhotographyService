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
                    // carousel content
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

                    //carousel control
                    for(let i = 0; i < 2 ; i++){
                        carouselControl.innerHTML += `
                        <input type="radio" name="tab" id=${'tab' + i}>
                        <label for=${'tab' + i} id="label"></label>
                        `
                    }

                    // define
                    const tabs = document.getElementsByName('tab');
                    const carousel = document.getElementsByClassName('carousel');
                    const element = document.getElementById("carouselContent");
                    
                    // menual control
                    tabs.forEach((t,i)=>{
                         t.addEventListener('click',()=>{
                            if (document.getElementById('tab' + i).checked) {
                                const scrollPosition = carousel[i].offsetLeft;
                                element.scrollTo(scrollPosition, 0);
                            }
                         })
                    })

                    // auto slider
                    let counter = 0;
                    setInterval(() => {
                        counter++;
                        if (counter >= 2) {
                            counter = 0;
                        }
                        document.getElementById('tab' + counter).checked = true;
                        const scrollPosition = carousel[counter].offsetLeft;
                        element.scrollTo(scrollPosition,0);
                    }, 5000)
                })
            })
        }
    )
)