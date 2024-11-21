"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Button, Typography, Paper, Pagination, Rating, Dialog, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

export default function SearchBar() {
  // Estados para manejar la entrada de búsqueda, los resultados y la paginación
  const [inputValue, setInputValue] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [selectedMovie, setSelectedMovie] = React.useState(null); // Estado para la película seleccionada
  const [dialogOpen, setDialogOpen] = React.useState(false); // Estado para controlar el diálogo
  const itemsPerPage = 6;

  // Función para realizar la solicitud al backend
  const searchMovies = async () => {
    if (inputValue.trim() === '') {
      alert('Por favor, ingrese un término de búsqueda.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/search_movie?query=${inputValue}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data);
        setPage(1);
      } else {
        console.error('Error al realizar la búsqueda');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  // Función para manejar el cambio de página
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Función para abrir el diálogo
  const openDialog = (movie) => {
    setSelectedMovie(movie);
    setDialogOpen(true);
  };

  // Función para cerrar el diálogo
  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedMovie(null);
  };

  // Obtener los elementos de la página actual
  const paginatedResults = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
        <Autocomplete
          freeSolo
          id="search-bar"
          options={inputValue.length >= 1 ? results.map((movie) => movie.title) : []}
          onInputChange={(event, value) => setInputValue(value)}
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
                style: { borderRadius: 20 },
              }}
              sx={{ width: 400 }}
            />
          )}
        />
        <Button variant="contained" sx={{ marginTop: 2 }} onClick={searchMovies}>
          Search
        </Button>

        {/* Mostrar resultados */}
        {results.length > 0 && (
          <Box mt={4} sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Resultados de la búsqueda:
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {paginatedResults.map((movie, index) => (
                <Grid size={{xs:12,sm:6, md:4 }}  key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      height: 450,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        transform: "scale(1.05)",
                        transition: "transform 0.4s ease-in-out",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    onClick={() => openDialog(movie)} // Abre el diálogo al hacer clic
                  >
                    {movie.poster_url && (
                      <Box sx={{ mb: 2 }}>
                        <Image
                          src={movie.poster_url}
                          alt={movie.title}
                          width={200}
                          height={300}
                          style={{ borderRadius: 8 }}
                        />
                      </Box>
                    )}
                    <Typography variant="subtitle1">{movie.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {new Date(movie.release_date).getFullYear()}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Rating
                        name="movie-rating"
                        value={movie.vote_average / 2}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                        {movie.vote_average.toFixed(1)}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Paginación */}
            <Box mt={4}>
              <Pagination
                count={Math.ceil(results.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Box>
        )}

{selectedMovie && (
          <Dialog open={dialogOpen} onClose={closeDialog} fullWidth maxWidth="md">
            <Box display="flex" p={3}>
              {/* Sección de la imagen */}
              <Box flex="1" mr={2}>
                <Image
                  src={selectedMovie.poster_url}
                  alt={selectedMovie.title}
                  width={300}
                  height={450}
                  style={{ borderRadius: 8 }}
                />
              </Box>

              {/* Sección de contenido */}
              <Box flex="2">
                <Typography variant="h4" gutterBottom>
                  {selectedMovie.title}
                </Typography>
                <Box mb={2} display="flex" flexWrap="wrap">
                  {selectedMovie.genres.map((genre, index) => (
                    <Chip key={index} label={genre} color="primary" sx={{ mr: 1, mb: 1 }} />
                  ))}
                  
                </Box>
                
                <Typography variant="body1">{selectedMovie.overview}</Typography>
              </Box>
            </Box>
          </Dialog>
        )}
        
      </Box>
    </Container>
  );
}
