import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Loan Payoff Optimizer",
  description: "Optimize student loan payoff strategies. Analyze multiple loans and find the fastest, cheapest path to debt freedom."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="165c9a12-3126-4f6c-b7cd-e4b29b97b512"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
