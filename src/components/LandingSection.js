import { Avatar, Box, Button, Flex, VStack, Text, HStack} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import '../styles/landing-section.css';

const greetHello = "Hello, I'm "
const name = '<span style="color: red;">Gregory</span>'
const greeting = greetHello + name
// const greeting = "Hello, I'm Gregory";

const bio1 = "I'm a professional Software Engineer. We create amazing web applications, backend APIs and automate business processes.";

const toolbox = [
  'Javascript', 'T-SQL', 'Vanilla CSS', 'Bootstrap css', 
  'Angular 9+', 'React js', 'Chakra UI', 
  'nodeJs',  'nestJs', 'nextjs', 
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
                className="m-greeting"
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
              <Text 
                fontSize='1em'
                px={20}
              >
                {bio1}
              </Text>
              
              <HStack
                className="toolbox"
                alignItems="center"
                justifyContent="center"
              >
                <Flex 
                  flexWrap="wrap"
                  width="70%"
                >
                  {toolbox.map((item, i) => {
                    return (
                      <Button 
                        borderRadius={7}
                        border='1px'
                        borderColor="#244D61"
                        boxShadow="0 0 5px #244D61"
                        // box-shadow: ;
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
              <Avatar src = {process.env.REACT_APP_LP_IMG_URL} size="2px"></Avatar>
            </Box>
        </Flex>
    )
}

export default LandingSection