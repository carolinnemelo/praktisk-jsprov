// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti:
// <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
async function getPosts() {
    try {
        const response = await fetch(url);
        const data = await response.json()
        // console.log(data);
        const postsById = data.filter(element => {
            const postTitle = element.title;
            const postBody =  element.body;
            if (element.userId === userId) {
                return element
                // console.log(`Title: ${postTitle},
                // \nContent: ${postBody}`) ;
            } 
            
            
        })
        return displayPosts(postsById)
    } catch (error) {
        console.error(error);
    }
}
getPosts();


function displayPosts(postsById) {
    
    console.log(postsById);

    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.id = 'posts'
    body.appendChild(div); 
    postsById.map(element => {
        const postTitle = element.title;
        const postBody =  element.body;
        const p = document.createElement('p');
        p.textContent = `Title: ${postTitle},
        Content: ${postBody}`
        div.appendChild(p)

    })

}
