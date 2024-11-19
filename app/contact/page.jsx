import {
    Box,
    Container,
    Paper, //una especie de tarjeta
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
  import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
  import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
  import CodeIcon from "@mui/icons-material/Code";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import EmailIcon from "@mui/icons-material/Email";
  import PhoneIcon from "@mui/icons-material/Phone";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  
  export default function Contact() {
    return (
      <Container maxWidth="lg" >
        <Container sx={{ mt: 8}}>
          <Typography variant="h3" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ mb: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  "&:hover": {
                    //como va a reaccionar cuando le coloquemos el mause encima
                    backgroundColor: "rgba(0,0,255,0.1)", //modificar el color del paper
                    transform: "scale(1.05)", //cuanto tardara esa transformacion 1.05 milisegundos
                    transition: "transform 0.4s ease-in-out", // desde adentro hacia a fuera
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", //aumentar la sombra
                  },
                }}
              >
                <HelpOutlineIcon color="primary" fontSize="large" />
                <Typography variant="h6">Help Center</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ mb: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,255,0.1)",
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <ChatBubbleOutlineIcon color="primary" fontSize="large" />
                <Typography variant="h6">Blog</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ mb: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,255,0.1)",
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <WorkOutlineIcon color="primary" fontSize="large" />
                <Typography variant="h6">Careers</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ mb: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,255,0.1)",
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CodeIcon color="primary" fontSize="large" />
                <Typography variant="h6">Developer Area</Typography>
              </Paper>
            </Grid>
          </Grid>
  
          <Box sx={{ mt: 8}}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      position: "relative", //no coloque los items a la misma altura
                      width: "100%", //box mapa
                      height: "300px",
                      overflow: "hidden", //si sale de los 300px se oculte
                      borderRadius: "8px", //redondear 8 pixeles
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", //sombra
                      border: "2px solid #ddd", //sombre desde la derecha
                    }}
                  >
                    <iframe
                      width="100%" //marco
                      height="100%"
                      style={{ border: 0, borderRadius: "8px" }}
                      src="https://www.google.com/maps/embed?...&loading=lazy" //direccion ficticia
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0" //alto como ancho del borde
                    ></iframe>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Typography variant="h6" sx={{ mt: { xs: 1, md: 2 } }}>
                    Contact Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Main Address:" //cada lista tiene su icono y su texto
                        secondary="#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India" //listas de material UI
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Email Address:"
                        secondary="info@acloudemy.mx" //divisor es una franja gris entre cada elemento
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Phone Number:"
                        secondary="+911234567890, 01610000000"
                      />
                    </ListItem>
                  </List>
                  <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                    <IconButton
                      color="primary"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#e3f2fd",
                          color: "#1DA1F2",
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      color="primary" //botoncitos
                      sx={{
                        "&:hover": {
                          backgroundColor: "#e3f2fd",
                          color: "#1DA1F2",
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#e3f2fd",
                          color: "#0077B5",
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#e3f2fd",
                          color: "#FF0000",
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    >
                      <YouTubeIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Container>
    );
  }
  