import '@/styles/globals.css';
import Footer from '@/components/Common/Footer/Footer';

export const metadata = {
  title: 'ZIPZOONG | 집중',
  description: '',
  icons: {
    icon: '/Images/LOGO3.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" style={{backgroundColor: '#FBF9F1', minHeight: '100%'}}>
      <body style={{minHeight: '100%'}}>
        <section style={{height: '100%', position: 'relative'}}>
          <section>{children}</section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
