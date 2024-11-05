main.appendChild(
    Object.assign(
        document.createElement('section'),
        {
            className:"banner",
            id:"banner",
            function: addEventListener("load",()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main;
                    console.log(item)
                    banner.innerHTML = `
                    <div class="container d-flex">
                        <div class="left-content">
                           <span class="title"> ${item.title}</span>
                           <span class="para">${item.para}</span>
                        </div>
                        <div class="right-img">
                           <img src=${item.img}>
                        </div>
                    </div>
                    `
                })
            })
        }
    )
)