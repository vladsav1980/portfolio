import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Vlad!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="xl" src={require("../images/round_me.png")} />
      <Heading color="white" size="md">
        {greeting}
      </Heading>
      <Heading color="white" fontSize="6vw">
        {bio1}
      </Heading>
      <Heading color="white" fontSize="6vw">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
