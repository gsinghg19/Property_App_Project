// import Link from 'next/link';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Stack, HStack } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='5' borderBottom='1px' borderColor='grey.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link as={NextLink} href='/'>Bluey Bricks Estate Agents</Link>
        </Box>
        <Spacer/>
        <Box>
            <HStack>
            <Menu>
                <IconButton variant='outlined' color='red.400'>
                    <MenuList>
                        <Link as={NextLink} href='/'>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link as={NextLink} href='/search'>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link as={NextLink} href='/search?purpose=for-sale'>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link as={NextLink} href='/search?purpose=for-rent'>
                            <MenuItem icon={<FiKey />}>Rental Property</MenuItem>
                        </Link>
                    </MenuList>
                </IconButton>
            </Menu>
            </HStack>
        </Box>
    </Flex>
);
export default Navbar;