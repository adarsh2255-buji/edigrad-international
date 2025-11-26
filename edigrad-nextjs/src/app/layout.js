import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalStyles from "@/GlobalStyles";
import Script from "next/script"; // You already had this - great!

export const metadata = {
   metadataBase: new URL("https://www.edigrad.com"),
  title: "Edigrad International",
  description: "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG commerce students. Flexible, personalized learning.",
    keywords: [
    "Online commerce coaching",
    "B.Com online classes",
    "Plus Two commerce online tuition",
    "Accountancy online tuition",
    "Commerce entrance coaching",
    "Edigrad International"
  ],
  authors : [{name : "Adarsh SR"}],
  icons: {
    icon: [
      { url: '/favicon.ico', size: "any"},
      { url: "/logo.png", type: "image/png"}
    ]
  },
  openGraph: {
    title: "Edigrad International Online Tuition for Commerce Students",
    description:
      "Live online coaching for +1, +2, B.Com and PG commerce students. High-quality learning from expert tutors.",
    url: "https://www.edigrad.com",
    siteName: "Edigrad International",
    images: [
      {
        url: "/logo.png",  
        width: 1200,
        height: 630,
        alt: "Edigrad International Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edigrad International",
    description:
      "Online commerce tuition for Plus One, Plus Two and degree students.",
    images: ["/logo.png"],
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GlobalStyles />
        <Header />
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Edigrad International",
  "url": "https://www.edigrad.com",
  "logo": "https://www.edigrad.com/logo.png",
  "description": "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG Commerce students.",
  "founder": {
    "@type": "Person",
    "name": "Adarsh SR"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "contact@edigrad.com"
  }
}
`}
</script>

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