import "@styles/globals.css";

export const metadata = {
  title: "Sharepromts",
  description:
    "Sharepromts is a platform for sharing AI prompts and ideas to get relevent informaiton from AI models.",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
