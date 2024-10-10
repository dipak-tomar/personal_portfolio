"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  VStack,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      date: "Jan 2022 - Present",
      description:
        "Working on frontend and backend solutions, contributing to multiple projects with a focus on user experience and performance.",
    },
    {
      title: "Web Developer",
      company: "Web Solutions Inc.",
      date: "Jun 2020 - Dec 2021",
      description:
        "Developed and maintained websites for various clients, ensuring responsive and accessible design.",
    },
    {
      title: "Intern",
      company: "Startup XYZ",
      date: "Jan 2020 - May 2020",
      description:
        "Assisted in frontend development and conducted user testing to improve the product design.",
    },
  ];
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        I am a passionate developer with experience in building web
        applications.
      </Text>
      {/* <Link href="/projects">
       
      </Link> */}
      <Link as={NextLink} href="/projects" _hover={{ textDecoration: "none" }}>
        <Button colorScheme="teal" variant="solid">
          View My Projects
        </Button>
      </Link>

      <Heading as="h2" size="lg" mb={6} mt={5} ml={2}>
        Experiences
      </Heading>

      <VStack spacing={6} align="stretch">
        {experiences.map((experience, index) => (
          <Box key={index} position="relative" pl={10}>
            <Box
              position="absolute"
              left="0"
              top="0"
              height="100%"
              width="2px"
              bg="gray.300"
            />
            <Box
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={4}
              position="relative"
              zIndex={1}
            >
              <Heading as="h3" size="md" mb={1}>
                {experience.title}
              </Heading>
              <Text fontWeight="bold" color="gray.600" mb={2}>
                {experience.company}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={2}>
                {experience.date}
              </Text>
              <Text color="gray.700">{experience.description}</Text>
            </Box>
            {index < experiences.length - 1 && (
              <Divider orientation="horizontal" borderColor="gray.300" mt={6} />
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
