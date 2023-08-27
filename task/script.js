const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        // const answer = question.nextElementSibling;
        // const arrow =question.parentNode.parentNode.lastElementChild;
       const ans = question.nextElementSibling
       const icon =question.childNodes[3]
       console.log(icon)
      
        ans.classList.toggle('answer');
        icon.classList.toggle('rotate')
        icon.classList.toggle('active')
      });
    });
