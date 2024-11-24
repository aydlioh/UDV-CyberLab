export const scrollToTop = (): Promise<void> => {
  return new Promise(resolve => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.removeEventListener('scroll', handleScroll);
        resolve();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.scrollY === 0) {
      window.removeEventListener('scroll', handleScroll);
      resolve();
    }
  });
};
