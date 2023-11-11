import { useRef, useState, useEffect } from "react";
import { UnorderedList, ListItem, Link, Box, HStack, VStack, Text, Divider} from "@chakra-ui/react";
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
  const [toggleColor, setToggleColor] = useState('black');

  const handleClick = (anchor) => () =>  {
    if (anchor.includes('-')){
      anchor = anchor.slice(0, anchor.indexOf('-'));
    }

    handleToggle();
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
    const mobileMenu = document.querySelector('.sm-screen-display');
    mobileMenu.classList.toggle('is-active');
    
  };

  useEffect(() => {
    const updatePosition = () => {
      const currentPosition = window.pageYOffset;
      currentPosition > 760 ? setToggleColor('white') : setToggleColor('black');
    
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
        <span id="home-section"></span>
        <Box
          // position={direction === "down" ? "absolute" : "fixed"}
          top={0}
          left={0}
          right={0}
          translateY={direction === "down" ? -200 : 0}
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"
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
                                        className="social"
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

                <HStack>
                    <UnorderedList>
                        <HStack   
                        spacing={10} 
                        fontWeight="bold"
                        >
                          {/* <button 
                          onClick={handleClick("home")}
                          >
                            <Text className="rtv-btn" textColor="red">
                              Home
                            </Text>
                          </button> */}
                          <button 
                          onClick={handleClick("projects")}
                          >
                            <Text className="rtv-btn">Projects</Text>
                          </button>
                          <button 
                          onClick={handleClick("contactme")}
                          >
                            <Text className="rtv-btn">Contact</Text>
                          </button>
                        </HStack>
                    </UnorderedList>

                    <Box>
                    <span className="up-icon">
                      <button 
                      onClick={handleClick("home")}
                      >
                        <Text className="rtv-btn" textColor="red">
                          Home
                        </Text>
                      </button>
                    </span>
                    </Box>
                </HStack>

            </HStack>
          </Box>            
        </Box>
        
        <Box>
          <span className="toggle-box-icon toggle-box-effect">
            <FontAwesomeIcon 
            icon={isToggle ? faXmark : faBars} 
            style={{color: toggleColor}}
            onClick={handleToggle}/>
          </span>

          
        </Box>  
    
        <Box
          className="sm-screen-display"          
        >          
          <nav>
                <UnorderedList>
                    <VStack 
                      spacing={12} 
                      paddingTop={6}
                      fontSize='2em'
                    >
                      <button className="header-onHover" onClick={handleClick("home-smClose")}>Home</button>
                      <button className="header-onHover" onClick={handleClick("projects-smClose")}>Projects</button>
                      <button className="header-onHover" onClick={handleClick("contactme-smClose")}>Contact Me</button>
                      <Divider width='80%' orientation='horizontal' />
                      {
                        socials.map((item, i) => {
                          return (
                            <button 
                              key={i}
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