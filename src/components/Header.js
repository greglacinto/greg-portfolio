import { useRef, useState, useEffect } from "react";
import { UnorderedList, ListItem, Link, Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope,  
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub, faLinkedin, 
    faStackOverflow, faMedium
} from '@fortawesome/free-brands-svg-icons'

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
    },
    {
        icon: faMedium,
        url: "https://medium.com/"
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/13700702/gregoryjs"
    }
]

const Header = () => {
  let previousPosition = useRef(0);
  let [direction, setDirection] = useState("");

  const handleClick = (anchor) => () =>  {
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
                <HStack 
                    justifyContent="space-around"
                    py={2}
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
        </>
    )
}

export default Header;