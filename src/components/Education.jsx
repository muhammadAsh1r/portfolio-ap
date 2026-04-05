import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4 text-center">
            Education <span className="text-primary italic">Background</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden transition-all duration-500 hover:border-primary/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-black text-secondary group-hover:text-primary transition-colors tracking-tight">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-xl text-secondary/60 font-medium italic mt-2">
                  Namal University Mianwali
                </p>
              </div>
              <div className="shrink-0">
                <span className="px-6 py-2 bg-primary text-bg-dark font-black text-sm uppercase tracking-widest rounded-full shadow-lg">
                  2023 - 2027
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-px w-full bg-secondary/5" />
              <p className="text-secondary/60 leading-relaxed text-lg">
                Focusing on building a strong theoretical and practical foundation in computing. 
                Actively engaged in software engineering principles and modern web architectures.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['DSA', 'Web Dev', 'DBMS', 'Software Engineering', 'Networks', 'OS'].map((course) => (
                  <span key={course} className="px-4 py-2 bg-secondary/5 text-secondary/40 text-xs font-bold uppercase tracking-widest rounded-xl border border-secondary/10">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Education);
