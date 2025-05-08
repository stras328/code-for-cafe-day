function openForm() {
    document.getElementById('formModal').style.display = 'block';
    document.getElementById('formOverlay').style.display = 'block';
}

function closeForm() {
    document.getElementById('formModal').style.display = 'none';
    document.getElementById('formOverlay').style.display = 'none';
}

const cafes = [
    {
        name: "Lucky Lucky Café",
        category: ["good music", "meals too!"],
        info: "one of my personal favorite spots near campus- they section off seating into a laptop friendly and a social section! the music is always stellar too- lots of Matt Maltese and cozy indie stuff. Their drinks are alright, but the real stars are their baked goods... i love their cardamom buns!",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/luckylucky.jpg",
        menuLink: "https://luckyluckycafe.com/pages/menu-2",
        mapLink: "https://maps.app.goo.gl/7JBg74grmNLEo7w1A",
        reviewFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfR668QhUpmLrD3EeSaBErFdO6cJAoArXrZTnMayyPL_cgLIg/viewform?usp=header",

    },

    {
        name: "Caffé Reggio",
        category: ["meals too!", "open late"],
        info: "while it's one of my favorite spots in Manhattan in general for their pesto ravioli and stellar vibes, they're laptop friendly for at least 60 minutes at a time! I've brought a book in the afternoon a few times now- I'd recommend keeping work to the afternoon here, as it's open until 4 AM and gets really social really quickly!",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/caffe%20reggio.webp",
        menuLink: "https://www.caffereggio.com/menu/",
        mapLink: "https://maps.app.goo.gl/XTSyf7nNnLUYL4zi8",
        reviewFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBjKJMKzyDhzYuHfxSipe6FiNsNYuvK9F2g8ITy2zfa6EOrQ/viewform?usp=header",

    },

    {
        name: "Black Cat LES",
        category: ["good music", "open late", "lots of seating"],
        info: "While I can't vouch for their food (all they had when I went was a container of Costco muffins...) something in the air here makes me insanely productive. The vibe is dive bar meets cozy cabin? Cool people, cool energy, and I managed to write five articles in one sitting here... so if you need to lock in keep this one in mind! Also... their wifi is on a chalkboard on the counter wink wink",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/black%20cat%20LES.jpg",
        menuLink: "https://blackcatles.com/menu",
        mapLink: "https://maps.app.goo.gl/6CdFxFCKFJeW5t8HA",
        reviewFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScrHahvv6dcOq40qc3VD3ckrh_8qm59I4nD3FPSqVTRvNd5MA/viewform?usp=header",

    },

    {
        name: "Dialogue Coffee & Flowers",
        category: ["stellar drinks"],
        info: "This one's trickier as their seating room fills up reallyyy quickly, but oh man is it worth it if you can snag a table! Their drinks are super specialized and absolute heaven- you can't go wrong with any of their matchas!",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/Dialogue.jpg",
        menuLink: "https://www.instagram.com/dialogue_nyc/",
        mapLink: "https://maps.app.goo.gl/Jt4gWpMEjJa2VBh19",
        reviewFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSf--nVQP_URbAWqffItpx9kq9kxRrBVq0jsotCJsAE9uueWiw/viewform?usp=header",

    },

    {
        name: "The Lost Draft",
        category: ["lots of seating", "open late"],
        info: "A bit simple in terms of menu but perfect for working! A ton of outlets (and free wifi), literally every person when I was there was on a laptop! Occassionally they'll have larger tables set up for group work too if that's what you're looking for!",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/thelostdraft.jpg",
        menuLink: "https://order.online/store/the-lost-draft-new-york-28095876/?hideModal=true&pickup=true&redirected=true&utm_source=sdk&visitorId=196ab72b02e8f8fe8",
        mapLink: "https://maps.app.goo.gl/7fRRxEnrEZqDk8wX7",
        reviewFormLink: "https://forms.gle/QrCjqN7TkV7m9euJA",

    },

    {
        name: "Remi43 Flower & Coffee",
        category: ["lots of seating", "stellar drinks", "opens early"],
        info: "A personal favorite of mine- I've gone to work and to hang out here often! The vibe is good, the variety of baked goods is impressive, and their drinks are to die for. Their floor-to-ceiling windows make you feel like you're in an aquarium in the best way possible, there's a small upstairs seating area I prefer sectioned off by a spiral staircase, and it's teeming with plants! You can't really go wrong with whatever you order but I'm always partial to their berry rose tea latte (iced)!",
        image: "https://file.garden/Zc6v_enOJ3-bBJBn/cafe%20directory/Remi43.jpg",
        menuLink: "https://www.seamless.com/menu/remi-flower--coffee-906-2nd-ave-new-york/8523912",
        mapLink: "https://maps.app.goo.gl/AXwXgyabnHmne9Tc7",
        reviewFormLink: "https://forms.gle/zqrLFth8ajDupL6q9",

    },

];


let reviewsData = [
    {
        name: "Caffé Reggio",
        review: "Caffe reggio has a great environment! love the dim lighting and chill vibes from the staff. the food is a little pricey but good. i've gone for just coffee before and stayed for hours so food isn't necessary, but the ravioli is fire!! 🔥",
        reviewer: "sara jo grant"
    },
  
];



function displayCafes(list) {
    const cafeList = document.getElementById("cafeList");
    cafeList.innerHTML = '';
    list.sort((a, b) => a.name.localeCompare(b.name)).forEach(cafe => {
        const div = document.createElement('div');
        div.className = 'cafe';
        div.textContent = cafe.name;
        div.onclick = () => showPopup(cafe);
        cafeList.appendChild(div);
    });
}

function showPopup(cafe) {
    // Filter the reviewsData to get reviews for the specific cafe
    const cafeReviews = reviewsData.filter(r => r.name === cafe.name);
    
    // Create HTML for the reviews section with the new styling
    const reviewsHTML = cafeReviews.length > 0
        ? cafeReviews.map(r => `
            <div class="review-bubble">
                <p class="review-text">"${r.review}"</p>
                <p class="review-author">– ${r.reviewer}</p>
            </div>
        `).join('')
        : "<p><i>no reviews yet!</i></p>";

    // Add all the café and reviews data to the popup
    document.getElementById('popup').innerHTML = `
        <h2>${cafe.name}</h2>

        <img src="${cafe.image}" 
            alt="${cafe.name}" 
            style="max-width: 100%; 
            height: auto;">

        <p>${cafe.info}</p>

        <h3>Reviews:</h3>

        ${reviewsHTML}

        <div class="popup-buttons">
            <a href="${cafe.menuLink}" target="_blank" class="popup-button">view menu</a>
            <a href="${cafe.mapLink}" target="_blank" class="popup-button">bring me there!</a>
        </div>

        <div style="margin-top: 15px;">
          <button onclick="openReviewForm('${cafe.reviewFormLink}')" class="popup-button" style="width: 50%;">leave a review</button>  
        </div>
    `;

    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}




function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function filterCategory(cat) {
    if (cat === 'all') {
        displayCafes(cafes);
    } else {
        displayCafes(cafes.filter(c => c.category.includes(cat)));
    }
}

function surpriseMe() {
    const randomCafe = cafes[Math.floor(Math.random() * cafes.length)];
    showPopup(randomCafe);
}

displayCafes(cafes);

function openReviewForm(link) {
    document.getElementById('reviewIframe').src = link;
    document.getElementById('reviewOverlay').style.display = 'block';
    document.getElementById('reviewModal').style.display = 'block';
}

function closeReviewForm() {
    document.getElementById('reviewOverlay').style.display = 'none';
    document.getElementById('reviewModal').style.display = 'none';
    document.getElementById('reviewIframe').src = ""; // Clear form
}


