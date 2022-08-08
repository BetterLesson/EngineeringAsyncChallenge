import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue, Image,
} from '@chakra-ui/react';
import {Component} from "react";
import Logo from "../src/img/BL_LogoBasic.png"
import HeroImg from "../src/img/hero.png"

class Home extends Component {
    render() {
        return WithBackgroundImage();
    }
}

export default function WithBackgroundImage() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={ HeroImg }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgColor={"rgb(0, 0, 255, 0.6)"}>
                <Stack maxW={'6xl'} align={'flex-start'} spacing={6}>
                    <Image
                        src={Logo}>
                    </Image>
                    <Text
                        color={'white'}
                        fontWeight={600}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: '8xl' })}>
                        BetterLesson<br/>Professional Coaching
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={400}
                        lineHeight={1.2}
                        py={6}
                        fontSize={useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' })}>
                        PROFESSIONAL COACH SEMINARS & MENTORSHIP
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            bg={'blue'}
                            color={'white'}
                            _hover={{ bg: 'green' }}>
                            Register Now
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}