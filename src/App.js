import { useState } from "react";
import "./App.css";
import { fetchGitUsers } from "./services/services";
import { UserRender } from "./components/userRender";
import { FormSearchUser } from "./components/formSearchUser";

function App() {
  const [user, setUser] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.elements.userSearch.value;
    setUser(await fetchGitUsers(value));
  };

  return (
    <div className="App">
      <FormSearchUser onSubmit={onSubmit} />
      {user ? <UserRender user={user} /> : null}
    </div>
  );
}

export default App;
