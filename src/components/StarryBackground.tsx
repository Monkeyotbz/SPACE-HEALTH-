import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const createStars = () => {
      if (!starsRef.current) return;
      starsRef.current.innerHTML = '';

      // Estrellas fijas
      for (let i = 0; i < 2000; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${1 + Math.random() * 2}px`;
        star.style.height = star.style.width;
        starsRef.current.appendChild(star);
      }

      // Una sola estrella fugaz
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.setProperty('--duration', '8s');
      shootingStar.style.setProperty('--angle', '-5deg');
      const angleY = Math.tan(-50 * Math.PI / 500) * 50;
      shootingStar.style.setProperty('--angle-y', `${angleY}px`);
      shootingStar.style.top = '50%';
      shootingStar.style.left = '0';
      starsRef.current.appendChild(shootingStar);

            // Logo en movimiento
            const logoContainer = document.createElement('div');
            logoContainer.className = 'absolute top-1/4 left-1/4';
            logoContainer.style.width = '350px';
            logoContainer.style.height = 'auto';
            logoContainer.style.transform = 'translate(-100%, -100%)';
            logoContainer.style.animation = 'orbit 300s linear infinite';
      
            const logo = document.createElement('img');
            logo.src = '/LOGO.png';
            logo.alt = 'Space Health Logo';
            logo.className = 'w-35 h-auto';
            logoContainer.appendChild(logo);
      
            starsRef.current.appendChild(logoContainer);
            const logoContainer2 = document.createElement('div');
            logoContainer2.className = 'absolute top-3/4 left-3/4';
            logoContainer2.style.width = '100px';
            logoContainer2.style.height = 'auto';
            logoContainer2.style.transform = 'translate(-100%, -100%)';
            logoContainer2.style.animation = 'orbit 50s linear infinite';
      
            const logo1 = document.createElement('img');
            logo1.src = '/LOGO.png';
            logo1.alt = 'Space Health Logo';
            logo1.className = 'w-20 h-auto';
            logoContainer2.appendChild(logo1);
      
            starsRef.current.appendChild(logoContainer2);
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return <div ref={starsRef} className="stars relative" />;
};

export default StarryBackground;