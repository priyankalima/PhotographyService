header.append(
    Object.assign(
        document.createElement('nav'),
        {
            className: "nav-bar container d-flex",
            innerHTML: `
               <a href="/" class="logo"></a>
               <input type="checkbox" id="toggleMenu">
               <label for="toggleMenu" class="toggle-menu"></label>
               <div class="menu">
                  <div class="menu-list">
                    <a href="#" class="link"></a>
                    <a href="#" class="link"></a>
                    <a href="#" class="link"></a>
                    <a href="#" class="link"></a>
                  </div>
                  <div class="cto-btn">
                     <button>Contact Us</button>
                     <button>Get a quote</button>
                  </div>
               </div>
            `
        }
    )
)
// footer section
footer.append(
    Object.assign(
        document.createElement('section'),
        {
            className: "footer-section",
            id: "footerSection",
            innerHTML: `
              <div class="container d-flex">
                 <div class="newsletter-form">
                    <div class="title">
                    <span>Subscribe to our Newsletter</span>
                    </div>
                    <div class="subscription-form">
                        <input type="text" placeholder="enter your email">
                        <button type="submit">Subscribe</button>
                    </div>
                 </div>
                 <div class="quick-links" id="quickLink"></div>
              </div>
              <div class="copyright container">
                 <span style="opacity:0.4;">copyright @ 2024</span>
              </div>
            `,
            function: addEventListener("load", () => {
                const footer = {
                    "logo": "",
                    "para": "Awsm car ,i really so happy that a branded car gives much smooth driving sensor.",
                    "address": [
                        "HSR Layout,KA,298007,Ka,India",
                        "+91 000-3456-23456",
                        "contact@areta.in"
                    ],
                    "links": [
                        "About",
                        "Blog",
                        "Service"
                    ]
                }
                quickLink.innerHTML = `
                        <div class="quicklink-address">
                              <span>LOGO</span>
                              <span>${footer.para}</span>
                              ${footer.address.map(list => {
                    return `<a href="">${list}</a>`
                }).join("")
                    }
                        </div>
                        <div class="quicklink-links">
                            <span>Quick Link</span>
                            ${footer.links.map(list => {
                        return `<a href="">${list}</a>`
                    }).join("")
                    }
                        </div>
                    `
            })
        }
    )
)