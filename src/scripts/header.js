header.appendChild(
    Object.assign(
        document.createElement('nav'),
        {
            className: 'navbar',
            id: 'navbar',
            function: addEventListener('load', () => {
                // fetch data
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.header;
                    // navbar
                    navbar.innerHTML = `
                        <div class="container d-flex">
                            <h1>${item.logo}</h1>
                            <input type="checkbox" id="check"/>
                            <label for="check" id="toggleBtn">
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.0727539" width="15" height="3" rx="1.5" fill="#303642" />
                                    <rect y="8.07275" width="11" height="3" rx="1.5" fill="#303642" />
                                </svg>
                            </label>
                            <div class="menu" id="menu">
                                <div class="menu-list">
                                ${
                                    item.menu.map((list)=>{
                                        return `<a href="">${list}</a>`
                                    }).join('')
                                }
                                </div>
                                <div class="cto-btn">
                                    <button>Contact Us</button>
                                    <button>Get A Quote</button>
                                </div>
                            </div>
                        </div>
                    ` 
                    // toggle menu
                    toggleBtn.addEventListener('click',()=>{
                        if(!document.getElementById('check').checked){
                            toggleBtn.innerHTML = `
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.667114" y="11.0754" width="15" height="3" rx="1.5" transform="rotate(-47.6164 0.667114 11.0754)" fill="#303642" />
                            <rect x="2.02002" y="0.076416" width="16.1214" height="3" rx="1.5" transform="rotate(42.3269 2.02002 0.076416)" fill="#303642" />
                            </svg>
                        `
                        }
                        else{
                            toggleBtn.innerHTML = `
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0727539" width="15" height="3" rx="1.5" fill="#303642" />
                            <rect y="8.07275" width="11" height="3" rx="1.5" fill="#303642" />
                            </svg>
                        `
                        }
                    })
                })
            })
        }
    )
)