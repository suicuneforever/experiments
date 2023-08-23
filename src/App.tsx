import './App.css';
import MaskHoverItem from './components/MaskHoverItem';
import SlicedImageItem from './components/SlicedImageItem';

function App() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />    */}

      {/* <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <ScrollControls pages={5}>
            <Box />
            <Scroll></Scroll>
            <Scroll html>
              <h1
                style={{
                  position: 'absolute',
                  top: `100vh`,
                  left: '60vw',
                  fontSize: '25em',
                  transform: `translate3d(0,-100%,0)`,
                }}
              >
                all
              </h1>
              <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
              <h1 style={{ position: 'absolute', top: '260vh', left: '90vw' }}>thee,</h1>
              <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
              <h1 style={{ position: 'absolute', top: '450vh', left: '90vw' }}></h1>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div> */}

      <div>
        <div className="grid">
          <MaskHoverItem />
          <SlicedImageItem imgPath="img/img1.jpg" title="Code CR-4519: Anomaly Detection in Array" date="08/11/2023" />
        </div>
      </div>
    </>
  );
}

export default App;
