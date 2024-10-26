//hack to minimize code
function toggleDropdown(el) {
    let has_class = el.parentNode.classList.contains('is-active');
    document.querySelectorAll('.p-navigation__item--dropdown-toggle').forEach(dd => 
        dd.classList.remove('is-active')
    );
    el.parentNode.classList.toggle('is-active', !has_class);
}


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}









docReady(function() {
    // DOM is loaded and ready for manipulation here

    //hack for the /sauce/index.html page to send a form via the mailto href attribute
    //not using form action="mailto:recipient@example.com because non standard entries
    let sauce_submit = document.getElementById('sauce_submit');
    if(sauce_submit) {
        sauce_submit.addEventListener('click', (el)=> {
            let contact_email = 'opendesign@canonical.com'; //this may have to change before summit

            let mail = 'mailto:' + contact_email + '?subject=Hello Open Design Working Group&body=';
            
            mail += 'First%20name%3A%20' + encodeURIComponent(document.getElementById('sauce_firstName').value) + '%0D%0A';
            mail += 'Last%20name%3A%20' + encodeURIComponent(document.getElementById('sauce_lastName').value) + '%0D%0A%0D%0A';
            mail += 'Comments%3A%20' + encodeURIComponent(document.getElementById('sauce_comments').value) + '%0D%0A';
            
            console.log(mail);
            sauce_submit.setAttribute('href', mail);
        });

    }
});



