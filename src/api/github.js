const octokit = require('@octokit/rest')()

if (process.env.NODE_ENV !== 'testing') {
  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN
  })
}

const reposForOrg = () => {
  console.log('get repos')
  return octokit.repos.getForOrg({
    org: 'tipeio',
    type: 'public'
  }).then(({data}) => {
    console.log('github data: ', data)
    return data
  })
}

module.exports = {
  reposForOrg
}
