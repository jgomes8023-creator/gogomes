// React component for Foot Pedal effects UI
import React, { useState } from 'react';

function FootPedal() {
  const [effects, setEffects] = useState({
    reverb: false,
    delay: false,
    distortion: false,
    pitchShift: false
  });

  const toggleEffect = (effect) => {
    setEffects({ ...effects, [effect]: !effects[effect] });
  };

  return (
    <div className="foot-pedal">
      <h2>Foot Pedal Effects</h2>
      <div className="effects-list">
        {Object.keys(effects).map(effect => (
          <button
            key={effect}
            className={effects[effect] ? 'active' : ''}
            onClick={() => toggleEffect(effect)}
          >
            {effect.charAt(0).toUpperCase() + effect.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FootPedal;