const GlobalStyles = () => (
  <style>{`
    /* A simple fade-in animation for sections */
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

    /* We can apply this to sections for a subtle load-in effect */
    .fade-in-section {
      animation: fadeIn 1s ease-out forwards;
      /* Start invisible, animation will make it visible */
      opacity: 0;
    }

    /* Staggered animation for children */
    .fade-in-section > * {
      animation: fadeIn 1s ease-out 0.3s forwards;
      opacity: 0;
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