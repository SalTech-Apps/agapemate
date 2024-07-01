function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allButtons = document.querySelectorAll('button');

    allAnswers.forEach(ans => {
        if (ans !== answer) {
            ans.classList.remove('open');
            ans.previousElementSibling.classList.remove('bg-primary', 'text-white');
            ans.previousElementSibling.querySelector('span:nth-child(2)').textContent = '+';
      
        }
    });

    allButtons.forEach(btn => {
        if (btn !== element && btn.querySelector('span:nth-child(2)')) {
            btn.classList.remove('bg-primary', 'text-white');
            btn.querySelector('span:nth-child(2)').textContent = '+';
        }
    });

    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        element.querySelector('span:nth-child(2)').textContent = '+';
        element.classList.remove('bg-primary', 'text-white');
    } else {
        answer.classList.add('open');
        element.querySelector('span:nth-child(2)').textContent = '-';
        element.classList.add('bg-primary', 'text-white');
    }
}
// 