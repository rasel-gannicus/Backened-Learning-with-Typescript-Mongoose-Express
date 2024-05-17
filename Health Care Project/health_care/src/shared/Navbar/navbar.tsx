import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography component="h1" variant="h4">
          Elega
          <Box component="span" color="primary.main">
            nt
          </Box>{" "}
          Health Care
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
          gap={"15px"}
        >
          <Typography component={Link} href={"/"} fontWeight={500}>
            Home
          </Typography>
          <Typography component={Link} href={"/about"} fontWeight={500}>
            About
          </Typography>
          <Typography component={Link} href={"/contact"} fontWeight={500}>
            Contact
          </Typography>
          <Typography component={Link} href={"/doctors"} fontWeight={500}>
            Doctors
          </Typography>
        </Stack>
        <Button>Login</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
