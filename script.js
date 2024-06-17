document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = document.getElementById('textToCopy').innerHTML;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    document.getElementById('confirmationMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('confirmationMessage').style.display = 'none';
    }, 2000);
});
