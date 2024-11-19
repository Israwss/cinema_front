"use client";

import { Box, Container, Grid2, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";

export default function About() {
  const theme = useTheme();
  return (
    <Container  maxWidth="xl">
      <Grid
        container
        spacing={4}
        alignItems="center"
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: { xs: 0, ms: "0 0 0 100px" },
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Story
          </Typography>
          <Box sx={{ borderBottom: "4px solid red", width: "50px" }} />
          <Typography
            variant="'body1"
            sx={{ color: theme.palette.text.light, fontSize: "1.1rem" }}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eos aliquid sed beatae saepe, s it vitae natus sequi necessitatibus
            similique, aut reiciendis id modi! Vel dolor ipsum tempore? Officia,
            quam!
          </Typography>
          <Typography
            variant="'body1"
            sx={{ color: theme.palette.text.light, fontSize: "1.1rem" }}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eos aliquid sed beatae saepe, s it vitae natus sequi necessitatibus
            similique, aut reiciendis id modi! Vel dolor ipsum tempore? Officia,
            quam!
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          alignItems="center" //vertical
          justifyContent="center" //horizontal
        >
          <Image
            src="/500x300.svg"
            alt="Our Story Image"
            width={500}
            height={300}
            priority
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 6,
          mb: 8,
          background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
          py: 8,
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Our Global Reach
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: theme.palette.text.light, fontSize: "1.1rem" }}
          paragraph
        >
          Our company is keader un the industry, providing top-notch services
          and products to client around the world.
        </Typography>
        <Box
          sx={{
            borderBottom: "4px solid red",
            width: "50px",
            width: "50px",
            mb: 4,
            mx: "auto",
          }}
        />

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center" }}
          >
            <SettingsIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              25k
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Reliable Services
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center" }}
          >
            <LightbulbIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              50+
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Advanced Technology
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center" }}
          >
            <PublicIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              40M
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Innovative Solutions
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center"}}
          >
            <HandshakeIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              95%
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Trusted by industry leaders
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center"}}
          >
            <GroupIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              100%
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Customer focus
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 2 }}
            sx={{ textAlign: "center"}}
          >
            <BusinessIcon
              sx={{ fontSize: 40, color: theme.palette.text.light, mb: 1 }}
            />
            <Typography variant="h4" aling="center">
              150
            </Typography>
            <Typography
              variant="subtitile1"
              align="center"
              sx={{ color: theme.palette.text.light }}
            >
              Global presence
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
