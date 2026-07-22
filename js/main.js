const container = document.getElementById("eaContainer");

if(container){

    expertAdvisors.forEach(ea=>{

        container.innerHTML += `

        <div class="ea-card">

            <div class="ea-badge">
                MT5
            </div>

            <img src="${ea.cover}" alt="${ea.name}">

            <div class="ea-content">

                <h3>${ea.name}</h3>

                <p>${ea.description}</p>

                <div class="ea-price">
                    ${ea.price}
                </div>

                <div class="ea-rating">
                    ★★★★★
                </div>

                <a href="ea.html?id=${ea.id}" class="btn">
                    View Details
                </a>

            </div>

        </div>

        `;

    });

}

// ================================
// Homepage EA Cards
// ================================

container.innerHTML += `

<div class="ea-card">

    <div class="ea-badge">

        MT5

    </div>

    <img src="${ea.cover}" alt="${ea.name}">

    <div class="ea-content">

        <h3>${ea.name}</h3>

        <p>${ea.description}</p>

        <div class="ea-price">

            ${ea.price}

        </div>

        <div class="ea-rating">

            ★★★★★

        </div>

        <a href="ea.html?id=${ea.id}" class="btn">

            View Details

        </a>

    </div>

</div>

`;



// ================================
// EA Details Page
// ================================

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if (id && document.getElementById("eaName")) {

    const ea = expertAdvisors.find(item => item.id == id);

    if (ea) {

        document.title = ea.name;

        document.getElementById("eaName").innerText = ea.name;

        document.getElementById("eaPrice").innerText = ea.price;

        document.getElementById("eaDescription").innerText = ea.description;



        document.getElementById("coverImage").src = ea.cover;



        // Features

        let featureHTML = "";

        ea.features.forEach(feature => {

            featureHTML += `<li>${feature}</li>`;

        });

        document.getElementById("featureList").innerHTML = featureHTML;



        // Gallery

        let galleryHTML = "";

        ea.screenshots.forEach(image => {

            galleryHTML += `

            <img src="${image}" alt="Backtest">

            `;

        });

        document.getElementById("gallery").innerHTML = galleryHTML;

    }

}

/*==========================
FAQ
==========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/*==============================
SCROLL TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
