// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log('Cards API is working correctly', data);

    let articles = data.data.articles;
    let Cards = document.querySelector('.cards-container');
    console.log(articles);

    articles.bootstrap.forEach(card => {
      Cards.appendChild(
        createCard(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.javascript.forEach(card => {
      Cards.appendChild(
        createCard(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.jquery.forEach(card => {
      Cards.appendChild(
        createCard(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.node.forEach(card => {
      Cards.appendChild(
        createCard(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.technology.forEach(card => {
      Cards.appendChild(
        createCard(card.headline, card.authorPhoto, card.authorName)
      );
    });
  })
  .catch(error => {
    console.log('Error, not able to pull the Cards API information', error);
  });

function createCard(headLine, authPic, authorNames) {
  let cards = document.createElement('div');
  let headline = document.createElement('div');
  let author = document.createElement('div');
  let imgDiv = document.createElement('div');
  let authorImage = document.createElement('img');
  let byWho = document.createElement('span');

  cards.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgDiv.classList.add('img-container');

  headline.textContent = headLine;
  author.textContent = authorNames;
  authorImage.src = authPic;
  console.log(authPic);

  cards.appendChild(headline);
  cards.appendChild(author);
  author.appendChild(imgDiv);
  imgDiv.appendChild(authorImage);
  author.appendChild(byWho);

  return cards;
}
