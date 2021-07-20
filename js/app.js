baguetteBox.run('.gallery-grid');

document.getElementById('search').addEventListener('keyup', searchFilter);
let thumbnails = document.getElementsByTagName('img');

function searchFilter() {
    // grabs user input as its being typed into search field and converts it to all upper case for case sensitivity
    let userInput = document.getElementById('search').value.toUpperCase();
    // targets all a tags with the data-caption attribute
    let links = document.querySelectorAll('a[data-caption]');
    // iterating through all the a tags
    for (let i = 0; i < links.length; i++) {
        let captions = links[i].getAttribute('data-caption');
        //turning captions into upper case for case sensitivity
        captions = captions.toUpperCase();
        // check if the current value of the search input is included within any captions, if it is display the associated thumbnail, if not, hide it
        if (captions.includes(userInput)) {
            thumbnails[i].parentNode.style.display = 'block';
        } else {
            thumbnails[i].parentNode.style.display = 'none';
        }
    }
}
