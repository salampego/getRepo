export const UserRender = ({ user }) => {
  const {
    avatar_url,
    name,
    login,
    html_url,
    followers,
    following,
    public_repos,
  } = user;
  return (
    <div className="cardUser">
      <div className="cardUserImg">
        <img src={avatar_url} alt="" width="50" />
      </div>
      <ul>
        <li></li>
        <li>
          <b>{name}</b> <a href={html_url}>{login}</a>
        </li>
        <li>
          <b>Followers</b>: <span>{followers}</span>
        </li>
        <li>
          <b>Following</b>: <span>{following}</span>
        </li>
        <li>
          <b>Repos</b>: <span>{public_repos}</span>
        </li>
      </ul>
    </div>
  );
};
