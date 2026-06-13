document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen link card
    const cards = document.querySelectorAll('.link-card');

    // Tambahkan event listener untuk efek glow interaktif yang mengikuti kursor
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            // Kalkulasi posisi X dan Y mouse relatif terhadap card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update variabel CSS lokal pada card ini untuk mengatur posisi glow
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
