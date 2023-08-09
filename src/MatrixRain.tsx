import { useEffect, useRef } from 'react';
import Matrix from './Matrix.ts';

function MatrixRainEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const matrixOptions = {
      font_size: 16,
      width: window.innerWidth,
      height: window.innerHeight,
      font: 'monospace',
      color: '#0F0',
      columns: 0,
      speed: 4,
      background: 'rgba(0, 0, 0, 0.05)',
    };

    const matrix = new Matrix(canvasRef.current, matrixOptions);

    matrix.start();

    return () => {
      matrix.stop();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      {/* Your content */}
    </div>
  );
}

export default MatrixRainEffect;
