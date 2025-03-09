const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); //The Locomotive Scroll is soo good


let swiper;

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: "auto",
                spaceBetween: 20
            }
        }
    });

    const swiperContainer = document.querySelector('.swiper-container');
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    //Don't Work properly i don't know why.
    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
        swiperContainer.classList.add('swiper-container-hover');
    });

    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
        swiperContainer.classList.remove('swiper-container-hover');
    });

    swiperSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'scale(1.2)';
            slide.style.zIndex = '2';
            swiperSlides.forEach(s => {
                if (s !== slide) s.style.opacity = '0.5';
            });
        });

        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'scale(1)';
            slide.style.zIndex = '1';
            swiperSlides.forEach(s => s.style.opacity = '1');
        });
    });
}

function swiperAnimation() {
    const page4 = document.querySelector("#page4");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!swiper) initSwiper();
                else swiper.autoplay.start();
            } else if (swiper) {
                swiper.autoplay.stop();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(page4);
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(() => loader.style.top = "-100%", 2500);
}

function setupMobileMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navPart2 = document.querySelector('#nav-part2');

    hamburger.addEventListener('click', () => {
        navPart2.classList.toggle('active');
    });
}

function setupInfoBox() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const infoBox = document.getElementById('info-box');


    function showInfoBox(event, content) {
        infoBox.textContent = content;
        infoBox.classList.remove('hidden');
        positionInfoBox(event);
    }

    function positionInfoBox(event) {
        const rect = event.target.getBoundingClientRect();
        const boxRect = infoBox.getBoundingClientRect();
        const leftPosition = rect.right + 20;
        const topPosition = rect.top - boxRect.height / 2 + rect.height / 2;

        if (leftPosition + boxRect.width > window.innerWidth) {
            infoBox.style.left = `${rect.left - boxRect.width - 20}px`;
        } else {
            infoBox.style.left = `${leftPosition}px`;
        }

        infoBox.style.top = `${topPosition}px`;
    }

    function hideInfoBox() {
        infoBox.classList.add('hidden');
    }

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const title = item.querySelector('h2').textContent;
            const content = infoContent[title] || 'No additional information available.';
            showInfoBox(e, content);
        });

        item.addEventListener('mousemove', positionInfoBox);
        item.addEventListener('mouseleave', hideInfoBox);
    });
}

function setupTimelineItems() {
    const timelineColumns = document.querySelectorAll('.timeline-column');
    const infoContent = {
        'Pre-Gainax': 'The Daicon III Opening Animation was a landmark in amateur animation, showcasing the talents of future Gainax founders. It featured a schoolgirl fighting various sci-fi and anime characters, setting a high standard in animation quality. Created for the Nihon SF Taikai, it left a lasting impression on the fandom. The Daicon IV Opening further developed these ideas with improved animation, depicting epic sci-fi battles and creative imagery that quickly became a cult classic. This early work hinted at Gainax’s future potential.',
        
        'Foundation': 'Gainax was founded as Daicon Film by university students who had worked on the Daicon III and IV Opening Animations. The name "Gainax" was chosen later, derived from the Japanese term "gaina", meaning "big" or "grand". This period was marked by a sense of adventure and passion for anime, fueling the studio’s ambitious start. The young team aimed to produce high-quality, innovative works, despite limited resources. This bold spirit would come to define Gainax in the anime industry.',
        
        'First Major Work': 'Gunbuster, also known as Aim for the Top!, was Hideaki Anno\'s directorial debut. It popularized many tropes that would become common in mecha anime and became a notable title in the sci-fi genre. The series introduced elements like the combination of drama and comedy, a Gainax signature. It also pioneered realistic space travel elements and time dilation effects, earning it a unique place in anime history. Gunbuster\'s success solidified Gainax’s presence in the industry and demonstrated its creative potential.',
        
        'Neon Genesis Evangelion': 'Evangelion redefined the mecha genre with its complex characters, psychological themes, and unconventional storytelling. It spawned a massive franchise including films, manga, and merchandise, becoming an international phenomenon. Evangelion’s complex symbolism and layered narrative invited numerous interpretations, sparking debates and discussions worldwide. It also broke ground by exploring mental health issues within the genre, marking it as a timeless classic. The series’ success has had a lasting influence on anime, inspiring many creators and studios.',
        
        'FLCL': 'FLCL (Fooly Cooly) was known for its fast-paced story, experimental animation techniques, and rock soundtrack by The Pillows. It gained a significant cult following in the West, known for its unique style and humor. The show featured surreal visuals and an eccentric plot that captured the chaotic nature of adolescence. Its bold visual approach and nonlinear narrative stood out from traditional anime. FLCL’s distinct personality helped cement Gainax’s reputation for creative risk-taking and originality.',
        
        'Gurren Lagann': 'Tengen Toppa Gurren Lagann was praised for its over-the-top action, inspiring story, and memorable characters. It won multiple awards and helped introduce a new generation to Gainax\'s work. With its theme of perseverance and overcoming adversity, it resonated with audiences worldwide. The show’s animation and design were energetic and innovative, pushing the boundaries of the genre. Its legacy lives on, inspiring subsequent works and gaining a lasting fanbase.',
        
        'P&S WGB': 'This series was a departure from Gainax\'s usual style, featuring crude humor and an animation style reminiscent of Western cartoons like The Powerpuff Girls. It combined absurd humor with vibrant visuals, attracting a diverse fanbase. The show’s irreverent take on superhero tropes and its stylized animation made it unique in the anime industry. Though divisive, its experimental nature showed Gainax’s willingness to explore new creative directions. Panty & Stocking has since gained a cult following, showcasing Gainax\'s range and versatility.',
        
        'Bankruptcy': 'Gainax\'s bankruptcy was attributed to years of financial mismanagement and tax issues. Many key staff members had already left to form Studio Khara and Trigger in previous years. The departure of these talented individuals led to a decline in creative output. Gainax struggled to maintain the same level of quality and innovation in its later projects. Despite the hardships, Gainax\'s legacy in anime remains strong due to its groundbreaking early works.',
        
        'Post-Gainax Studios': 'After Gainax\'s financial troubles, many of its most talented members founded new studios. Hideaki Anno established Studio Khara, creating the Rebuild of Evangelion series and continuing his creative vision. Trigger was formed by former Gainax animators and produced hits like Kill la Kill and Little Witch Academia. These new studios have carried Gainax\'s influence forward, blending its legacy with fresh innovation. Despite its challenges, Gainax’s legacy lives on through these spin-off studios and their successful works.',
        
        'Cultural Impact': 'Gainax’s works have left an indelible mark on global pop culture, influencing not only anime but also video games, movies, and art. Evangelion and Gurren Lagann have particularly inspired other creators, becoming touchstones in mecha and psychological genres. Gainax\'s style and storytelling techniques have inspired generations of animators and fans alike. Its themes of self-discovery, resilience, and pushing boundaries continue to resonate with audiences. Gainax\'s impact is seen today in countless homages and references across media.',
        
        'Innovation and Style': 'Known for pushing the limits of animation, Gainax experimented with unconventional techniques, such as using stylized and minimalist animation in FLCL. Gunbuster’s rotoscoped mecha battles set a new standard in realism for the genre. Gainax often integrated real-world physics into its works, giving them a unique sense of weight and realism. The studio’s innovations in animation continue to inspire animators globally. Its willingness to take risks with narrative and form have made its works timeless.',
        
        'Fan Engagement': 'Gainax maintained a close connection with its fans, even during its early days with the Daicon project. The studio often created content that appealed directly to the otaku community, from Gunbuster to Gurren Lagann. Gainax also pioneered fan service in anime, integrating humor and references popular with its audience. This approach helped it build a dedicated fan base that followed its projects loyally. Gainax’s influence on fan culture is still seen today in anime fandom worldwide.'
    };

    timelineColumns.forEach(column => {
        const timelineItems = column.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            const title = item.querySelector('h2');
            const content = infoContent[title.textContent] || 'No additional information available.';
            const contentElement = item.querySelector('.timeline-content');
            
            // Create and append the paragraph element
            const paragraph = document.createElement('p');
            paragraph.textContent = content;
            
            // Style the paragraph
            paragraph.style.color = '#555';
            paragraph.style.fontFamily = "'Nunito Sans', sans-serif";
            paragraph.style.fontSize = '1.1em';
            paragraph.style.lineHeight = '1.6';
            paragraph.style.fontWeight = '400';
            paragraph.style.transition = 'opacity 0.3s ease';

            contentElement.appendChild(paragraph);

            item.addEventListener('click', () => {
                // Toggle 'active' class on click instead of hover
                item.classList.toggle('active');
                
                // Change year color when active
                if (item.classList.contains('active')) {
                    item.style.setProperty('--year-color', '#ff6b6b');  // Change to desired active color
                    paragraph.style.opacity = '1';
                } else {
                    item.style.setProperty('--year-color', '');  // Reset to default
                    paragraph.style.opacity = '0';
                }
                
                // Close other items in the same column
                timelineItems.forEach(i => {
                    if (i !== item) {
                        i.classList.remove('active');
                        i.style.setProperty('--year-color', '');  // Reset others to default
                        i.querySelector('.timeline-content p').style.opacity = '0';
                    }
                });
            });
        });
    });

    // Remove hover events and keep only touch events for mobile
    document.addEventListener('touchstart', (e) => {
        const touchedItem = e.target.closest('.timeline-item');
        if (touchedItem) {
            const column = touchedItem.closest('.timeline-column');
            const timelineItems = column.querySelectorAll('.timeline-item');
            timelineItems.forEach(i => {
                if (i !== touchedItem) i.classList.remove('active');
            });
            touchedItem.classList.toggle('active');
        } else {
            document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    swiperAnimation();
    setupMobileMenu();
    loaderAnimation();
    initSwiper();
    setupTimelineItems();
});

const newsrepo = document.querySelector('.newsrepo');
// console.log(newsrepo.textContent)
newsrepo.addEventListener('click',function(){
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
})

const closem = document.querySelector('.close-modal');
closem.addEventListener('click', function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
})