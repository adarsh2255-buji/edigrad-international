import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalStyles from "@/GlobalStyles";
import Script from "next/script"; // You already had this - great!

export const metadata = {
  title: "Edigrad International",
  description: "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG Commerce students. Personalized, flexible learning. Unlock your potential today!",
  icons: {
    icon: '/logo.png',
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

{/* START: Add Google Analytics Scripts Here */}

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-WK4M83EEE1" />
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WK4M83EEE1');
  `}
</Script>


      </body>
    </html>
  );
}