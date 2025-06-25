import { Roboto } from "next/font/google";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { UserProvider } from "../context/UserContext";
import Footer from "../components/Footer";
import { Box, CssBaseline } from "@mui/material";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "e-Learning Portal",
  description: "e-Learning Portal for dummies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <ResponsiveAppBar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </UserProvider>
      </body>
    </html>
  );
}
