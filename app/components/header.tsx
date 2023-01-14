import React from 'react';
import { Flex, useColorMode, Button } from '@chakra-ui/react';

const Header = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Flex direction='row' align='center' mb={4}>
            <Button onClick={toggleColorMode}>Change Color mode</Button>
        </Flex>
    );
};

export default Header;
