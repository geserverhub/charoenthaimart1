export const metadata = {
  title: "เจริญไทยมาร์ท ซูวอน · Charoen Thai Mart",
  description: "ร้านขายของไทยในเกาหลี ซูวอน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
