import { Box, Card, CardHeader, CardBody, Stack, StackDivider, Text, Heading } from '@chakra-ui/react';
import { Section } from '../src/models/section';

const SectionLabel: React.FC<{ sections: Section[] }> = props => {
    return (
        <Box>
            <Card>
                <CardHeader>
                    <Heading size='md'>User section</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        {props.sections.map(s => (
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    {s.name}
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {s.description}
                                </Text>
                            </Box>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default SectionLabel;
