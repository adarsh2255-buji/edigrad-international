const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
    }

    /* --- Scroll-based animation classes --- */
    .scroll-fade-in {
      opacity: 0;
      transform: translateY(30px);
      /* Using a nice cubic-bezier for a "pop" effect */
      transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                  transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .scroll-fade-in.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* --- Load-in animations (unchanged) --- */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Custom animation for the hero */
    .hero-fade-in {
       animation: fadeIn 0.8s ease-out 0.2s forwards;
       opacity: 0;
    }
    
    .hero-fade-in-delay {
       animation: fadeIn 0.8s ease-out 0.5s forwards;
       opacity: 0;
    }

    /* Preloader pulse animation */
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
    .preloader-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    /* Main site fade-in animation */
    @keyframes fadeInSite {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .fade-in-site {
      animation: fadeInSite 0.5s ease-in forwards;
    }
  `}</style>
);
export default GlobalStyles;