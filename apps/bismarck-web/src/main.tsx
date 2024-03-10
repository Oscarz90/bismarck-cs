import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <div className="bg-indigo-500 p-2 font-mono">Hello!</div>;
        <Button>Button</Button>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
