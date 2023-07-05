import React from "react";
import {
  Button,
  Input,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Text,
} from "@chakra-ui/react";

const Form = ({ handleSubmit, longUrl, setLongUrl, notUrl, isLoading }) => {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="row" w={300}>
          <FormControl isInvalid={notUrl}>
            <Input
              type="text"
              placeholder="Enter a URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              bg="white"
            />
            {!notUrl ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>
                <Text color="red">
                  Unable to shorten that link. It is not a valid url.
                </Text>
              </FormErrorMessage>
            )}
            {isLoading ? (
              <Button type="submit" isLoading loadingText="Processing..">
                Shorten
              </Button>
            ) : (
              <Button type="submit" variant="solid">
                Shorten
              </Button>
            )}
          </FormControl>
        </Flex>
      </form>
    </Box>
  );
};

export default Form;
