import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    SimpleGrid, Center, Select,
} from '@chakra-ui/react';
import {Component} from "react"
import MailingListImg from "../src/img/mailinglist.png"

export default class JoinMailingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            industry: 'E-Sports',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (this.state.fullName = '') {
            formIsValid = false;
            errors["Name"] = "Name cannot be empty";
        }

        if (typeof this.state.fullName !== "undefined") {
            if (!this.state.fullName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Letters only";
            }
        }

        if (this.state.email = '') {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }

        if (typeof this.state.email !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (this.state.industry  = '') {
            formIsValid = false;
            errors["industry"] = "Industry cannot be empty";
        }

        return formIsValid;
    }

    handleSubmit(event) {

        console.log("Name: " + this.state.fullName + "; Email: " + this.state.email + "; Industry: " + this.state.industry);
        event.preventDefault();

    }


    render() {
        return (
            <Box>
                <Flex
                    h={'75vh'}
                    backgroundImage={MailingListImg}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}>
                    <form onSubmit={this.handleSubmit}>
                        <VStack bgColor={"rgb(0, 0, 255, 0.4)"} w={'full'} h="100%">
                            <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={"white"} textAlign={"center"}>
                                Join our mailing list
                            </Text>
                            <Center>
                                <Box
                                    bg="rgb(169, 169, 169, 0.9)"
                                    borderRadius="lg"
                                    m={{ sm: 4, md: 16, lg: 10 }}
                                    p={{ sm: 5, md: 5, lg: 16 }}
                                    maxW={"70%"}>
                                    <Box p={4} >
                                        <SimpleGrid columns={2} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                            <Box>
                                                <Box bg="white"  >
                                                    <Box m={8} py={10} color="#0B0E3F">
                                                        <VStack spacing={5}>
                                                            <FormControl id="name">
                                                                <FormLabel>Full Name</FormLabel>
                                                                <InputGroup borderColor="#E0E1E7">

                                                                    <Input name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} size="lg" placeholder="Jane Doe" required/>
                                                                </InputGroup>
                                                            </FormControl>
                                                            <FormControl id="email">
                                                                <FormLabel>E-mail</FormLabel>
                                                                <InputGroup borderColor="#E0E1E7">

                                                                    <Input name="email" value={this.state.email} onChange={this.handleChange} type="text" size="lg" placeholder="jane_doe@email.com" required/>
                                                                </InputGroup>
                                                            </FormControl>
                                                            <FormControl id="industry">
                                                                <FormLabel>Industry</FormLabel>
                                                                <InputGroup borderColor="#E0E1E7">

                                                                    <Select name="industry" value={this.state.industry} onChange={this.handleChange}>
                                                                        <option value='E-Sports' selected>E-Sports</option>
                                                                        <option value='Professional Services'>Professional Services</option>
                                                                        <option value='Sports/Fitness'>Sports/Fitness</option>
                                                                    </Select>
                                                                </InputGroup>
                                                            </FormControl>
                                                        </VStack>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box my={50}>
                                                    <Text align="center" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >Join our mailing to receive notifications about program availability and special discounts</Text>
                                                    <HStack
                                                        mt={{ lg: 10, md: 10 }}
                                                        spacing={5}
                                                        px={5}>
                                                        <FormControl id="name" align="center" float="center" >
                                                            <Button
                                                                type="submit"
                                                                bg="blue"
                                                                color="white"
                                                                size="lg"
                                                                _hover={{ bg: 'skyblue' }}>
                                                                Sign Up
                                                            </Button>
                                                        </FormControl>
                                                    </HStack>
                                                </Box>
                                            </Box>
                                        </SimpleGrid>
                                    </Box>
                                </Box>
                            </Center>
                        </VStack>
                    </form>
                </Flex>
                <Center>
                    <SimpleGrid columns={3} w="75%" py={20}>
                        <Box align={"center"}>
                            <Heading as="h2">EMAIL ADDRESS</Heading>
                            <Text>hello@reallygreatsite.com</Text>

                        </Box>
                        <Box align={"center"}>
                            <Heading as="h2">MAILING ADDRESS</Heading>
                            <Text>123 Anywhere St. Any City, ST 12345</Text>

                        </Box>
                        <Box align={"center"}>
                            <Heading as="h2">PHONE NUMBER</Heading>
                            <Text>(123) 456-7890</Text>

                        </Box>
                    </SimpleGrid>
                </Center>
            </Box>
        );
    }
}