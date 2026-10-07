import React from "react";

/**
 * Fixed ambient backdrop: soft, slowly drifting aurora washes that evoke
 * thoughts and inspiration. Sits behind all content (negative z-index)
 * and never intercepts pointer events. Disabled by reduced-motion.
 */
const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-[15%] left-[-12%] h-[55vmax] w-[55vmax] rounded-full blur-2xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-violet), transparent 60%)",
        }}
      />
      <div
        className="absolute top-[25%] right-[-18%] h-[50vmax] w-[50vmax] rounded-full blur-2xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-amber), transparent 60%)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[10%] h-[48vmax] w-[48vmax] rounded-full blur-2xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-blue), transparent 60%)",
          animationDelay: "-15s",
        }}
      />
    </div>
  );
};

export default AmbientBackground;
