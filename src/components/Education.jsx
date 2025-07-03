import React from "react";

const Education = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-2 text-yellow-400">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-lg text-gray-300 mb-2">
              Namal University Mianwali
            </p>
            <p className="text-gray-400 mb-4">2023 - 2027</p>
            <p className="text-gray-300">
              Relevant Coursework: DSA, Web Dev, DBMS, Software Eng, Networks,
              OS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
