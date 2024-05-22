type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600 py-10">
      <div className="min-w-[50vw] flex flex-col items-center justify-center rounded-lg bg-white p-20 shadow-md ">
        {children}
      </div>
    </div>
  );
};
