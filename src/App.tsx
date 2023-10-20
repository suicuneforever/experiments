import { ScrollControls, Scroll, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import MaskHoverItem from './components/MaskHoverItem';
import SlicedImageItem from './components/SlicedImageItem';
import { GMLogo } from './components/GMLogo/GMLogo';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import GMLogoSection from './components/GMLogo/GMLogoSection';
import WebGLBackground from './components/WebGLBackground';
import Text from './components/Text/Text';
import '../styles.css';

function App() {
  return (
    <>
      <p>hi</p>
      <Text>Testing Text</Text>
      <GlobalCanvas>
        <ambientLight intensity={3} />
        {/* <Environment preset="city" /> */}
        <WebGLBackground />
        {/* Children from UseCanvas are automatically injected here */}
      </GlobalCanvas>
      <SmoothScrollbar>{() => <GMLogoSection />}</SmoothScrollbar>
    </>
  );
}

export default App;
