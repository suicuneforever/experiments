import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig';
import { useRef } from 'react';
import { GMLogo } from './GMLogo';
import { Model } from './Gmlogo-fixedorigin';
import { Center, Float } from '@react-three/drei';

function GMLogoSection() {
  const element = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={element}></div>
      <UseCanvas>
        <ScrollScene track={element}>
          {() => (
            <Float speed={2}>
              <Model />
            </Float>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}

export default GMLogoSection;
