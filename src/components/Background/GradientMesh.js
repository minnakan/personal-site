import React from 'react';

// Minimal ambient glow - just a subtle color wash
const GradientMesh = () => (
  <div
    className="fixed inset-0 z-0 pointer-events-none"
    style={{
      background: 'linear-gradient(180deg, #0A0A0A 0%, #0B0B0B 50%, #090909 100%)',
    }}
  />
);

export default GradientMesh;
