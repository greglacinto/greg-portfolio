import { Avatar, Box, Button, Flex, VStack, Text, HStack} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import '../styles/landing-section.css';

const greeting = "Hello, I am Gregory";
const bio1 = "A fullstack Developer";

const toolbox = [
  'Angular 9+', 'Bootstrap css', 'Chakra UI', 
  'Javascript', 'PL/SQL', 'React js',
  'Spring Boot',  'Vanilla CSS'
]

const LandingSection = () => {
    return (
        <Flex 
          className="flex"
          pt={20}
          minHeight="100vh"
          flexDirection='column'
          justifyContent="space-around"
          alignItems="center"
        >               
            <VStack className="bio-box">
              <Text
                fontSize='2em'
                fontWeight="bold"
              >
                <Typewriter 
                  options={{
                      strings: [greeting],
                      autoStart: true,
                      loop: true,
                  }}
                />
              </Text>
              <Text fontSize='2em'>{bio1}</Text>
              
              <HStack
                className="toolbox"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize='2em'>Tools: </Text>
                <Flex 
                  flexWrap="wrap"
                  width="70%"
                >
                  {toolbox.map((item, i) => {
                    return (
                      <Button 
                        borderRadius={7}
                        border='2px'
                        borderColor="#00ffff"
                        key={i}
                        mx={2}
                        my={2}
                      >
                        {item}
                      </Button>
                    )
                  })}
                </Flex>
              </HStack>
              

            </VStack>

            <Box className="avatar-box">
              <Avatar src = "https://res.cloudinary.com/diyms5sde/image/upload/c_scale,h_334/v1681922847/portfolio/avatar_zjs3ir.png" size="2x"></Avatar>
            </Box>
        </Flex>
    )
}

export default LandingSection