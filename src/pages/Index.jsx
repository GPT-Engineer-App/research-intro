import React from "react";
import { Box, Heading, Text, Stack, Container, Link, Button, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const researchItems = [
    {
      title: "Observation of the 4f1→5d1 electric quadrupole transition in Tm II",
      description: "This research presents the observation of the 4f1→5d1 electric quadrupole transition in singly ionized thulium (Tm II) using high-resolution laser spectroscopy.",
      downloadLink: "https://www.science.org/doi/full/10.1126/science.abg1915",
    },
    {
      title: "Advancements in Quantum Computing",
      description: "An overview of the latest advancements in quantum computing and their potential applications.",
      downloadLink: "/research/quantum-computing.pdf",
    },
    // Add more research items as needed
  ];

  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center" mb={8}>
        <Image src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=JSYjX6sAAAAJ&citpid=1" alt="Jian Tang" borderRadius="full" boxSize="200px" mx="auto" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Pop Kong
        </Heading>
        <Text fontSize="xl">migrant worker at Sandun Town People's Park</Text>
        <Text fontSize="lg" fontStyle="italic" mt={2}>
          Interesting Domain: Inorganic Chemistry
        </Text>
      </Box>

      <Heading as="h2" size="lg" mb={4}>
        Latest Research
      </Heading>
      <Stack spacing={8}>
        {researchItems.map((item, index) => (
          <Box key={index} p={6} boxShadow="md" rounded="md">
            <Heading as="h3" size="md" mb={2}>
              {item.title}
            </Heading>
            <Text mb={4}>{item.description}</Text>
            <Link href={item.downloadLink} isExternal>
              <Button rightIcon={<FaDownload />} colorScheme="blue">
                Details
              </Button>
            </Link>
          </Box>
        ))}
      </Stack>

      <Heading as="h2" size="lg" mt={12} mb={4}>
        Inorganic Chemistry Resources
      </Heading>
      <Stack spacing={8}>
        {inorganicChemistryResources.map((resource, index) => (
          <Box key={index} p={6} boxShadow="md" rounded="md">
            <Heading as="h3" size="md" mb={2}>
              {resource.title}
            </Heading>
            <Text mb={4}>{resource.description}</Text>
            <Link href={resource.link} isExternal>
              <Button colorScheme="teal">Visit Website</Button>
            </Link>
          </Box>
        ))}
      </Stack>

      <Box mt={12} textAlign="center">
        <Text fontSize="lg" mb={4}>
          For more information, please contact me at john.doe@example.com
        </Text>
        <Link href="https://www.linkedin.com/in/johndoe" isExternal>
          <Button colorScheme="blue" mr={4}>
            LinkedIn
          </Button>
        </Link>
        <Link href="https://github.com/johndoe" isExternal>
          <Button colorScheme="gray">GitHub</Button>
        </Link>
      </Box>
    </Container>
  );
};

const inorganicChemistryResources = [
  {
    title: "Inorganic Chemistry Textbook",
    description: "A comprehensive textbook covering the fundamentals of inorganic chemistry.",
    link: "https://www.example.com/inorganic-chemistry-textbook",
  },
  {
    title: "Inorganic Chemistry Software",
    description: "A powerful software suite for modeling and analyzing inorganic compounds.",
    link: "https://www.example.com/inorganic-chemistry-software",
  },
];

export default Index;
