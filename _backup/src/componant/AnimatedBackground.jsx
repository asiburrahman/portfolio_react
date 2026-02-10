import Orb from "./Squares";



const AnimatedBackground = ({ children }) => {
  return (
   

<div style={{ width: '100%', height: 'full', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
  {children}
</div>
  );
};

export default AnimatedBackground;
