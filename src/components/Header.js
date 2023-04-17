import { useRef, useState, useEffect } from "react";
import { UnorderedList, ListItem, Link, Box, HStack, VStack} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/sharp-regular-svg-icons'
import { 
    faEnvelope, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub, faLinkedin, 
    faStackOverflow, faMedium
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.css';

const socials = [
    {
        icon: faEnvelope,
        url: "greglacinto@gmail.com"
    },
    {
        icon: faGithub,
        url: "https://github.com/greglacinto/"
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.com/in/gregoryjs/"
    }
]

const Header = () => {
  let previousPosition = useRef(0);
  let [direction, setDirection] = useState("");
  const [isToggle, setToggle] = useState(false);

  const handleClick = (anchor) => () =>  {
    console.log(window.innerWidth)
    const query = anchor+"-section";
    const element = document.getElementById(query);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleToggle = () => {
    setToggle(!isToggle);
    console.log(isToggle)
  }

  useEffect(() => {
    const updatePosition = () => {
      const currentPosition = window.pageYOffset;
      setDirection(currentPosition > previousPosition.current ? "down" : "up");
      previousPosition.current = currentPosition > 0 ? currentPosition : 0;
    };

    window.addEventListener(
      "scroll", updatePosition
    );
    return () => {
      window.removeEventListener(
        "scroll", updatePosition
      )
    }
  }, []);

    return (
      <>
        <Box
          position={direction === "down" ? "absolute" : "fixed"}
          top={0}
          left={0}
          right={0}
          translateY={direction === "down" ? -200 : 0}
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"
          backgroundColor="#18181b"
          color="white"
        >
          <Box
            id="lg-screen-navbar"
            display="none"
          >
          <HStack 
              justifyContent="space-around"
              py={3}
            >
              <nav>
                  <UnorderedList>
                      <HStack
                          justifyContent="space-around"
                          spacing={6}
                      >
                          {
                              socials.map((item, i) => {
                                  return (
                                      <ListItem listStyleType='none' key={i}>
                                          <Link href={item.url} isExternal>
                                              <FontAwesomeIcon icon={item.icon} />
                                          </Link>
                                      </ListItem>
                                  )
                              })
                          }
                          
                      </HStack>
                  </UnorderedList>
              </nav>

              <nav>
                  <UnorderedList>
                      <HStack spacing={5}>
                        <button onClick={handleClick("projects")}>Projects</button>
                        <button onClick={handleClick("contactme")}>Contact Me</button>
                      </HStack>
                  </UnorderedList>
              </nav>
            </HStack>
          </Box>            
        </Box>

        <Box
          id="sm-screen-display"
          display="block"
          top={0}
          left={0}
          right={0}
          position="fixed"
          zIndex={20}
          paddingRight={4}
          backgroundColor="#18181b"
          color="white"
          opacity={0.9}
        >
          <Box float="right">
            <FontAwesomeIcon icon={isToggle ? faXmark : faBars} onClick={handleToggle}/>
          </Box>
          
          <Box
            display={isToggle ? "block" : "none"}
          >
            <nav>
                  <UnorderedList>
                      <VStack spacing={5} paddingTop={6}>
                        <button onClick={handleClick("projects")}>Projects</button>
                        <button onClick={handleClick("contactme")}>Contact Me</button>
                      </VStack>
                  </UnorderedList>
            </nav>

            <nav>
              <UnorderedList>
                <HStack
                  py={6}
                  alignItems="center"
                  justifyContent="space-around"
                  spacing={0}
                >
                  {
                    socials.map((item, i) => {
                      return (
                        <ListItem listStyleType='none' key={i}>
                          <Link href={item.url} isExternal>
                            <FontAwesomeIcon icon={item.icon} />
                          </Link>
                        </ListItem>
                      )
                    })
                  }
                    
                </HStack>
              </UnorderedList>
            </nav>
          </Box>
        </Box>
       

          
      </>
    )
}

export default Header;