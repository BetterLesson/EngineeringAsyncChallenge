import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
} from '@chakra-ui/react';
import {Component} from "react"
import CoachingImg from "../src/img/coaching.png";

class CurrentCoaches extends Component {
    render() {
        return SplitScreen();
    }
}

export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

            <Flex flex={1}>
                <Image
                    objectFit={'cover'}
                    src={ CoachingImg }
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={"blue"}>
                            Current Coaches
                        </Text>
                    </Heading>

                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Coach Name</Th>
                                    <Th>Available Starting</Th>
                                    <Th>Industry</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Jessica D.</Td>
                                    <Td>11/6/22</Td>
                                    <Td>Professional Services</Td>
                                </Tr>
                                <Tr>
                                    <Td>David F.</Td>
                                    <Td>8/5/21</Td>
                                    <Td>Sports/Fitness</Td>
                                </Tr>
                                <Tr>
                                    <Td>Keir Y.</Td>
                                    <Td>4/12/22</Td>
                                    <Td>E-Sports</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Flex>
        </Stack>
    );
}