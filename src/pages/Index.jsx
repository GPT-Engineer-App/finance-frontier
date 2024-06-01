import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4} direction={{ base: "column", md: "row" }}>

        {/* Featured News Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/featured-news-1.jpg" alt="Featured News 1" />
              <Box p={4}>
                <Heading as="h2" size="md">Featured News Headline 1</Heading>
                <Text mt={2}>Brief description of the featured news article. This is a summary of the news content.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/featured-news-2.jpg" alt="Featured News 2" />
              <Box p={4}>
                <Heading as="h2" size="md">Featured News Headline 2</Heading>
                <Text mt={2}>Brief description of the featured news article. This is a summary of the news content.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/featured-news-3.jpg" alt="Featured News 3" />
              <Box p={4}>
                <Heading as="h2" size="md">Featured News Headline 3</Heading>
                <Text mt={2}>Brief description of the featured news article. This is a summary of the news content.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar for Trending Articles */}
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Trending</Heading>
          <Stack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h4" size="md">Trending Article 1</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h4" size="md">Trending Article 2</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h4" size="md">Trending Article 3</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;