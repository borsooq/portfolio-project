import { Heading, HStack, Image, Img, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, index }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg="white"
      justifyContent="flex-start"
      color="black"
      textAlign="left"
      alignItems="left"
      borderRadius="15px"
      key={index}
    >
      <Image src={imageSrc} borderRadius="15px" />;
      <Heading size="md" margin="0.75rem 1rem 0.75rem 1rem">
        {title}
      </Heading>
      ;
      <Text margin="0 1rem 0.75rem 1rem" color="gray.600">
        {description}
      </Text>
      <HStack marginLeft="1rem" marginEnd="1rem" marginBottom="1rem">
        <Text fontSize="md">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
