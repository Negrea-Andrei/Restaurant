import './about.css'

function about() {
    const background = document.querySelector('.content');
    background.style.display = 'grid'
    background.innerHTML = '';
    background.style.background = 'unset';
    background.style.height = '100%';
    let about = document.createElement('div');
    about.className = 'about';
    let header_about = document.createElement('h1');
    header_about.innerHTML = 'About us';
    let about_details = document.createElement('span');
    about_details.innerHTML = "Welcome to Odin's Seafood Restaurant, where culinary excellence and oceanic delights converge to create an unforgettable dining experience. Located in the heart of city, Odin's embraces the spirit of the sea, offering a haven for seafood enthusiasts and gastronomes alike. Step into the elegant ambiance of Odin's and be transported to a maritime oasis. The restaurant's decor tastefully blends nautical elements with a contemporary touch, featuring hues of blue reminiscent of the ocean and intricate seashell - inspired patterns.Soft lighting creates an intimate atmosphere, perfect for a romantic dinner or a gathering with friends and family."
    about.appendChild(header_about);
    about.appendChild(about_details);

    let image1 = document.createElement('div');
    image1.className = 'image1';

    let image2 = document.createElement('div');
    image2.className = 'image2';

    let hours = document.createElement('div');
    hours.className = 'hours';
    let header_hours = document.createElement('h1');
    header_hours.innerHTML = 'Hours';
    let schedule = document.createElement('span');
    schedule.innerHTML = "Monday: 5:00 PM - 10:00 PM<br> Tuesday: 5:00 PM - 10:00 PM<br> Wednesday: 5:00 PM - 10:00 PM<br> Thursday: 5:00 PM - 10:00 PM<br> Friday: 5:00 PM - 11:00 PM<br> Saturday: 12:00 PM - 11:00 PM<br> Sunday: 12:00 PM - 10:00 PM<br> <br> Please note that these hours are subject to change, and it's always a good idea to contact the restaurant directly or visit their website for the most up-to-date information.";
    hours.appendChild(header_hours);
    hours.appendChild(schedule);
    
    

    background.appendChild(about);
    background.appendChild(image1);
    background.appendChild(image2);
    background.appendChild(hours);
}

export default about;