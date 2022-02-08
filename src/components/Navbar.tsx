import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import {
  IoCogOutline,
  IoHomeOutline,
  IoBookOutline,
  IoLayersOutline,
  IoAddCircle,
} from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";
import AddModal from "./AddModal";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-device-width: 1024px)" });
  const [activeLink, setActiveLink] = useState<string>(
    useLocation().pathname === "" ? "dashboard" : useLocation().pathname.substring(1)
  );

  return (
    <>
      {!isMobile ? (
        <Box w="100%" p={4} mt={2} rounded="lg">
          <Flex justify={"space-between"}>
            <NavLink to="/">
              <Button variant="outline" onClick={() => setActiveLink("dashboard")}>
                Gym Journal
              </Button>
            </NavLink>
            <Box>
              <HStack spacing="5px">
                <NavLink to="/">
                  <Button
                    variant={activeLink === "dashboard" ? "solid" : "ghost"}
                    onClick={() => setActiveLink("dashboard")}
                  >
                    Dashboard
                  </Button>
                </NavLink>
                <NavLink to="/plans">
                  <Button
                    variant={activeLink === "plans" ? "solid" : "ghost"}
                    onClick={() => setActiveLink("plans")}
                  >
                    Plans
                  </Button>
                </NavLink>
                <NavLink to="/liftbook">
                  <Button
                    variant={activeLink === "liftbook" ? "solid" : "ghost"}
                    onClick={() => setActiveLink("liftbook")}
                  >
                    Liftbook
                  </Button>
                </NavLink>
                <NavLink to="/settings">
                  <Button
                    variant={activeLink === "settings" ? "solid" : "ghost"}
                    onClick={() => setActiveLink("settings")}
                  >
                    Settings
                  </Button>
                </NavLink>

                <AddModal />
              </HStack>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box
          w="100%"
          px={4}
          py={2}
          pos="fixed"
          bottom={0}
          zIndex={100}
          boxShadow="lg"
          rounded="lg"
          mb={1}
        >
          <Flex justify={"space-between"}>
            <NavLink to="/">
              <Button
                variant={activeLink === "dashboard" ? "solid" : "ghost"}
                onClick={() => setActiveLink("dashboard")}
              >
                <Icon as={IoHomeOutline} w={6} h={6} />
              </Button>
            </NavLink>
            <NavLink to="/plans">
              <Button
                variant={activeLink === "plans" ? "solid" : "ghost"}
                onClick={() => setActiveLink("plans")}
              >
                <Icon as={IoBookOutline} w={6} h={6} />
              </Button>
            </NavLink>
            {/* Add circle */}
            <AddModal />

            <NavLink to="/liftbook">
              <Button
                variant={activeLink === "liftbook" ? "solid" : "ghost"}
                onClick={() => setActiveLink("liftbook")}
              >
                <Icon as={IoLayersOutline} w={6} h={6} />
              </Button>
            </NavLink>
            <NavLink to="/settings">
              <Button
                variant={activeLink === "settings" ? "solid" : "ghost"}
                onClick={() => setActiveLink("settings")}
              >
                <Icon as={IoCogOutline} w={6} h={6} />
              </Button>
            </NavLink>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Navbar;
