document.querySelector('#compare').addEventListener('click', function(event) {
  var username1 = document.querySelector('#username-1')

  axios.all([axios.get('https://api.github.com/users/' + username1.value)]).then(result => {
    var user1 = result[0].data

    replace('user-1', user1);
  })
});

function replace(user, data) {
  var container = document.querySelector('#' + user)
  var avatar = container.querySelector('.avatar')
  var username = container.querySelector('.username')
  var name = container.querySelector('.name span')
  var repos = container.querySelector('.public-repos span')
  var followers = container.querySelector('.followers span')
  var location = container.querySelector('.location span')
  var html_url = container.querySelector('.html_url a')

  avatar.src = data.avatar_url
  username.textContent = data.login
  name.textContent = data.name
  repos.textContent = data.public_repos
  followers.textContent = data.followers
  location.textContent = data.location
  html_url.href = data.html_url
  html_url.textContent = data.html_url
}
