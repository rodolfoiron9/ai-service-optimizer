export const StatsSection = () => {
  return (
    <div className="bg-emerald-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">300%</div>
            <div className="text-emerald-300">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">85%</div>
            <div className="text-emerald-300">Time Saved on Campaigns</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">2M+</div>
            <div className="text-emerald-300">Leads Generated</div>
          </div>
        </div>
      </div>
    </div>
  );
};