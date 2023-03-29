export const FormSearchUser = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="userSearch" />
      <button type="submit">Search</button>
    </form>
  );
};
