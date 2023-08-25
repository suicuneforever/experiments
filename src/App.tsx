import { ScrollControls, Scroll, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import MaskHoverItem from './components/MaskHoverItem';
import SlicedImageItem from './components/SlicedImageItem';
import { GMLogo } from './components/GMLogo/GMLogo';

function App() {
  return (
    <>
      <div className="app">
        <Canvas shadows>
          <ambientLight intensity={2.5} />
          <directionalLight color="#ffd86b" intensity={1.5} position={[-44.7, 49.92, -44.94]} />
          <OrbitControls enableZoom={false} />
          <PerspectiveCamera makeDefault position={[-8, 2.5, 2.6]} />
          <ScrollControls pages={4}>
            <GMLogo />
            <Scroll></Scroll>
            <Scroll html>
              <div className="grid">
                <div className="item mask">
                  <MaskHoverItem />
                </div>
                <div className="item sliced">
                  <SlicedImageItem imgPath="img1.png" title="Giant Machines is very cool" date="08/11/2023" />
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
