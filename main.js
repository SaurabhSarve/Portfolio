
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector('#about');
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  });
  
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Thank you for your message, " + name + "! We'll get back to you soon.");
    document.getElementById('contact-form').reset();
});
