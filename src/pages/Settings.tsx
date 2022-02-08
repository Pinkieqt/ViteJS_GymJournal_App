import { Box, Flex, Heading, Switch, Text, useColorMode } from "@chakra-ui/react";

function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py={3} w="100%">
      <Heading size="lg" mb={2}>
        Settings
      </Heading>
      <Box w="100%">
        <Flex align="center" justify="space-between" mb={2}>
          <Text>Dark mode</Text>
          <Switch onChange={toggleColorMode} isChecked={colorMode === "dark" ? true : false} />
        </Flex>
        <Flex align="center" justify="space-between">
          <Text>Use system color</Text>
          <Switch />
        </Flex>
      </Box>
    </Box>
  );
}

export default Settings;
