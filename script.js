let testimonials = [
    {
        name: 'Daniela O.',
        color: 'var(--orange)',
        location: 'Oakville, ON',
        quote: 'Mark has made such a huge impact on our son’s confidence in math. In a short time, we have seen such a huge improvement not only in skill but in effort as well. Mark’s ability to connect with students and help them understand concepts is amazing!'
    },
    {
        name: "S. van der Spuy",
        color: "var(--pink)",
        location: "Oakville, ON",
        quote: "Mr. Chan is a godsend, period. We have worked with many tutors over the years, and are so thankful to have finally found a tutor who 'gets it.'  Being a teacher with experience puts Mark in a different league from other tutors. His experience with students of all ages, in and out of the classroom, is a valuable asset as he has his finger on the pulse of what is truly needed to help our sons thrive.  Mark works with both our children on their different needs, with patience and grace. Mark has a knack for being able to connect with his students and 'meet them where they're at.' His lessons are engaging and challenging, as he works genuinely to help his students reach and see success within themselves. As a parent, I appreciate Mark being punctual and exceptionally reliable and for following up each session via text or email complete with description of what was worked on, so that I am kept in the loop of my child's progress and development. Since working with Mark, both of our children have improved their grades and have developed a stronger work ethic around school work in general. Our youngest son is now enjoying the confidence that comes from hard work and the 'never give up' attitude as he is realizing his potential.  For us, improved grades has led to improved sense of self for both our sons, and for that, we are eternally grateful to Mr. Chan."
    },
    {
        name: 'Edyta C.',
        color: 'var(--green)',
        location: 'Oakville, ON',
        quote: 'Thank you Mark! Our son says make math super easy.  Last test was 20/20.'
    },
    {
        name: "Anne H.",
        color: "var(--green)",
        location: "Oakville, ON",
        quote: "Mark has been an exceptional tutor for our son through grades 9 and 10. Mark's dedication and expertise in math have been instrumental in our son's academic success. From the very beginning, Mark demonstrated an impressive ability to explain complex concepts in a way that was both understandable and engaging. His patient and encouraging approach helped our son build confidence and develop a genuine interest in Math. Mark's tutoring not only improved our son's grades but also instilled a deeper appreciation for math. We have seen remarkable progress in our son's performance and attitude towards learning, and we attribute much of this success to Mark's guidance and support. He is not only a skilled educator but also a mentor who genuinely cares about his students' growth. I wholeheartedly recommend Mark for tutoring. He has been an invaluable asset to our family, and I am confident he will continue to inspire and support many more students in their Academic journeys."
    },
    {
        name: 'Deb P.',
        color: "var(--orange)",
        location: 'Etobicoke, ON',
        quote: 'Hi I’m a parent of a twelve year old and recently our daughter took math tutoring in summer with mark Chan.  Initially she was a little bit reluctant to think about doing math in the summertime when she already has fairly good grades.  But after the first day she was very happy to be in the math tutoring  It was a wonderful experience for her and she really enjoyed being challenged with two grades up math problems.  And I think primarily Mark Chan had a lot of empathy for them.  He was really personable, and understood the difficulties they were having when they encountered something they didn’t understand.  Also she said that at school where the explanations are sometimes complicated and roundabout, with Mark they were straightforward, they were interesting.  He put it in context that they could understand really easily.  He had a lot of patience for her and would explain it again if she needed extra help with a very thorough explanation, but minimal frustration, which was wonderful.  His communication skills are excellent, especially with that age group, and he was very knowledgeable.  He seemed to know the concepts very well and had no problem articulating them.  We would definitely recommend math tutoring with Mark, it was a great experience for our daughter.'
    },
    {
        name: 'Rita M.',
        color: 'var(--pink)',
        location: 'Toronto, ON',
        quote: 'Thank you so much for being such a good teacher to my child. As a parent I know perfect teachers are hard to find, but for us (Mark) is the best teacher for my child.'
    },
];

//
// Slideshow
let slideshow = document.querySelector('.slideshow-container');
let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

testimonials.forEach((testimonial, index) => {
    const slide = `
    <div class="mySlides" id="${index}">
        <div class='quote-container'>
            <q class='container'>${testimonial.quote}</q>
        </div>
        
        <h2 class='testimonial-name' style='color: white;'>${testimonial.name}</h2>
        
        <h2 class='testimonial-location' style='color: white;'>${testimonial.location}</h2>
        
    </div>
`;

    slideshow.innerHTML += slide;
});

// Generate number of dots based on number of testimonials
let dotContainer = document.querySelector('.dot-container');
testimonials.forEach((testimonial, index) => {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('onclick', `currentSlide(${index + 1})`);
    dotContainer.appendChild(dot);
});

showSlides(slideIndex);

// 
// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const navOpenModalBtn = document.querySelector('.nav-btn-open');

const openModal = () => {
    modal.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
}

openModalBtn.addEventListener('click', openModal);
navOpenModalBtn.addEventListener('click', openModal);

const closeModal = () => {
    modal.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
}

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);