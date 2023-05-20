import { Box, Heading, VStack, HStack, AspectRatio } from "@chakra-ui/react";
import { Image, Text, Link } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import FullScreenSection from "./FullScreenSection";

import '../styles/projectsSection.css';
import { useEffect } from "react";

const projects = [
    {
        title: "Contact Book",
        description: "A simple contact book Angular app",
        features: "|Angular signals | Angular effect | Bootstrap | tyescript | Vanilla CSS | Input Decorator|",
        type: "video",
        imageSrc: () => require("../images/contact-book.mp4"),
        url: '#'
    },
    {
        title: "Wedding site",
        description: "A simple wedding app for intending couples. Built with Reactjs and vanilla css.",
        features: "React UseState | React UseEffect | 3d-corousel package | conditionally rendered components | State lifting",
        type: "image",
        imageSrc: () => require("../images/valandgreg-site.png"),
        url: 'https://valandgreg.netlify.app/'
    }
    
]



const ProjectsSection = () => {

  // video autoplay on hover
  useEffect(() => {
    document.getElementById("portfolio-vid").addEventListener("mouseover", function() {
      this.play();
    });
    
    document.getElementById("portfolio-vid").addEventListener("mouseleave",function() {
    this.pause();
    });
  })

  

  return (
    <FullScreenSection
      isdarkbackground
      backgroundColor="#14532d"
      p={8}
      alignItems="flex-start"
    >
      <Heading as="h1" id="projects-section" color="white" py={3}>Featured Projects</Heading>
      <Box
        id="project-section-grid"
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
        
      >
        {projects.map((project, i) => {
          return (
            

            <Box 
              w="80%" mx="auto"
              key={i}
              backgroundColor="white"
              color="black"
              p={6}
              borderRadius='xl'
              className="item-onHover"
            >
              <Box>
                <VStack  alignItems="flex-start">
                  <Box >                
                    { project.type === "image" ? 
                      <Image rounded="xl" src={project.imageSrc()}/> :
                      <video id= "portfolio-vid" loop muted >
                        <source
                          src={project.imageSrc()}
                          type="video/mp4"
                        />
                      </video>
                    }
                  </Box>
                  <Heading as="h4" size="md">{project.title}</Heading>
                  <Text fontSize="md">{project.description}</Text>
                  <Text fontSize="md" fontWeight="bold">{project.features}</Text>
                </VStack>
              </Box>
              <HStack py={3}>
                  <Link href={project.url} isExternal>
                    <Heading as="h6" size="xs">See Live</Heading>
                  </Link>
                  <FontAwesomeIcon icon={faArrowRight} color='#080808' size="1x" />
              </HStack>
            </Box>
          )
        })}
      </Box>
    </FullScreenSection>
  )
}

export default ProjectsSection;