import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';

const greeting = "Hello, I am Gregory";
const bio1 = "A fullstack Developer";
const bio2 = "specialised in javascript";

const LandingSection = () => {


    return (
        <HStack 
          maxWidth="1280px" minHeight="100vh"
          backgroundColor="#ebedeb"
          justifyContent="space-around"
        >               
            <VStack>
              <Typewriter 
                  options={{
                      strings: [greeting],
                      autoStart: true,
                      loop: true,
                  }}
              />
              <Heading>{bio1}</Heading>
              <Heading>{bio2}</Heading>
            </VStack>

            <VStack>
              <Avatar src = "https://res.cloudinary.com/diyms5sde/image/upload/c_scale,h_334/v1681922847/portfolio/avatar_zjs3ir.png" size="2x"></Avatar>
            </VStack>
        </HStack>
    )
}

export default LandingSection