export default function ThreeDBackground() {
  return (
    <div
      className="three-d-background"
      aria-hidden="true"
    >
      {/* Purple and blue ambient lighting */}
      <div className="three-d-glow three-d-glow-one" />
      <div className="three-d-glow three-d-glow-two" />
      <div className="three-d-glow three-d-glow-three" />

      {/* Animated perspective grid */}
      <div className="three-d-grid" />

      {/* Floating 3D spheres */}
      <div className="three-d-orb three-d-orb-one" />
      <div className="three-d-orb three-d-orb-two" />
      <div className="three-d-orb three-d-orb-three" />

      {/* Rotating 3D rings */}
      <div className="three-d-ring three-d-ring-one" />
      <div className="three-d-ring three-d-ring-two" />

      {/* Floating particles */}
      <div className="three-d-particles">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}