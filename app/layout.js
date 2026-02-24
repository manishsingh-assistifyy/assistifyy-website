import "@/styles/app.scss";

export const metadata = {
  title: "Assistifyy - Coming Soon",
  description: "Coming Soon",
  siteName: "Assistifyy",
  type: "website",

  icons: {
    icon: "/favicon.svg",
  },

  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

import Header from "./components/Header";
import { ToastProvider } from "./components/Toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Header />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}