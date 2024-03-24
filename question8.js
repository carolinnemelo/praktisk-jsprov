// 8.1  (1p) Använd filter för att returnera en ny array "updatedTweets" utan kommentaren med id 823423 (1p)

const tweets = [
    { text: 'Elon Musk is ...', id: 523423 },
    { text: 'Sam Altman is missing since one week ..', id: 823423 },
    { text: 'The future of AI ...', id: 2039842 },
    { text: 'SpaceX is planning human Mars missions...', id: 123523 },
    { text: 'The future is now: Neuralink’s ...', id: 542328 }
  ];

// Din kod här:

const updatedTweets = (arr) => {
  return arr.filter(tweet => {
  return tweet.id !== 823423
})}



// 8.2 (2p) Använd map för att skapa en ny array "tweetsHtml" med endast texten från varje tweet inom <li>-taggar (utgå från updatedTweets-arrayen)
// Omvandla arrayen till en sträng med metoden join('') på arrayen.
// Visa den genererade listan med tweets på sidan inuti <ul id="tweets"></ul>  (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)

// Din kod här:

// const tweetsHtml = (arr) => {
//   const ul = document.createElement('ul');
//   ul.id = 'tweets';
//   document.body.appendChild(ul);

//   arr.map(tweet => {
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     const text = tweet.text;
//     li.innerHTML = text

//   })
// }

const tweetsHtml = (arr) => {
  const ul = document.createElement('ul');
  ul.id = 'tweets';
  document.body.appendChild(ul);

  let liArray = arr.map(tweet => {
    const text = `<li>${tweet.text}</li>`;
    return text
  })
  liArray = liArray.join(' ')
  ul.innerHTML = liArray

}


tweetsHtml(updatedTweets(tweets));


// Test
console.log(updatedTweets(tweets)); // Ska logga en array utan kommentaren med id 823423


// [
//   { text: 'Elon Musk is ...', id: 523423 },
//   { text: 'The future of AI ...', id: 2039842 },
//   { text: 'SpaceX is planning human Mars missions...', id: 123523 },
//   { text: 'The future is now: Neuralink’s ...', id: 542328 }
// ]