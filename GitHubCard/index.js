/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/lance-smith-acc')
  .then(response => {
    console.log(response.data);
  })
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers','https://api.github.com/users/justsml','https://api.github.com/users/luishrd','https://api.github.com/users/bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(data) {
  // Declare Elements
  const cardShell = document.createElement('div');
          cardImg = document.createElement('img');
          cardInfo = document.createElement('div');
            userName = document.createElement('h3');
            userUsername = document.createElement('p');
            userLocation = document.createElement('p');
            userProfile = document.createElement('p');
              userAddress = document.createElement('a');
            userFollowers = document.createElement('p');
            userFollowing = document.createElement('p');
            userBio = document.createElement('p');

  // Set Classes
  cardShell.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userUsername.classList.add('username');

  // Build Structure
  cardShell.appendChild(cardImg);
  cardShell.appendChild(cardInfo);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(userUsername);
    cardInfo.appendChild(userLocation);
    cardInfo.appendChild(userProfile);
    cardInfo.appendChild(userAddress);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);

  // Assign content
  cardImg.src = data.avatar_url;
  userName.textContent = data.name;
  userUsername.textContent = data.login;
  userLocation.textContent = `Location: ${data.location}`;
  userProfile.textContent = `Profile: `;
  userAddress.textContent = `${data.html_url}`;
  userAddress.href = data.html_url;
  userFollowers.textContent = `Followers: ${data.followers}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = data.bio;

  return cardShell;
}

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/lance-smith-acc')
  .then(response => {
      const newCard = createCard(response.data);
      cards.appendChild(newCard);
  })

  .then(() => {
    followersArray.forEach(data => {
      axios.get(data)
        .then(response => {
          const newFollower = createCard(response.data);
          cards.appendChild(newFollower);
        })
  })
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
