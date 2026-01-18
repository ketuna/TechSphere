document.addEventListener('DOMContentLoaded', () => {


// პროდუქტის card-ის გენერაცია
    const productsContainer = document.getElementById('products-container');

    const products = [
      { name: "Dyson Zone", model: "XMCA-MA", price: "$949,99", image: "imgs/dyson-zone.png" },
      { name: "DJI Avata", model: "XMCA-CA", price: "$1,200", image: "imgs/dji-avata.png" },
      { name: "Meta Quest 3", model: "HKXA-CA", price: "$3,499", image: "imgs/quest3.png" },
      { name: "Ray-Ban Meta", model: "XMCA-CA", price: "$299,99", image: "imgs/rayban-meta.png" },
      { name: "Devialet Phantom", model: "HKTA-CA", price: "$3,700", image: "imgs/devialet.png" },
      { name: "Apple Vision Pro", model: "HKJA-CA", price: "$3,499", image: "imgs/vision-pro.png" }
    ];

    function displayProducts(items) 
    {
      if(!productsContainer) return;
      
      productsContainer.innerHTML = ""; 
      
      items.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-header">
                <h3>${product.name}</h3>
                <span class="price">${product.price}</span>
            </div>
            <div class="model">${product.model}</div>
            <button>Add To Cart</button>
        `;
        productsContainer.appendChild(card);
      });
    }


    displayProducts(products);

// სელექტორები
    const siteLogo = document.getElementById('site-logo');


    const navHome = document.getElementById('nav-home');
    const navProducts = document.getElementById('nav-products');
    const navAbout = document.getElementById('nav-about');
    const navSignIn = document.getElementById('nav-signin');
    const navSignInMobile = document.getElementById('nav-signin-mobile');
    const btnShopNow = document.getElementById('btn-shop-now'); 
    const viewHome = document.getElementById('home-view');
    const viewProducts = document.getElementById('products-view');
    const viewAbout = document.getElementById('about-view');
    const viewSignIn = document.getElementById('signin-view');


    const allViews = [viewHome, viewProducts, viewAbout, viewSignIn];
    const navLinks = document.querySelectorAll('.nav-links a');


  
//როუთინგის ლოგიკა
    function switchView(targetView, activeLinkID) 
    {
        allViews.forEach(view => {
            if(view) view.style.display = 'none';
        });

      
        if (targetView) {
            if(targetView === viewHome) {
                targetView.style.display = 'block';
            } else {
                targetView.style.display = 'flex'; 
            }
        }

        
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLinkID) {
            const activeLink = document.getElementById(activeLinkID);
            if (activeLink) activeLink.classList.add('active');
        }

        const nav = document.querySelector('.nav-links');
        const burger = document.getElementById('burger');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        }
        window.scrollTo(0, 0);
    }

 // კლიკები 
    if(siteLogo) {
        siteLogo.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(viewHome, 'nav-home');
        });
    }


    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(viewHome, 'nav-home');
    });


    navProducts.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(viewProducts, 'nav-products');
    });

    navAbout.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(viewAbout, 'nav-about');
    });


    if(navSignIn) 
    {
        navSignIn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(viewSignIn, null);
        });
    }

    if(navSignInMobile) {
        navSignInMobile.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(viewSignIn, null);
        });
    }


    if(btnShopNow) {
        btnShopNow.addEventListener('click', () => {
            switchView(viewProducts, 'nav-products');
        });
    }


 
    
    const mapScroll = document.getElementById('mapScroll');
    const filterBtns = document.querySelectorAll('.filter-btn');


    const productPositions = 
    {
        'headset':       { x: 500,  y: 200 },
        'drone':         { x: 1000,  y: 250 },
        'vr-headset':    { x: 1500, y: 250 },
        'smart-glasses': { x: 500,  y: 700 },
        'camera':        { x: 1000,  y: 700 },
        'vr-glasses':    { x: 1500, y: 700 }
    };

    filterBtns.forEach(btn => 
    {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const productKey = this.getAttribute('data-product');
            const pos = productPositions[productKey];

            if (mapScroll && pos) 
            {
                mapScroll.scrollTo({
                    left: pos.x - (mapScroll.clientWidth / 2),
                    top: pos.y - (mapScroll.clientHeight / 2),
                    behavior: 'smooth'
                });
            }
        });
    });


    
    //ბურგერ მენიუ
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');

    if(burger) 
    {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }

});