/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/gmlogo.glb --types 
*/

import { useLayoutEffect, useRef } from 'react';
import { Float, useGLTF, useScroll } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    blue: Mesh;
    green: Mesh;
    pink: Mesh;
    yellow: Mesh;
  };
  materials: {
    ['Material.003']: MeshStandardMaterial;
    ['Material.004']: MeshStandardMaterial;
    ['Material.001']: MeshStandardMaterial;
    ['Material.002']: MeshStandardMaterial;
  };
};

export function GMLogo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/gmlogo.glb') as GLTFResult;
  const group = useRef<Group>(null!);
  const pink = useRef<Mesh>(null!);
  const blue = useRef<Mesh>(null!);
  const green = useRef<Mesh>(null!);
  const yellow = useRef<Mesh>(null!);
  const timeline = useRef<GSAPTimeline>(null!);
  const scroll = useScroll();

  // useFrame(({ clock }) => {
  //   const time = clock.getElapsedTime();
  //   group.current.position.y = Math.cos(time) * 0.2;

  //   timeline.current.seek(scroll.offset * timeline.current.duration());
  // });

  // useLayoutEffect(() => {
  //   timeline.current = gsap.timeline({ defaults: { duration: 2, ease: 'power1.inOut' } });

  //   timeline.current
  //     .to(yellow.current.position, { x: -0.951, y: 2.356, z: -0.084 }, 1)
  //     .to(green.current.position, { x: 2.324, y: 0.302, z: -5.266 }, 1)
  //     .to(blue.current.position, { x: -2.231, y: -0.202, z: -0.237 }, 1)
  //     .to(pink.current.position, { x: -1.401, y: 0.025, z: 1.631 }, 1)

  //     .to(yellow.current.position, { x: -0.198, y: 1.494, z: -0.737 }, 5)
  //     .to(green.current.position, { x: -0.198, y: 0.994, z: -0.737 }, 5)
  //     .to(blue.current.position, { x: -0.198, y: 0.994, z: -0.237 }, 5)
  //     .to(pink.current.position, { x: -0.198, y: 0.494, z: -0.237 }, 5)

  //     .to(group.current.rotation, { y: 0.25, z: -0.1 }, 6);
  // }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={100}>
      <mesh
        ref={yellow}
        geometry={nodes.yellow.geometry}
        material={materials['Material.002']}
        position={[-0.198, 1.494, -0.737]}
      />
      <mesh
        ref={green}
        geometry={nodes.green.geometry}
        material={materials['Material.004']}
        position={[-0.198, 0.994, -0.737]}
      />
      <mesh
        ref={blue}
        geometry={nodes.blue.geometry}
        material={materials['Material.003']}
        position={[-0.198, 0.994, -0.237]}
      />
      <mesh
        ref={pink}
        geometry={nodes.pink.geometry}
        material={materials['Material.001']}
        position={[-0.198, 0.494, -0.237]}
      />
    </group>
  );
}

useGLTF.preload('/gmlogo.glb');
