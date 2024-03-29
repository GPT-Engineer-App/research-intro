import React from "react";
import { Box, Heading, Text, Stack, Container, Link, Button, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const researchItems = [
    {
      title: "Linear Calcium Carbonate Chains by Directional Control of Ionic Bonding",
      description: "As a result of the non-directionality of ionic bonds, oppositely charged ions always assemble into closely packed clusters or crystals rather than linear structured ionic species. Here, we generated a series of linear calcium carbonate chains, (Ca2+CO32–)n, with an orientated directionality of the ionic interactions. The formation of these ionic chains with long-range ordered ionic interactions was originally induced by the dipole orientation of the ions and subsequently preserved by capping agents. According to the appropriately established folding–capping model, rational control of the capping effect can regulate the length of the (Ca2+CO32–)n chain within 100 nm, corresponding to n ≤ 250. Our discovery overturns the current understanding of ionic bonding in chemistry and opens a way to control the assembly of inorganic ions at molecular scale, pushing forward a fusion of molecular compounds and ionic compounds that share similar topological control.",
      downloadLink: "https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.4c00069",
    },
    {
      title: "Pressure-driven fusion of amorphous particles into integrated monoliths",
      description: "Biological organisms can use amorphous precursors to produce inorganic skeletons with continuous structures through complete particle fusion. Synthesizing monoliths is much more difficult because sintering techniques can destroy continuity and limit mechanical strength. We manufactured inorganic monoliths of amorphous calcium carbonate by the fusion of particles while regulating structurally bound water and external pressure. Our monoliths are transparent, owing to their structural continuity, with a mechanical strength approaching that of single-crystal calcite. Dynamic water channels within the amorphous bulk are synergistically controlled by water content and applied pressure and promote mass transportation for particle fusion. Our strategy provides an alternative to traditional sintering methods that should be attractive for constructing monoliths of temperature-sensitive biominerals and biomaterials.",
      downloadLink: "https://www.science.org/doi/10.1126/science.abg1915",
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
