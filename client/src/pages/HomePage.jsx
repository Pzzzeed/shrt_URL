import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import {
  Flex,
  Button,
  Text,
  Box,
  Link,
  Img,
  useClipboard,
} from "@chakra-ui/react";

import { CopyIcon } from "@chakra-ui/icons";

const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [notUrl, setNotUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { onCopy, hasCopied } = useClipboard(shortUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotUrl(false);
    setIsLoading(true);
    const backend = import.meta.env.VITE_BACKEND_URL;
    try {
      if (isUrl(longUrl)) {
        const inputUrl = fixUrl(longUrl);
        const postData = { longUrl: inputUrl };

        const response = await axios.post(`${backend}/create`, postData);
        setShortUrl(response.data.shortUrl);
      } else {
        setNotUrl(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  function isUrl(str) {
    let exp = new RegExp(
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    );
    if (exp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  function fixUrl(url) {
    if (
      url.substring(0, 7) === "http://" ||
      url.substring(0, 8) === "https://"
    ) {
      return url;
    } else {
      return `http://${url}`;
    }
  }

  return (
    <Box bgColor="#F8F6F4" w="100vw" h="100vh">
      <Flex
        bgColor="#F8F6F4"
        justify="center"
        align="center"
        flexDirection="column"
        pt={120}
      >
        <Box mb={10}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="6xl"
            letterSpacing="wide"
            color="teal.600"
            textAlign="center"
          >
            Welcome
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="3xl"
            letterSpacing="wide"
            color="teal.600"
            textAlign="center"
          >
            Let shrten your looooong URL
          </Text>
        </Box>
        <Box
          p={4}
          display={{ md: "flex", "2xl": "flex" }}
          align="center"
          bg="white"
          borderRadius="10px"
        >
          <Box flexShrink={0} mt="1%">
            <Text
              fontWeight="light"
              fontSize="xl"
              color="teal.700"
              textAlign="center"
            >
              Make an awesome link here
            </Text>
            <Form
              handleSubmit={handleSubmit}
              longUrl={longUrl}
              setLongUrl={setLongUrl}
              notUrl={notUrl}
              isLoading={isLoading}
              width={{ md: 40 }}
            />
          </Box>
          {shortUrl && (
            <Box mt={{ base: 4, md: 4 }} ml={{ md: 6 }}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="teal.600"
              >
                Shortened URL
              </Text>
              <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl}
              </Link>
              <Button
                mt={2}
                color="gray.500"
                onClick={onCopy}
                leftIcon={<CopyIcon />}
              >
                {hasCopied ? "Copied!" : "Copy"}
              </Button>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
