export const fetchGitUsers = async (users) => {
  return await fetch(`https://api.github.com/users/${users}`)
    .then((r) => r.json())
    .then(
      ({
        avatar_url,
        login,
        name,
        html_url,
        followers,
        following,
        public_repos,
      }) => {
        return {
          avatar_url,
          login,
          name,
          html_url,
          followers,
          following,
          public_repos,
        };
      }
    )
    .catch((error) => console.error(error));
};
