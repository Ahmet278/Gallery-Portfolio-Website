// JavaScript dosyası (script.js)

// Görüntülerin bulunduğu div'leri seç
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Her bir görüntüye tıklanıldığında
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hikayeyi göster
        const caption = item.querySelector('.caption');
        caption.style.display = (caption.style.display === 'block') ? 'none' : 'block';

        // Diğer görüntülerin altındaki hikayeleri gizle
        portfolioItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.caption').style.display = 'none';
            }
        });
    });
});
