function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
    const widgets = document.querySelectorAll('div');
    widgets.forEach(function(currentWidget) {
      currentWidget.classList.add('widget');
    });
    


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  function generaterandNumber () {
    randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }
    
    const randomQuote = generaterandNumber();
    const quoteWidget = document.querySelector('.quoteoftheday');
    quoteWidget.insertAdjacentHTML('beforeend', `<div>${quotes[randomQuote].quote}</div>`);
    quoteWidget.insertAdjacentHTML('beforeend', `<div>${quotes[randomQuote].author}</div>`);
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
    const corporateWidget = document.querySelector('.corporatespeak');
    corporateWidget.insertAdjacentHTML('beforeend', `<p>We need to ${verbs[generaterandNumber()]} our ${nouns[generaterandNumber()]} ${adverbs[generaterandNumber()]} in order to ${verbs[generaterandNumber()]} our ${nouns[generaterandNumber()]} ${adverbs[generaterandNumber()]}.</p>`);
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
    // Start an interval that logs a message every second
    let count = 5;
    const newElement = document.createElement('p');
    newElement.textContent = `T-minus ${count}...`
    document.querySelector('.countdown').insertAdjacentElement('beforeend',newElement);
    const countdown = setInterval(() => {
      newElement.textContent = `T-minus ${count - 1}...`;
      count--;
    }, 1000);

    // Stop the interval after 5 seconds
    setTimeout(() => {
      clearInterval(countdown);
      newElement.textContent = `Liftoff! 🚀`;
    }, 5000);


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
    const randNumber = generaterandNumber();
    const person = `${people[randNumber]['fname']} ${people[randNumber]['lname']}`;
    const birthYear = people[randNumber]['dateOfBirth'].split('-')[0];
    const friends = people[randNumber]['friends'];
    const friendsArray = [];

    const newParagraph = document.createElement('p');
    const friendsWidget = document.querySelector('.friends');
    friendsWidget.insertAdjacentElement('beforeend', newParagraph);
    if (friends.length === 0) {
      newParagraph.textContent = `${person} was born in ${birthYear} and has no friends.`;
    } else {
      for (let i = 0; i < friends.length; i++) {
        const object = people.filter(obj => obj['id'] === friends[i]);
        friendsArray.push(`${object[0]["fname"]} ${object[0]["lname"]}`);
      }

      newParagraph.textContent = `${person} was born in ${birthYear} and is friends with `;

      for (let i = 0; i < friendsArray.length; i++) {
        if (i === friendsArray.length - 1) {
          newParagraph.textContent += `and ${friendsArray[i]}.`
        } else {
          newParagraph.textContent += `${friendsArray[i]}, `;
        }
        
      }
      
    }
    
    

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
    widgets.forEach(function(currentWidget) {
      currentWidget.setAttribute('tabindex', '0');
    });

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
