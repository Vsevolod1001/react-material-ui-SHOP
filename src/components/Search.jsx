import { TextField } from '@mui/material';

export const Search = ({ value, hendleChange }) => {
  return (
    <div>
      <TextField
        label="search"
        variant="standard"
        type="text"
        value={value}
        onChange={hendleChange}
        sx={{ mb: '1.5rem' }}
      />
    </div>
  );
};
