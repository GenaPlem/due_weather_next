import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DueWeather",
  description:
    "Due Weather - a convenient web application for viewing current weather and forecasts for several days in different cities around the world.",
  keywords:
    "weather, forecast, weather app, meteorology, today's weather, weekly weather, weather service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {/* <Header /> */}
          <main id="main">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
