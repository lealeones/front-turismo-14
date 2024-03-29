import { Toaster } from "@/components/ui/toaster";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/ui/Footer";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from "react-toastify";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Toaster />
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}


