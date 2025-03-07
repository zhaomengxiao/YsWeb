import React from 'react';

const TechAdvantages: React.FC = () => {
  return (
    <section className="tech-advantages">
      <h2>技术优势</h2>
      <div className="grid-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Advantage Cards Here */}
        <div className="advantage-card">
          <h3>优势 1</h3>
          <p>技术亮点 1 描述</p>
        </div>
        <div className="advantage-card">
          <h3>优势 2</h3>
          <p>技术亮点 2 描述</p>
        </div>
        <div className="advantage-card">
          <h3>优势 3</h3>
          <p>技术亮点 3 描述</p>
        </div>
      </div>
    </section>
  );
};

export default TechAdvantages;
