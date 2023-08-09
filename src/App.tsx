import './App.css';
import { motion, useScroll } from 'framer-motion';
import MaskHoverItem from './components/MaskHoverItem';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <div className="card">
        <h1 className="gradient-text">GIANT MACHINES</h1>
        <div className="grid">
          <div className="grid__item">
            {' '}
            <MaskHoverItem />
            <p className="grid__item-label">
              We designed and developed a visually appealing website for CodeCrafters, highlighting their coding
              expertise.
            </p>
            <span className="grid__item-tag">Branding</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Aliquam nulla facilisi cras fermentum odio eu. Adipiscing elit pellentesque habitant morbi
          tristique senectus et. Nec feugiat in fermentum posuere. Urna cursus eget nunc scelerisque viverra mauris in
          aliquam sem. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Rhoncus dolor
          purus non enim. At auctor urna nunc id cursus metus. Aenean euismod elementum nisi quis eleifend quam
          adipiscing vitae. Iaculis nunc sed augue lacus viverra vitae congue. Curabitur gravida arcu ac tortor
          dignissim convallis aenean et tortor. Cras semper auctor neque vitae tempus quam pellentesque.
        </p>
        <p>
          Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus eget. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sit amet aliquam id diam. Aenean pharetra magna
          ac placerat vestibulum lectus mauris ultrices eros. Sit amet purus gravida quis blandit turpis cursus in hac.
          Malesuada fames ac turpis egestas sed tempus urna et pharetra. Turpis nunc eget lorem dolor sed. Aenean
          euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum eu facilisis sed odio morbi quis commodo
          odio. Et ultrices neque ornare aenean euismod elementum. Dolor sit amet consectetur adipiscing. Turpis nunc
          eget lorem dolor sed viverra ipsum nunc aliquet. Enim diam vulputate ut pharetra sit amet aliquam. Fermentum
          posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisi est sit amet facilisis magna etiam.
        </p>
        <p>
          Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Sed cras ornare arcu dui vivamus arcu felis
          bibendum. Ultricies tristique nulla aliquet enim. Eros in cursus turpis massa tincidunt dui ut ornare lectus.
          Sit amet purus gravida quis blandit turpis. Id aliquet lectus proin nibh nisl. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Mattis vulputate enim nulla aliquet porttitor lacus. Malesuada fames ac turpis
          egestas maecenas pharetra convallis posuere morbi. Vehicula ipsum a arcu cursus vitae congue mauris.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Aliquam nulla facilisi cras fermentum odio eu. Adipiscing elit pellentesque habitant morbi
          tristique senectus et. Nec feugiat in fermentum posuere. Urna cursus eget nunc scelerisque viverra mauris in
          aliquam sem. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Rhoncus dolor
          purus non enim. At auctor urna nunc id cursus metus. Aenean euismod elementum nisi quis eleifend quam
          adipiscing vitae. Iaculis nunc sed augue lacus viverra vitae congue. Curabitur gravida arcu ac tortor
          dignissim convallis aenean et tortor. Cras semper auctor neque vitae tempus quam pellentesque.
        </p>
        <p>
          Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus eget. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sit amet aliquam id diam. Aenean pharetra magna
          ac placerat vestibulum lectus mauris ultrices eros. Sit amet purus gravida quis blandit turpis cursus in hac.
          Malesuada fames ac turpis egestas sed tempus urna et pharetra. Turpis nunc eget lorem dolor sed. Aenean
          euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum eu facilisis sed odio morbi quis commodo
          odio. Et ultrices neque ornare aenean euismod elementum. Dolor sit amet consectetur adipiscing. Turpis nunc
          eget lorem dolor sed viverra ipsum nunc aliquet. Enim diam vulputate ut pharetra sit amet aliquam. Fermentum
          posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisi est sit amet facilisis magna etiam.
        </p>
        <p>
          Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Sed cras ornare arcu dui vivamus arcu felis
          bibendum. Ultricies tristique nulla aliquet enim. Eros in cursus turpis massa tincidunt dui ut ornare lectus.
          Sit amet purus gravida quis blandit turpis. Id aliquet lectus proin nibh nisl. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Mattis vulputate enim nulla aliquet porttitor lacus. Malesuada fames ac turpis
          egestas maecenas pharetra convallis posuere morbi. Vehicula ipsum a arcu cursus vitae congue mauris.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Aliquam nulla facilisi cras fermentum odio eu. Adipiscing elit pellentesque habitant morbi
          tristique senectus et. Nec feugiat in fermentum posuere. Urna cursus eget nunc scelerisque viverra mauris in
          aliquam sem. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Rhoncus dolor
          purus non enim. At auctor urna nunc id cursus metus. Aenean euismod elementum nisi quis eleifend quam
          adipiscing vitae. Iaculis nunc sed augue lacus viverra vitae congue. Curabitur gravida arcu ac tortor
          dignissim convallis aenean et tortor. Cras semper auctor neque vitae tempus quam pellentesque.
        </p>
        <p>
          Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus eget. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sit amet aliquam id diam. Aenean pharetra magna
          ac placerat vestibulum lectus mauris ultrices eros. Sit amet purus gravida quis blandit turpis cursus in hac.
          Malesuada fames ac turpis egestas sed tempus urna et pharetra. Turpis nunc eget lorem dolor sed. Aenean
          euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum eu facilisis sed odio morbi quis commodo
          odio. Et ultrices neque ornare aenean euismod elementum. Dolor sit amet consectetur adipiscing. Turpis nunc
          eget lorem dolor sed viverra ipsum nunc aliquet. Enim diam vulputate ut pharetra sit amet aliquam. Fermentum
          posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisi est sit amet facilisis magna etiam.
        </p>
        <p>
          Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Sed cras ornare arcu dui vivamus arcu felis
          bibendum. Ultricies tristique nulla aliquet enim. Eros in cursus turpis massa tincidunt dui ut ornare lectus.
          Sit amet purus gravida quis blandit turpis. Id aliquet lectus proin nibh nisl. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Mattis vulputate enim nulla aliquet porttitor lacus. Malesuada fames ac turpis
          egestas maecenas pharetra convallis posuere morbi. Vehicula ipsum a arcu cursus vitae congue mauris.
        </p>
      </div>
    </>
  );
}

export default App;
