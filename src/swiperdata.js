async function getdata() {
    try {
        let response = await fetch('..//public/data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        let data = await response.json();
        enter(data.data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

function enter(maindata) {
    document.querySelector('.swiper-wrapper').innerHTML = maindata.map(pdata => {
        return `
        <div class="swiper-slide">
            <div class='swiper-stars'></div>
            <p class='swiper-comment-description'>${pdata.description}</p>
            <div class='person-data'>
                <img src='./imgs/icons/person.svg' style='height: 100%;' alt='Person'>
                <div>
                    <p class='swiper-name'>${pdata.name}</p>
                    <p class='swiper-role'>${pdata.role}</p>
                </div>
                <span class='person-data-line'></span>
                <img src='${pdata.company}' class='company' alt='Company'>
            </div>
        </div>
        `;
    }).join('');
    ad(maindata);
}

function ad(maindata) {
    const starsContainers = document.querySelectorAll('.swiper-stars');
    starsContainers.forEach((el, index) => {
        let stars = '';
        for (let i = 0; i < maindata[index].stars; i++) {
            stars += `<img src='./imgs/icons/star.svg' alt='Star' />`;
        }
        el.innerHTML = stars;
    });
}

getdata();
