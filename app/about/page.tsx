"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box maxWidth="800px" mx="auto" py={10} px={6}>
      <Heading as="h2" size="lg" mb={4}>
        About Me
      </Heading>
      <Text fontSize="md" color="gray.600">
        I am a software developer with a passion for creating elegant and
        efficient solutions. I have experience in full-stack development and
        love working on challenging projects.
      </Text>
    </Box>
  );
}
