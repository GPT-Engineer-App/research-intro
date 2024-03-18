import React from "react";
import { Box, Heading, Text, Stack, Container, Link, Button, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const researchItems = [
    {
      title: "Novel Approach to Machine Learning",
      description: "This research paper introduces a new approach to machine learning that improves accuracy and efficiency.",
      downloadLink: "/research/ml-approach.pdf",
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
          Jian Tang
        </Heading>
        <Text fontSize="xl">Assistant Professor at HEC Montreal</Text>
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
            <Link href={item.downloadLink} download>
              <Button rightIcon={<FaDownload />} colorScheme="blue">
                Download
              </Button>
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

export default Index;
