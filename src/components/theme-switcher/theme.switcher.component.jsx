import { useColorMode, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Fragment } from "react";
import "./theme-switcher.styles.scss";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  
  return (
    <Fragment>
      <Tooltip label={`Mude o tema para ${text}`} borderRadius="5px">
        <IconButton 
          className="switch-trigger"
          size="md" 
          fontSize="lg" 
          color="current" 
          onClick={toggleColorMode} 
          icon={<SwitchIcon/>} 
          />
      </Tooltip>
    </Fragment>
  );
};

export default ThemeSwitcher;