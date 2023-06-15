import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Source_Code_Pro } from "next/font/google";

const font = Source_Code_Pro({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["200", "400", "700"],
});

export const metadata = {
  title: "Portofolio",
  description: "This is a presentation of my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
