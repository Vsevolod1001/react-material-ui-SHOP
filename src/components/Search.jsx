export const Search = ({ value, hendleChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={hendleChange} />
    </div>
  );
};
