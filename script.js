const portfolioImages = [
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/1f476c7b-d1c5-4ae5-a5d7-65bc93c48a67.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/bd3174df-00d3-4a55-9c17-9acd59d46b7d.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/bb0d1279-bfb5-42ce-a8d3-aba2d6ecce64.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/52fc1c22-46c8-4a7e-84d5-da31646fea8e.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/102b1c0f-c979-4e04-8ad7-f404e16ecfe3.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/257dcbad-9bd9-4a7d-bbf1-bd66b4262f10.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/9795a86b-1121-42e0-9089-8ca114a27e11.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/44ae96f1-30e8-420f-b4c8-19c213c0ef92.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/3d19a889-464f-44e8-bca6-c2ca8ae195c6.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/b2737540-7975-4446-8f97-ef6e38d32ce5.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/e2c593d5-5886-4318-ac76-7f4947a2033c.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/9f4c6658-c251-456b-99cd-f82eb512b2a9.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/c7f15b9e-1d7e-4e42-8c3d-53971483e652.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/b30f35fd-1146-4c68-8856-a631bd6df3d0.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/35cf42dd-07a6-48b3-a37d-a71a7c3819fd.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/267a8e52-ae3b-4008-b33e-c680f4f58037.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/31ed0240-efcd-483b-99e5-e4e5e92c69dc.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/32687f26-946a-48a0-99ee-4b3ab958fa44.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/a6a2cc19-2691-4868-99af-d2973b049921.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/73ada0e3-96b7-48ef-8c01-474bec1d3519.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/8f0be1cb-51ad-450f-b604-135ec79948aa.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/a52046f3-b32c-402f-8bc0-c2cf0970baa9.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/096a2f6b-cf83-47e4-8cee-1bcd8d775910.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/3aab1d52-0cb6-4d64-96bb-5a3618813b14.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/d87f2771-e35d-425f-b254-f415711dafae.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/39ccd72a-1a46-4433-b8f4-95f1941657d1.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/d2f0035a-b8ed-47b4-8b4f-cd153adb3f22.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/a42501ee-5d52-47b4-a273-b16c649c3df9.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/b08067e8-2e82-49cb-af18-5a9d5a821e6d.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/ba5cc21c-73d6-4371-bfb2-140d7ead2bb8.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/a74cee09-0a1c-4043-a3ad-bbf14a387dbe.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/8396971f-db11-4be0-a150-6d185bd0e46b.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/da8e1950-44d9-437c-8ecc-9cd6dedf42b8.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/f5276831-cb7e-4a92-a68a-6f7cea3e70e3.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/9277633a-33b2-4102-9022-c95b78ada855.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/24af0a70-8e29-40c4-afee-525b4c596cbc.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/c7a4bf87-4fc5-450e-96d7-52822da0624d.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/c2dd80d3-3b0d-4603-bdcd-5dba03188ca5.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/8344b862-98a1-4c5f-873e-c5f3eaa05876.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/76b22d4f-04a5-4c36-b73c-91dea18e3771.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/28fd2da3-bd6e-4289-bbb4-d0bfe985b3d3.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/07dd801c-114e-4682-9569-8b684425aced.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/edc6a630-380a-4318-8771-58aa70f6af8f.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/6c31217e-e0d7-47e4-a874-97cb276e6038.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/b9d93c64-7092-42cf-8b16-739b8d357fb4.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/a24d52da-6eb7-4cb5-96bc-a99eece7be5a.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/0c1252f0-276e-49ad-85b0-aedbc918c7f3.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/def5ed1a-4ef0-4487-986a-c15d866e1b06.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/5d03ec8a-4953-4611-9753-c723dd098d0a.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/63f08389-857e-4c95-990d-e2e3dd0b37bd.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/6a608897-9a5f-4989-b258-efa03d7967fa.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/eed4e036-0373-4c93-bad5-90206619ca2d.jpg",
"https://i.supaimg.com/e0819e77-d18b-411e-9675-7607c633626e/e01b3f79-f526-4a5b-9910-f0229805ba4b.jpg",
    // Ek nayi image lagani ho toh bas aise likho: 
    // "aapki-image-link.jpg",
];

// 🟢 SMART LOGIC: Image Compressor Proxy
// Yeh function aapki original image ko on-the-fly compress karega WebP format mein
function getCompressedImage(url, width, quality) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}

const galleryContainer = document.getElementById('gallery-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

let currentIndex = 0; 

const observerOptions = {
    root: null,
    rootMargin: '100px', 
    threshold: 0.1 
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 30); 
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 1. GRID KE LIYE: Sirf 600px ki 60% quality image load hogi (Bohot fast!)
portfolioImages.forEach((src, index) => {
    const imgElement = document.createElement('img');
    
    // Auto compression in action for grid
    imgElement.src = getCompressedImage(src, 600, 60); 
    
    imgElement.loading = "lazy"; 
    imgElement.decoding = "async"; 
    imgElement.alt = "Portfolio Image";
    imgElement.dataset.index = index; 
    
    galleryContainer.appendChild(imgElement);
    imageObserver.observe(imgElement);
});

// Cache Next/Prev highly compressed images quietly
function preloadAdjacentImages(index) {
    if (index > 0) {
        const prevImg = new Image();
        prevImg.src = getCompressedImage(portfolioImages[index - 1], 1400, 80);
    }
    if (index < portfolioImages.length - 1) {
        const nextImg = new Image();
        nextImg.src = getCompressedImage(portfolioImages[index + 1], 1400, 80);
    }
}

// 2. INSPECT KE LIYE: Progressive Blur-Up Logic
function updateLightboxImage(index) {
    lightboxImg.classList.remove('loaded'); 
    
    // Original URL
    const originalUrl = portfolioImages[index];
    
    // Generate both URLs
    const lowResUrl = getCompressedImage(originalUrl, 600, 60); 
    const highResUrl = getCompressedImage(originalUrl, 1400, 80); // Inspect ke liye 1400px kafi sharp hai aur light bhi

    // A. Pehle turant low-res dikhao aur blur kardo (kyunki yeh grid me pehle se load ho chuki hai, toh 0 sec me khulegi)
    lightboxImg.src = lowResUrl;
    lightboxImg.classList.add('blur-mode');
    
    preloadAdjacentImages(index);
    
    setTimeout(() => {
        lightboxImg.classList.add('loaded'); // Pop-up animation start
        
        // B. Chup-chaap background me high-res load karo
        const tempImg = new Image();
        tempImg.src = highResUrl;
        
        tempImg.onload = () => {
            // Jaise hi high-res load ho jaye, original se swap karke blur hata do!
            lightboxImg.src = highResUrl;
            lightboxImg.classList.remove('blur-mode'); 
        };
    }, 150); 
}

galleryContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        currentIndex = parseInt(e.target.dataset.index);
        updateLightboxImage(currentIndex);
        lightbox.classList.add('active');
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.classList.remove('loaded');
    // Blur wapis lagao for next time taaki glitch na dikhe
    setTimeout(() => {
        lightboxImg.classList.add('blur-mode');
    }, 400);
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-bg-grid')) {
        closeLightbox();
    }
});

// Swipe Logic...
let startX = 0, startY = 0;

lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    if (!lightbox.classList.contains('active')) return;

    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    
    let diffX = startX - endX;
    let diffY = startY - endY;

    if (Math.abs(diffX) > 40 || Math.abs(diffY) > 40) {
        if (diffX < 0 || diffY < 0) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : portfolioImages.length - 1;
            updateLightboxImage(currentIndex);
        } else if (diffX > 0 || diffY > 0) {
            currentIndex = (currentIndex < portfolioImages.length - 1) ? currentIndex + 1 : 0;
            updateLightboxImage(currentIndex);
        }
    }
}, { passive: true });