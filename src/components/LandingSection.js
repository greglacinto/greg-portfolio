import { Avatar, Heading } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gregory";
const bio1 = "A Software Developer";
const bio2 = "specialised in javascript";

const LandingSection = () => {


    return (
        <FullScreenSection
            backgroundColor="#ebedeb"
            justifyContent="center"
        >   
            
            <Avatar src="https://res.cloudinary.com/diyms5sde/image/upload/v1679409721/portfolio/greg-img_pswlek.jpg" size="2x"></Avatar>
            
            <Typewriter 
                options={{
                    strings: [greeting],
                    autoStart: true,
                    loop: true,
                }}
            />
            <Heading>{bio1}</Heading>
            <Heading>{bio2}</Heading>
            
            
        </FullScreenSection>
    )
}

export default LandingSection