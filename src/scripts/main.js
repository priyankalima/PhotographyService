main.append(
    // banner section
    Object.assign(
        document.createElement('section'),
        {
            className: "banner",
            id: "banner",
            innerHTML: `
            
                <div class="carousel-content" id="carouselContent"></div>
                <div class="carousel-control" id="carouselControl"></div>
           
            `,
            function: addEventListener("load", () => {
                fetch('./content.json').then(res => res.json()).then(data => {
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
                    for (let i = 0; i < 2; i++) {
                        carouselControl.innerHTML += `
                        <input type="radio" name="tab" id=${'tab' + i}>
                        <label for=${'tab' + i} id="label"></label>
                        `
                    }

                    // define
                    const tabs = document.getElementsByName('tab');
                    const carousel = document.getElementsByClassName('carousel');
                    const element = document.getElementById("carouselContent");
                     
                    // console.log(carousel)
                    // active first tab
                    tabs[0].checked = true;

                    // menual carousel
                    tabs.forEach((t, i) => {
                        t.addEventListener('click', () => {
                            if (document.getElementById('tab' + i).checked) {
                                const scrollPosition = carousel[i].offsetLeft;
                                element.scrollTo(scrollPosition, 0);
                            }
                        })
                    })

                    // auto carousel
                    let counter = 0;
                    setInterval(() => {
                        counter++;
                        if (counter >= 2) {
                            counter = 0;
                        }
                        document.getElementById('tab' + counter).checked = true;
                        const scrollPosition = carousel[counter].offsetLeft;
                        element.scrollTo(scrollPosition, 0);
                    }, 5000)
                })
            })
        }
    ),

    // gallery section
    Object.assign(
        document.createElement('section'),
        {
            className: "gallery-wrapper",
            id: 'galleryWrapper',
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.gallery;

                    galleryWrapper.innerHTML = `
                       <div class="container gallery">
                            <div class="title">Beauty of Pictures</div>
                            <div class="gallery-img">
                                ${item.map(img => {
                        return `<div><img src=${img}></div>`
                    }).join("")
                        }
                            </div>
                            <div class="explore-btn">
                               <button>Explore  
                               <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M0.522561 0.847268C0.311656 1.05824 0.193176 1.34433 0.193176 1.64264C0.193176 1.94095 0.311656 2.22705 0.522561 2.43802L6.09131 8.00677L0.522561 13.5755C0.317633 13.7877 0.204239 14.0719 0.206802 14.3668C0.209366 14.6618 0.327681 14.944 0.536265 15.1526C0.744849 15.3611 1.02701 15.4795 1.32198 15.482C1.61696 15.4846 1.90113 15.3712 2.11331 15.1663L8.47744 8.80214C8.68834 8.59117 8.80682 8.30508 8.80682 8.00677C8.80682 7.70846 8.68834 7.42236 8.47744 7.21139L2.11331 0.847268C1.90234 0.636363 1.61625 0.517883 1.31794 0.517883C1.01963 0.517883 0.73353 0.636363 0.522561 0.847268Z" fill="white" />
                               </svg></button>
                            </div>
                       </div>
                    `
                })
            })
        }
    ),

    // testimonial section
    Object.assign(
        document.createElement('section'),
        {
            className: 'testiml',
            id: 'testiml',
            innerHTML: `
             <div class="container d-flex">
                 <div class="left-img" id="leftImg"></div>
                 <div class="right-content" id="rightContent">
                    <div class="title" id="title"></div>
                    <div class="accordion" id="accordion"></div>
                 </div>
             </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.testimonial;
                    leftImg.innerHTML = `
                     <img src=${item.img}>
                    `
                    title.innerHTML = `
                    <span>Testimonial :</span>
                    <span>They say what they feel!</span>`

                    item.tstml.forEach((list, i) => {
                        accordion.innerHTML += `
                        <div class="accordion-list">
                            <div class="accordion-content">
                                <input type="radio" name="accordion" id=${'accordion' + i}>
                                <label for=${'accordion' + i}>
                                      <img src=${list.img}>
                                      <div class="text">
                                            <span>${list.name}</span>
                                            <span>From ${list.location}</span><br>
                                            <span>4.5</span>
                                      </div>
                                </label>
                                <div class="content">
                                   <span>${list.msg}</span>
                                   <span>4.5 Ratting</span>
                                </div>
                            </div>
                          </div>
                        `
                        document.getElementsByName('accordion')[0].checked = true;
                    })
                })
            })
        }
    ),

    // faq section
    Object.assign(
        document.createElement('section'),
        {
            className:'faq-section',
            id:'faqSection',
            innerHTML:`
              <div class="container d-flex">
                  <div class="left-content" id="leftContent">
                       <div class="tabs">
                           <div class="title">
                               <span>FAQ :</span>
                               <span>To get know more makes more interesting!</span>
                           </div>
                           <div class="tab-content" id="tabContent"></div>
                           <div class="tab-control" id="tabControl"></div>
                       </div>
                  </div>
                  <div class="right-img" id="rightImg">helo</div>
              </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.faq;
                    
                    item.faqList.forEach((list,i)=>{
                        tabContent.innerHTML += `
                            <div class="faq-content">
                                <span>${list.title}</span><br>
                                <span>${list.text}</span>
                            </div> 
                        `
                        tabControl.innerHTML += `
                            <div class="controls">
                                <input type="radio" id=${'faqTab' + i} name="faqTab" >
                                <label for=${'faqTab' + i}>${i+1}</label>
                            </div>
                        `
                        document.getElementsByName('faqTab')[0].checked = true;
                    })
                   
                    // defined tab and content
                    const contentList = document.querySelectorAll('.faq-content');
                    const controlTab = document.getElementsByName('faqTab');

                    // show related contents while tabs
                    controlTab.forEach((item,i)=>{
                         // active first tab when others tabs are not
                        if(controlTab[0].checked){
                            contentList[0].style.display = "block";
                        }
                        // deactive all tab when one tab will active
                        if(!controlTab[i].checked){
                            contentList[i].style.display = "none";
                        }
                        // show content while tab
                        item.addEventListener('click',()=>{
                            contentList.forEach((content => {
                                content.style.display = "none"
                            }))
                            contentList[i].style.display = "block";
                        })

                    })
                    
                    rightImg.innerHTML = `
                      <img src=${item.img}>
                    `
                })
            })
        }
    )
)