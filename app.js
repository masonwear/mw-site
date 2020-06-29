import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"

const App = () => {
 
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        
      </>
    </ThemeProvider>
    
  );
};
export default App;