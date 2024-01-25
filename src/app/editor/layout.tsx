import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Editor - Pokit Code",
    description: "Light & Fast Code Editor",
}

export default function EditorLayout({children}: {children: React.ReactNode}) {
    return (
      <div>
        {children}
      </div>
    );
}