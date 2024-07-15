function renderMD(markdown) {
    return DOMPurify.sanitize( marked.parse( markdown ) )

}


function liveMaker() {
    document.querySelector('textarea').onkeyup = e => {
        let markdown = document.querySelector('textarea').value;
        document.querySelector('#markup').innerHTML = renderMD(markdown);
        console.clear();
    }
}