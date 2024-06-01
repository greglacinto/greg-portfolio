import { Box, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import { Text, Link } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import FullScreenSection from "./FullScreenSection";

import '../styles/projectsSection.css';
import projects from '../data/project.js'


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
                  <Box id="box">
                    <Image 
                      className='project-img'
                      src={project.imageSrc} 
                      alt='project image'
                    />
                  </Box>
                  
                  <Box>
                    <Heading as="h2" size="md" py={2}>{project.title}</Heading>
                    <Text fontSize="sm" py={2}>{project.description}</Text>
                    <Text fontSize="xs" fontWeight="">{project.features}</Text>
                  </Box>
                </VStack>
              </Box>
              {
                // if Id equals loc-market, don't show div
                project.id !== 'loc-market' && (
                    <>
                        <HStack py={2}>
                            <Link href={project.url} isExternal>
                            <Heading as="h6" size="xs">Live site</Heading>
                            </Link>
                            <FontAwesomeIcon icon={faArrowRight} color='#080808' size="1x" />
                        </HStack>
                    </>
                )
              }
              
            </Box>
          )
        })}
      </Box>
    </FullScreenSection>
  )
}

export default ProjectsSection;