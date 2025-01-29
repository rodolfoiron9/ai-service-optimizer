import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};