import offerData from '../data/offerData';
import OfferCard from '../components/OfferCard';
import AnimateOnScroll from '../customHooks/AnimateOnScroll';



export const metadata = {
  title: "Edigrad International",
  description: "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG Commerce students. Personalized, flexible learning. Unlock your potential today!",
  icons: {
    icon: '/favicon.ico', // Make sure favicon.png is in /public
  },
  authors : [{name : "Adarsh SR"}],
  keywords: ["Online Financial Accounting tuition", "Cost Accounting online coaching","Corporate Law online classes",
    "Online Auditing classes", "Business Studies online tuition", "Economics online tuition for class 12",
    "Informatics Practices online coaching"
   ]
};

const Offer = () => {
  return (
    <>
    <AnimateOnScroll>
     <section id="courses" className="py-20 md:py-24 fade-in-section">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto family-sans">
            Expert coaching tailored for every stage of your commerce education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {offerData.map((card, index) => (
            <OfferCard
              key={index}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              items={card.items}
            />
          ))}
        </div>

      </div>
    </section>
    </AnimateOnScroll>
    </>
  )
}

export default Offer