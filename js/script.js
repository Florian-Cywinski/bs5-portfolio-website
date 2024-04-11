// Add custom JavaScript here
function runTypingEffect() {
    const text = 'I am Brad Traversy.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;    // To have a delay of 100 ms per type
  
    typeText(text, typingElement, typingDelay);
}
  
function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
        typingElement.textContent += text.charAt(i);    // To add each letter to the DOM
        }, delay * i);
    }
}
  
document.addEventListener('DOMContentLoaded', runTypingEffect);
