import React, { useRef, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import { Mesh, BufferGeometry, NormalBufferAttributes, Material } from 'three';

function WebGLBackground() {
  const bg = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null!);
  const viewport = useThree((s) => s.viewport);
  useFrame((_, delta) => {
    if (bg.current) bg.current.rotation.z -= delta * 0.5;
  });
  return (
    <Suspense fallback="">
      <Image
        ref={bg}
        scale={Math.max(viewport.width, viewport.height) * 1.4}
        url="images/codrops-bg-tiny.png"
        transparent
        renderOrder={-1}
      />
    </Suspense>
  );
}

export default WebGLBackground;
