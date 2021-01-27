fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => createUsersCard(data.data))

function createUsersCard(users) {
    const mainSection = document.querySelector('.main-section')

    users.forEach(user => {
        const userCard = document.createElement('div')  
        const userImage = document.createElement('img')
        const userInfo = document.createElement('div')
        const userName = document.createElement('h2')
        const userEmail = document.createElement('h3')

        userImage.setAttribute('src', user.avatar)

        userName.innerHTML = user.first_name
        userEmail.innerHTML = user.email

        userCard.classList.add('user-card')
        userInfo.classList.add('user-card-name')

        mainSection.appendChild(userCard)
        userCard.appendChild(userImage)
        userCard.appendChild(userInfo)
        userInfo.appendChild(userName)
        userInfo.appendChild(userEmail)
    })
}