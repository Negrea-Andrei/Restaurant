import './contact.css';

function contact() {
    const background = document.querySelector('.content');
    background.style.display = 'flex'
    background.innerHTML = '';
    background.style.background = 'unset';
    background.style.height = '100%';

    const container = document.createElement('div');
    container.className = "contact";

    const picture = document.createElement('div');
    picture.className = 'picture';    

    const info = document.createElement('div');
    info.className = 'info';

    const header_contact = document.createElement('h1');
    header_contact.className = 'contact_header';
    header_contact.innerHTML = 'Please contact us at:'

    const p_contact = document.createElement('p');
    p_contact.className = 'contact_p';
    p_contact.innerHTML = "<b>Restaurant Name</b>: Odin's Seafood Restaurant<br> <b>Address</b>: 123 Main Street, City, State, ZIP Code<br> <b>Phone</b>: +1 (555) 123-4567 (not a real phone)<br> <b>Email</b>: info@odinsseafood.com (not a real email)<br> <b>Website</b>: www.odinsseafood.com (not a real website)<br>"

    info.appendChild(header_contact);
    info.appendChild(p_contact);
    container.appendChild(picture);
    container.appendChild(info)
    background.appendChild(container);
}

export default contact;