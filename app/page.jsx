"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Button } from '@mui/material';

// Ejemplo de datos (puedes usar los que necesites)
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  // Añade más películas si lo deseas
];

export default function SearchBar() {
  // Estado para manejar la entrada de búsqueda
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh" // Para centrar verticalmente en toda la pantalla
      >
        <Autocomplete
          freeSolo
          id="search-bar"
          options={
            inputValue.length >= 1 // Mostrar opciones solo si se ha ingresado algo
              ? top100Films.map((option) => option.title)
              : []
          }
          onInputChange={(event, value) => setInputValue(value)} // Actualiza el estado con la entrada
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar películas"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: 20 }, // Redondear bordes
              }}
              sx={{ width: 400 }} // Ajusta el ancho según prefieras
            />
          )}
        />
        <Button variant="contained" sx={{ marginTop: 2 }}>
          Search
        </Button>
      </Box>
    </Container>
  );
}
