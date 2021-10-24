let userData = {
    github: 'laysamelayne',
    linkedin: 'laysa souza',
    instagram:'sz_laysa',
    facebook: 'laysa souza',
    twitter: 'twitter'
}
function changeSocialMediaLinks(){
    for (let li of socialLinks.children) {
        
    }
       const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksuserData[social]}`

}

function getGithubProfileInfos (){
    const url = `https://api.github.com/users/${userData.github}`

    fetch(url).then(response => response.json())
    .then(data => {
       namep.textContent = data.name
       userBio.textContent = data.bio
       userLink.href = data.html_url
       userImage.src = data.avatar_url
       userLogin.textContent = data.login
    })
 }
 getGithubProfileInfos ()
 