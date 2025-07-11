import './globals.css';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins', 
  display: 'swap',      
});


export const metadata = {
  title: 'Tech4Logic',
  description: 'Your app description',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
