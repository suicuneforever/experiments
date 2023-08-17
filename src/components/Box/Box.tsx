import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

function Box() {
  const scroll = useScroll();
  const myMesh = useRef<Mesh>(null!);
  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();
    myMesh.current.position.y = Math.cos(time) * 0.2;
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Box;
