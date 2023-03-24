import { Box, Heading, VStack, HStack } from "@chakra-ui/react";
import { Image, Text, Link } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import FullScreenSection from "./FullScreenSection";

import '../styles/projectsSection.css';

const projects = [
    {
        title: "Sydny dre",
        description: "A simple artist web app designed using html, bootsrap CSS and vanilla javascript",
        imageSrc: () => require("../images/sydnydre-site.png"),
        url: 'http://sydnydre.com'
    },
    {
        title: "Wedding site",
        description: "A simple wedding app for intending couples. Built with Reactjs and vanilla css🔥️",
        imageSrc: () => require("../images/valandgreg-site.png"),
        url: 'https://valandgreg.netlify.app/'
    },
    {
        title: "Photo Gallery",
        description: "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        imageSrc: () => require("../images/photo3.jpg")
    },
    {
        title: "React Infinite Scroll",
        description: "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        imageSrc: () => require("../images/photo4.jpg")
    }
]
const ProjectsSection = () => {

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
                        key={i}
                        backgroundColor="white"
                        color="black"
                        p={6}
                        borderRadius='xl'
                        >
                            <Box>
                                <VStack  alignItems="flex-start">
                                    <Image rounded="xl" src={project.imageSrc()}/>
                                    <Heading as="h4" size="md">{project.title}</Heading>
                                    <Text fontSize="md">{project.description}</Text>
                                </VStack>
                            </Box>
                            <HStack py={3}>
                                <Link href={project.url} isExternal>
                                  <Heading as="h6" size="xs">See more</Heading>
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