import { Box, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" p={6}>
      <Stack spacing={2} align="center" lineHeight="21px">
        <Link className="judul_footer" href="https://invitato.id/" fontSize="xl" fontWeight="bold" _hover={{ textDecoration: "none" }}>
          Invitato
        </Link>
        <Link style={{ textAlign:"center" }} className="txt_footer" href="https://invitato.id/" fontSize="sm" _hover={{ textDecoration: "underline" }}>
          Created with Love by Invitato
        </Link>
        <Link style={{ textAlign:"center" }} className="txt_footer" href="https://invitato.id/" fontSize="sm" _hover={{ textDecoration: "underline" }}>
          Song by Beautiful In White - Shane Filan
        </Link>
        <Text className="txt_footer" style={{ textAlign:"center" }} fontSize="sm">
          © 2024 Tiffany & Jared. All Rights Reserved
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
