import "./globals.css";
import Header from '@components/Header'; // Ensure the path is correct
import Footer from '@components/Footer'; // Utilisation de l'alias

export const metadata = {
  title: 'Travel X', // Titre de ton application
  description: 'Une application de voyage durable', // Description
};

// Ajoutez cette fonction pour inclure le lien Google Fonts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Add the <html> tag */}
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen bg-blue-200"> {/* Set the background color here */}
        <Header /> {/* Header présent sur toutes les pages */}
        <main className="flex-grow">{children}</main> {/* Contenu principal de la page */}
        <Footer /> {/* Footer présent sur toutes les pages */}
      </body>
    </html>
  );
}
