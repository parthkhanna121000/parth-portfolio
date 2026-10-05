"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { MathUtils, Vector3, type Group } from "three";
import { techs, categories, catAngle, catCenter, techPos, type Cat, type Tech } from "./techData";
import { TechNode } from "./TechNode";

type P = { filter: "All" | Cat; selected: Tech | null; onSelect: (t: Tech) => void; reduced: boolean };
type Shared = {
  els: React.MutableRefObject<(HTMLDivElement | null)[]>;
  hover: React.MutableRefObject<boolean>;
};

const tmp = new Vector3();

function Scene({ filter, selected, reduced, els, hover }: Omit<P, "onSelect"> & Shared) {
  const g = useRef<Group>(null);
  const auto = useRef(0);

  useFrame((s, dt) => {
    const o = g.current;
    if (!o) return;
    const px = reduced ? 0 : s.pointer.x;
    const py = reduced ? 0 : s.pointer.y;

    let target: number;
    if (filter === "All") {
      if (!reduced && !selected && !hover.current) auto.current += dt * 0.08;
      target = auto.current + px * 0.4;
    } else {
      target = MathUtils.euclideanModulo(-catAngle(filter) + Math.PI, 2 * Math.PI) - Math.PI + px * 0.12;
    }
    o.rotation.y = MathUtils.damp(o.rotation.y, target, 3, dt);
    o.rotation.x = MathUtils.damp(o.rotation.x, -py * 0.15, 3, dt);
    o.updateMatrixWorld();

    // Project each tech's 3D position to screen space and move its DOM tile there.
    techs.forEach((t, i) => {
      const el = els.current[i];
      if (!el) return;
      const [x, y, z] = techPos(t);
      tmp.set(x, y + (reduced ? 0 : Math.sin(s.clock.elapsedTime + i) * 0.1), z);
      o.localToWorld(tmp);
      const dist = tmp.distanceTo(s.camera.position);
      tmp.project(s.camera);
      const sx = (tmp.x * 0.5 + 0.5) * s.size.width;
      const sy = (-tmp.y * 0.5 + 0.5) * s.size.height;
      const k = Math.min(1.2, Math.max(0.6, 9.5 / dist));
      el.style.transform = `translate3d(${sx}px,${sy}px,0) translate(-50%,-50%) scale(${k})`;
      el.style.zIndex = String(Math.round((1 - tmp.z) * 10000));
    });
  });

  return (
    <>
      {!reduced && <Sparkles count={70} scale={[14, 7, 8]} size={2} speed={0.25} opacity={0.45} color="#A78BFA" />}
      <group ref={g}>
        {categories.map((c) => {
          const on = filter === "All" || filter === c;
          return (
            <group key={c}>
              <Line points={[[0, 0, 0], catCenter(c)]} color="#7C3AED" transparent opacity={on ? 0.22 : 0.05} lineWidth={1} />
              {techs
                .filter((t) => t.category === c)
                .map((t) => (
                  <Line key={t.name} points={[catCenter(c), techPos(t)]} color="#7C3AED" transparent opacity={on ? 0.28 : 0.04} lineWidth={1} />
                ))}
            </group>
          );
        })}
      </group>
    </>
  );
}

export default function TechGalaxy({ filter, selected, onSelect, reduced }: P) {
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const hover = useRef(false);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene filter={filter} selected={selected} reduced={reduced} els={els} hover={hover} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {techs.map((t, i) => (
          <div
            key={t.name}
            ref={(el) => { els.current[i] = el; }}
            className="pointer-events-auto absolute left-0 top-0 will-change-transform"
          >
            <TechNode
              t={t}
              active={filter === "All" || filter === t.category}
              selected={selected?.name === t.name}
              onSelect={() => onSelect(t)}
              onHover={(h) => { hover.current = h; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}