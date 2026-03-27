const videoData = [
    {
        id: 'p5Xux0SRjQg',
        title: 'Grupo RPP y Pacífico Seguros lanzan campaña “Preparados estamos más seguros”',
        image: 'https://p-gruporpp-media.s3.amazonaws.com/2026/03/26/1852038maxresdefault-1jpg.jpg',
        duration: '2:07' // Placeholder duration
    },
    {
        id: 'MsezmSNnYRE',
        title: 'RPP y Pacífico impulsan campaña de prevención ante desastres | ENTREVISTA #ENCENDIDOSRPP',
        image: 'https://p-gruporpp-media.s3.amazonaws.com/2026/03/26/1852037maxresdefaultjpg.jpg',
        duration: '9:25'
    }
];

const videoPlayer = document.getElementById('main-video-player');
const videoTitle = document.getElementById('main-video-title');
const videoPlaylist = document.getElementById('video-playlist-container');

function loadVideo(index) {
    const video = videoData[index];
    // Use autoplay when switching videos manually
    videoPlayer.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    videoTitle.textContent = video.title;
    renderPlaylist(index);
}

function renderPlaylist(activeIndex) {
    videoPlaylist.innerHTML = '';
    
    videoData.forEach((video, index) => {
        const isActive = index === activeIndex;
        
        const item = document.createElement('div');
        item.className = `c-playlist-item ${isActive ? 'c-playlist-item--active' : ''}`;
        
        // Use onclick to handle user selection
        item.onclick = () => {
            if (!isActive) loadVideo(index);
        };
        
        item.innerHTML = `
            <div class="c-playlist-thumb"><img src="${video.image}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: contain;"></div>
            <div class="c-playlist-info">
                <h4>${video.title}</h4>
                <small class="${isActive ? 'u-text-blue' : 'c-playlist-info__time'}">${isActive ? 'AHORA' : video.duration}</small>
            </div>
        `;
        
        videoPlaylist.appendChild(item);
    });
}

// Initialize player on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initial load without autoplay to prevent browser blocks
    const initialVideo = videoData[0];
    videoPlayer.src = `https://www.youtube.com/embed/${initialVideo.id}`;
    videoTitle.textContent = initialVideo.title;
    renderPlaylist(0);
});
