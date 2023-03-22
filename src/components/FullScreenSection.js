import { VStack } from "@chakra-ui/react";

// demonstrating using children props
const FullScreenSection = ({children, isdarkbackground, ...boxProps}) => {

    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isdarkbackground ? "white" : "black"}
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                {children}
            </VStack>


        </VStack>
    )
}

export default FullScreenSection;