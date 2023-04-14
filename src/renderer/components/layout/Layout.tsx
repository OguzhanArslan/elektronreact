import { ReactElement, ReactText } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

interface LayoutProps {
  children: ReactElement | ReactText;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
