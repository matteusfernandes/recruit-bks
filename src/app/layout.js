import { ToastContainer } from 'react-toastify';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Providers from '@/providers';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <head>
        <title>Black Skulls Tactical Team</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </head>
      <body>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
