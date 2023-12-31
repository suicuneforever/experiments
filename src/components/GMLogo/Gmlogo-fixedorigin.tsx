/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/gmlogo-fixedorigin.glb --types 
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    blue: THREE.Mesh;
    green: THREE.Mesh;
    pink: THREE.Mesh;
    yellow: THREE.Mesh;
  };
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/gmlogo-fixedorigin.glb') as GLTFResult;
  return (
    <group {...props} dispose={null} scale={100} position={[0, -100, 0]} rotation={[-43.64, -61.2, 0]}>
      <mesh geometry={nodes.blue.geometry} material={materials['Material.003']} position={[0.115, 0, 0.018]} />
      <mesh geometry={nodes.green.geometry} material={materials['Material.004']} position={[0.115, 0, -0.482]} />
      <mesh geometry={nodes.pink.geometry} material={materials['Material.001']} position={[0.115, -0.5, 0.018]} />
      <mesh geometry={nodes.yellow.geometry} material={materials['Material.002']} position={[1.115, 0, 0.018]} />
    </group>
  );
}

useGLTF.preload('/gmlogo-fixedorigin.glb');
