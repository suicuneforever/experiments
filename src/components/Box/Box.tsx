import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function Box() {
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
