import { useRef, useState, useEffect } from "react";
import { UnorderedList, ListItem, Link, Box, HStack, VStack, Text} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/sharp-regular-svg-icons'
import { 
    faEnvelope, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub, faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.css';

const socials = [
    {
        icon: faEnvelope,
        url: "mailto:greglacinto@gmail.com",
        name: "Email"
    },
    {
        icon: faGithub,
        url: "https://github.com/greglacinto/",
        name: "Github"
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.com/in/gregoryjs/",
        name: "LinkedIn"
    }
]

const Header = () => {
  let previousPosition = useRef(0);
  let [direction, setDirection] = useState("");
  const [isToggle, setToggle] = useState(false);

  const handleClick = (anchor) => () =>  {
    if (anchor.includes('-')){
      anchor = anchor.slice(0, anchor.indexOf('-'));
      setToggle(false);
    }
    
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

  const handleToggle = () => {
    setToggle(!isToggle);
    console.log(isToggle)
    const mobileMenu = document.querySelector('.sm-screen-display');
    mobileMenu.classList.toggle('is-active');
    console.log(mobileMenu)
    
  };

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
                                      <ListItem 
                                      listStyleType='none' key={i}
                                      className="header-onHover"
                                      >
                                          <Link 
                                            href={item.url} isExternal 
                                          >
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
                        <button className="header-onHover"onClick={handleClick("projects")}>Projects</button>
                        <button className="header-onHover"onClick={handleClick("contactme")}>Contact Me</button>
                      </HStack>
                  </UnorderedList>
              </nav>
            </HStack>
          </Box>            
        </Box>
        
        <Box>
          <span className="toggle-box-icon toggle-box-effect">
            <FontAwesomeIcon 
            icon={isToggle ? faXmark : faBars} 
            onClick={handleToggle}/>
          </span>
        </Box>  
    
        <Box
          className="sm-screen-display"          
        >          
          <nav>
                <UnorderedList>
                    <VStack 
                      spacing={10} 
                      paddingTop={6}
                      fontSize='2em'
                    >
                      <button className="header-onHover" onClick={handleClick("projects-smClose")}>Projects</button>
                      <button className="header-onHover" onClick={handleClick("contactme-smClose")}>Contact Me</button>
                      {
                        socials.map((item, i) => {
                          return (
                            <button 
                              listStyleType='none' key={i}
                              className="header-onHover"  
                            >
                              <Link href={item.url} isExternal 
                                onClick={handleClick("link-smClose")}
                              >
                                <Text>{item.name}</Text>
                              </Link>
                            </button>
                          )
                        })
                      }
                    </VStack>
                </UnorderedList>
          </nav>
        </Box>
       

          
      </>
    )
}

export default Header;