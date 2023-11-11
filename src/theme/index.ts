import { extendTheme } from "@chakra-ui/react";
import { cardStyle } from "./components/card";
import { config } from "./config";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/typography";
import { semanticTokens } from "./semantic-tokens";
import { styles } from "./styles";

export const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  colors,
  fonts,
  components: {
    Card: cardStyle,
  },
});
