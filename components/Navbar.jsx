import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Stack, HStack } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='grey.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link href='/'>Bluey Bricks Estate Agents</Link>
        </Box>
        <Spacer/>
        <Box>
            <HStack>
            <Menu>
                <IconButton variant='outlined' color='red.400'>
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
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