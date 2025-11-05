import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalStyles from "@/GlobalStyles";


export const metadata = {
  title: "Edigrad International",
  description: "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG Commerce students. Personalized, flexible learning. Unlock your potential today!",
  icons: {
    icon: '/logo.png', // Make sure favicon.png is in /public
  },
  authors : [{name : "Adarsh SR"}],
  keywords: ["Online commerce coaching", "Online tuition for B.Com","Plus Two commerce online tuition", 
    "Best online coaching for commerce","Accountancy online tuition","B.Com online classes",
    "Plus One commerce online classes", "Edigrad International", "Edigrad International online coaching", "Edigrad commerce classes"
   ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GlobalStyles />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
