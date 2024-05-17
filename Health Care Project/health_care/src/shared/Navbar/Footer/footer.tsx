import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"#3D314F"} py={5}>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={5}>
          <Typography
            color={"white"}
            component={Link}
            href={"/"}
            fontWeight={500}
          >
            Consultation
          </Typography>
          <Typography
            color={"white"}
            component={Link}
            href={"/"}
            fontWeight={500}
          >
            Health Plans
          </Typography>
          <Typography
            color={"white"}
            component={Link}
            href={"/"}
            fontWeight={500}
          >
            Medicine
          </Typography>
          <Typography
            color={"white"}
            component={Link}
            href={"/"}
            fontWeight={500}
          >
            Doctors
          </Typography>
        </Stack>
        <Stack py={5}>
          <hr className=" border-b-2 border-dashed" />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Typography color={"gray"}>
            {" "}
            &copy; 2024 Elegant Health Care{" "}
          </Typography>
          <Typography component="h1" variant="h4" color={"white"}>
            Elega
            <Box component="span" color="primary.main">
              nt
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color={"gray"}>Privacy Terms and Policy</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
