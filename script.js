document.addEventListener('DOMContentLoaded', function () {
    // === EFEK GLOW MENGIKUTI KURSOR ===
    var cards = document.querySelectorAll('.link-card');

    cards.forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // === DETEKSI IN-APP BROWSER ===
    var ua = navigator.userAgent || '';
    var isInApp = /musical_ly|tiktok|instagram|fbav|fban|line\//i.test(ua);

    if (isInApp) {
        // Tambahkan banner kecil untuk user yang pakai TikTok browser
        var banner = document.createElement('div');
        banner.className = 'inapp-banner fade-in';
        banner.innerHTML = '📱 Buka di browser luar untuk pengalaman terbaik';
        var container = document.querySelector('.container');
        if (container) {
            container.insertBefore(banner, container.firstChild);
        }
    }
});
