import './global.css';

export const metadata = {
  title: 'Journal',
  description: 'Journal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
