document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = document.getElementById('textToCopy');
    const range = document.createRange();
    range.selectNode(textToCopy);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    
    selection.removeAllRanges();
});
