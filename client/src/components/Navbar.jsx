import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Avatar,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      bg="black"
      color="black"
      w="100vw"
      h="100px"
      px={150}
      alignItems="center"
      justify="space-between"
    >
      <Image src="/logo-no-background.svg" w="167px" h="45px" />

      <Popover>
        <PopoverTrigger>
          <HamburgerIcon color="white" boxSize="50px" />
        </PopoverTrigger>
        <PopoverContent
          w="200px"
          h="100px"
          _focus={{
            outlineStyle: "none",
            boxShadow: "none",
          }}
        >
          <PopoverArrow />
          <PopoverBody>
            <Box>
              <List>
                <Link
                  href="https://github.com/Pzzzeed/shrt_URL"
                  target="_blank"
                >
                  <ListItem>
                    <Flex
                      h="37px"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Box>
                        <Image
                          src="/iconmonstr-github-1.svg"
                          boxSize="20px"
                          color="black"
                        />
                      </Box>
                      <Box w="142px" ml="15px">
                        <Text textStyle="b2" color="gray.700">
                          Github
                        </Text>
                      </Box>
                    </Flex>
                  </ListItem>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/peeranat-phengsalaeh/"
                  target="_blank"
                >
                  <ListItem>
                    <Flex
                      h="37px"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Box>
                        <Image
                          src="/iconmonstr-linkedin-3.svg"
                          boxSize="20px"
                        />
                      </Box>
                      <Box w="142px" ml="15px">
                        <Text textStyle="b2" color="gray.700">
                          Linkedin
                        </Text>
                      </Box>
                    </Flex>
                  </ListItem>
                </Link>
              </List>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Navbar;
