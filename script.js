document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('reversedText').value = reversedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const reversedText = document.getElementById('reversedText');
    reversedText.select();
    document.execCommand('copy');
    alert('टेक्स्ट कॉपी हो गया है!');
});
