import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <Link href={url} isExternal textDecoration={"none"}>
      <VStack
        backgroundColor="white"
        color="black"
        borderRadius="md"
        boxShadow="md"
        padding={4}
        spacing={2}
        cursor="pointer"
        _hover={{
          transform: "scale(0.9)",
          transition: "transform 0.7s",
          textDecoration: "none",
        }}
      >
        <Image src={imageSrc} alt={title} width="100%" borderRadius="md" />
        <Heading as="h2" size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack>
          <Text>Learn more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Link>
  );
};

export default Card;
