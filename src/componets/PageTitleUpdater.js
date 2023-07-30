import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    const pageTitleMap = {
      '/picture-web': 'On The DL Home Page',
      '/about': 'On The DL About Page',
      '/contact': 'On The DL Contact Page',
    };

    document.title = pageTitleMap[currentPath] || 'On The DL';
  }, [location]);

  return null;
};

export default PageTitleUpdater;
