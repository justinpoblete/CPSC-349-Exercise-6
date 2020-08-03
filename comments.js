(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
})(window);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    return response.json()
  })
  .then((response) => {
    console.log(response);
    var result = document.getElementById('app');
    const regex = /\n/g;
    response.forEach(post => {
      var temp = post.body;
      var temp = temp.replace(regex, '<br>');
      result.innerHTML += `<article>
      <h2>${post.title}</h2>
      <p>${temp}</p>
      </article>`;
    });


  })
