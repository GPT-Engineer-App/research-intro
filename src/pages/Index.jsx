import React from "react";
import { Box, Heading, Text, Stack, Container, Link, Button, Image, UnorderedList, ListItem } from "@chakra-ui/react";
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
            <Link href={item.downloadLink} download>
              <Button rightIcon={<FaDownload />} colorScheme="blue">
                Download
              </Button>
            </Link>
          </Box>
        ))}
      </Stack>

      <Heading as="h2" size="lg" mt={12} mb={4}>
        Selected Publications
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0925838820311336" isExternal>
            Synthesis, crystal structure and properties of a new layered titanium phosphate Na2Ti(PO4)2
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0022459620305405" isExternal>
            Synthesis, structure and ion-exchange property of a new open-framework zirconium phosphate (C4N2H12)0.5Zr(HPO4)2·H2O
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pubs.acs.org/doi/abs/10.1021/acs.inorgchem.9b03642" isExternal>
            Synthesis, Crystal Structure, and Luminescence Property of a New Europium(III) Sulfate–Phosphate with 0D [Eu(SO4)(PO4)] Isolated Units
          </Link>
        </ListItem>
      </UnorderedList>

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
