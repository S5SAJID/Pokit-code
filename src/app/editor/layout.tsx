import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Editor — Pokit Code Editor for Developers',
  description: `Pokit Code is the ultimate code editor, providing a seamless coding experience. Perfect for both seasoned developers and beginners, Pokit Code streamlines your coding journey with its intuitive design. Enhance your efficiency and create, edit, and debug code effortlessly. Try our HTML editor for a versatile coding experience.`,
  keywords: ['Pokit Code', 'code editor', 'fast code editor', 'intuitive code editor', 'developer tools', 'coding experience', 'efficient code editing', 'code debugging', 'coding platform', 'HTML editor'],
  icons: ['images/favicon.png'],
}
export default function EditorLayout({children}: {children: React.ReactNode}) {
    return (
      <div>
        {children}
      </div>
    );
}