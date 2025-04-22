import React, { useEffect, useRef, useState } from 'react';

interface ConnectionLineProps {
  active: boolean;
  from: string;
  to: string;
  constant?: boolean;
}

export default function ConnectionLine({
  active,
  from,
  to,
  constant = false
}: ConnectionLineProps) {
  const [line, setLine] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      const fromElement = document.getElementById(from);
      const toElement = document.getElementById(to);

      console.log('fromElement', fromElement);
      console.log('toElement', toElement);

      if (fromElement && toElement && svgRef.current) {
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();

        // Calculate the center points of each element
        const x1 = fromRect.left + fromRect.width / 2;
        const y1 = fromRect.top + fromRect.height / 2;
        const x2 = toRect.left + toRect.width / 2;
        const y2 = toRect.top + toRect.height / 2;

        // Adjust for SVG's position
        const svgRect = svgRef.current.getBoundingClientRect();
        setLine({
          x1: x1 - svgRect.left,
          y1: y1 - svgRect.top,
          x2: x2 - svgRect.left,
          y2: y2 - svgRect.top
        });
      }
    };

    // Initial positioning
    updateLinePosition();

    // Update on resize
    window.addEventListener('resize', updateLinePosition);

    return () => {
      window.removeEventListener('resize', updateLinePosition);
    };
  }, [from, to]);

  return (
    <svg ref={svgRef} className="absolute inset-0 w-full h-full z-2 pointer-events-none">
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={active ? "#fe9a00" : constant ? '#45556c' : 'transparent'}
        strokeWidth="4"
        strokeDasharray="5,5"
        strokeOpacity={active ? 1 : 0.5}
      />
    </svg>
  );
};
