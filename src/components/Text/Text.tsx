import { ScrollScene, UseCanvas, styles, useScrollRig } from '@14islands/r3f-scroll-rig';
import { WebGLText } from '@14islands/r3f-scroll-rig/powerups';
import { useRef } from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  font?: string;
};

function Text({ children, className, font = 'fonts/Poppins-Regular.woff', ...props }: TextProps) {
  const element = useRef<HTMLSpanElement>(null!);
  const { hasSmoothScrollbar } = useScrollRig();

  console.log(hasSmoothScrollbar);

  return (
    <>
      <span
        ref={element}
        className={styles.transparentColorWhenSmooth + ' ' + className}
        style={{ display: 'block' }}
        {...props}
      >
        {children}
      </span>

      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={element}>
            {(props) => (
              <WebGLText el={element} font={font} {...props}>
                {children}
              </WebGLText>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  );
}

export default Text;
