const data = [
    {
        image: 'https://randomuser.me/api/portraits/women/23.jpg',
        name: 'Sarah Chips',
        note: 'There is more to the usage of this than i ever had thought. feel so great and appreciated.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Mary Mary',
        note: 'I\'ve tried to imagine myself and the world at large without the possiblities of this and it seems impossible.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/25.jpg',
        name: 'Jane Doe',
        note: 'I would rather smile through the entire process of this, whatever it could it could mean.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/26.jpg',
        name: 'Ann kvngLee',
        note: 'I didn\'t know what would happen next and that was the faith that kept me srong through it all.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/27.jpg',
        name: 'Adorable Lee',
        note: 'They say believe and that is the only thing I had done through this process. I believed in myself.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        name: 'Pretty Jason',
        note: 'It\'s time to say to say thank you and I don\'t know how to go about it. I guess you should have added it to the Directions for Use... lol :).'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/29.jpg',
        name: 'Kenny Rays',
        note: 'Everyone deserves to be happy and i am so glad you gave me the opportunity to be an everyone.'
    },
];

const testimonials = testimonialIterator(data);

// Next Event
document.getElementById('nextBtn').addEventListener('click', nextTestimonial);

// Next Testimonial Display
function nextTestimonial() {
    const currentTestimonial = testimonials.next().value;

        document.getElementById('customerImage').src = `${currentTestimonial.image}`;
        document.getElementById('customerName').innerText = `${currentTestimonial.name}`;
        document.getElementById('customerNote').innerText= `${currentTestimonial.note}`;
}

// Prev Event
document.getElementById('prevBtn').addEventListener('click', prevTestimonial);

// Prev Testimonial Display
function prevTestimonial() {
    const previousTestimonial = testimonials.prev().value;

        document.getElementById('customerImage').src = `${previousTestimonial.image}`;
        document.getElementById('customerName').innerText = `${previousTestimonial.name}`;
        document.getElementById('customerNote').innerText= `${previousTestimonial.note}`;
}




// Testimonial lterator
function testimonialIterator(testimonials) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < testimonials.length ? 
            { value: testimonials [nextIndex++], done: false } :
            { value: testimonials [nextIndex--], done: true }
        },
        prev: function() {
            return nextIndex < testimonials.length ? 
            { value: testimonials [nextIndex--], done: false } :
            { value: testimonials [nextIndex++], done: true }
        }
    }
}