"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
  },
];

export default function Projects() {
  return (
    <Box maxWidth="800px" mx="auto" py={10} px={6}>
      <Heading as="h2" size="lg" mb={4}>
        My Projects
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={6}>
        {projects.map((project, index) => (
          <Card
            key={index}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <CardBody>
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text color="gray.600">{project.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
