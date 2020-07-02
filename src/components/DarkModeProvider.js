import React from 'react';


function getInitialColorMode() {
    const persistedColorPreference =
      window.localStorage.getItem('color-mode');
    const hasPersistedPreference =
      typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light'; 

}

const Colors = {

    background: {
        light: "#F4F0ED",
        dark: "#3A4042",
    },

    text: {
        light: "#0F171B",
        dark: "#F4F0ED",

    }

}



export const MagicScriptTag = () => {
    let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        const persistedColorPreference =
          window.localStorage.getItem('color-mode');
        const hasPersistedPreference =
          typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'light'; 
    
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
     
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? "${Colors.background.light}"
        : "${Colors.background.dark}"
    );

    root.style.setProperty(
        '--color-text',
        colorMode === 'light'
          ? "${Colors.text.light}"
          : "${Colors.text.dark}"
      );
  
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;
    // eslint-disable-next-line react/no-danger
    return (
      <script
        dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
      />
    );
};



  export const ThemeContext = React.createContext();
  export const ThemeProvider = ({ children }) => {
    const [
      colorMode,
      rawSetColorMode
    ] = React.useState(undefined);
    React.useEffect(() => {
      const root = window.document.documentElement;
      const initialColorValue =
        root.style.getPropertyValue('--initial-color-mode');
      rawSetColorMode(initialColorValue);
    }, []);
    
    function setColorMode(newValue) {
        const root = window.document.documentElement;
        // 1. Update React color-mode state
        rawSetColorMode(newValue);
        // 2. Update localStorage
        localStorage.setItem('color-mode', newValue);
        // 3. Update each color
        
        root.style.setProperty(
          '--color-background',
          newValue === 'light'
          ? Colors.background.light
          : Colors.background.dark
        );

        root.style.setProperty(
            '--color-text',
            colorMode === 'light'
              ? Colors.text.light
              : Colors.text.dark
          );
      
      }
    return (
      <ThemeContext.Provider value={{ colorMode, setColorMode }}>
        {children}
      </ThemeContext.Provider>
    )
  };



  export const DarkToggle = () => {
    const { colorMode, setColorMode } = React.useContext(
      ThemeContext
    );
    if (!colorMode) {
        return null;
      }
        return (
      <label>
        <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={ev => {
            setColorMode(ev.target.checked ? 'dark' : 'light');
          }}
        />{' '}
        Dark
      </label>
    );
  };