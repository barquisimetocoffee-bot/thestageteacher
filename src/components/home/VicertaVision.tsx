import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const VicertaVision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollInFromBottom>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            The Vicerta Vision
          </h2>
          
          <div className="space-y-6 text-lg text-blue-50 leading-relaxed">
            <p>
              Today's education system is at a breaking point. Teachers are stretched thin, juggling overwhelming workloads, large class sizes, and the risk of burnout. At the same time, every student needs a personalized approach to truly thrive—a demand that often exceeds a teacher's available time and resources.
            </p>
            
            <p>
              Vicerta was founded to solve this challenge. We're not just a platform; we're the driving force behind a new era of educational innovation. Our mission is to empower educators by reducing time-consuming administrative tasks, allowing them to focus on what matters most: inspiring and engaging their students.
            </p>
            
            <p>
              With our first tool, <span className="font-bold text-white bg-blue-500 px-2 py-1 rounded">Pencil</span>, you can get a glimpse of this revolution. Join us as a teacher and experience the beginning of a future where technology supports human connection. Stay tuned for all the new products and tools we have planned.
            </p>
          </div>
        </ScrollInFromBottom>
      </div>
    </section>
  );
};

export default VicertaVision;