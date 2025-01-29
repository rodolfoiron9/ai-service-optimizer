interface ServicesHeaderProps {
  title: string;
  description: string;
}

export const ServicesHeader = ({ title, description }: ServicesHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};