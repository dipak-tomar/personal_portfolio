"use client";

import { Flex, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex as="nav" justify="center" gap={4}>
        <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link as={NextLink} href="/about" _hover={{ textDecoration: "none" }}>
          About
        </Link>
        <Link
          as={NextLink}
          href="/projects"
          _hover={{ textDecoration: "none" }}
        >
          Projects
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
