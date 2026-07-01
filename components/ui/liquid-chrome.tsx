"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const vertexShader = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec3 uResolution;
  uniform vec3 uBaseColor;
  uniform float uAmplitude;
  uniform float uFrequencyX;
  uniform float uFrequencyY;
  uniform vec2 uMouse;
  varying vec2 vUv;

  vec4 renderImage(vec2 uvCoord) {
    vec2 fragCoord = uvCoord * uResolution.xy;
    vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

    for (float i = 1.0; i < 10.0; i++){
      uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
      uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
    }

    vec2 diff = (uvCoord - uMouse);
    float dist = length(diff);
    float falloff = exp(-dist * 20.0);
    float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
    uv += (diff / (dist + 0.0001)) * ripple * falloff;

    vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
    return vec4(color, 1.0);
  }

  void main() {
    vec4 col = vec4(0.0);
    int samples = 0;
    for (int i = -1; i <= 1; i++){
      for (int j = -1; j <= 1; j++){
        vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
        col += renderImage(vUv + offset);
        samples++;
      }
    }
    gl_FragColor = col / float(samples);
  }
`;

export default function LiquidChrome({
  baseColor = [0.027, 0.027, 0.027] as [number, number, number],
  speed = 0.22,
  amplitude = 0.4,
  frequencyX = 2.5,
  frequencyY = 1.5,
  interactive = true,
  opacity = 1,
}: {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
  opacity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height]) },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    gl.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
    container.appendChild(gl.canvas);

    function resize() {
      renderer.setSize(container!.offsetWidth, container!.offsetHeight);
      const r = program.uniforms.uResolution.value as Float32Array;
      r[0] = gl.canvas.width;
      r[1] = gl.canvas.height;
      r[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Use window-level events so interaction works even with pointer-events-none on container
    function handleMouseMove(e: MouseEvent) {
      const r = program.uniforms.uMouse.value as Float32Array;
      r[0] = e.clientX / window.innerWidth;
      r[1] = 1 - e.clientY / window.innerHeight;
    }
    function handleTouchMove(e: TouchEvent) {
      if (!e.touches.length) return;
      const t = e.touches[0];
      const r = program.uniforms.uMouse.value as Float32Array;
      r[0] = t.clientX / window.innerWidth;
      r[1] = 1 - t.clientY / window.innerHeight;
    }

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    let animationId: number;
    function update(t: number) {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
      gl.canvas.parentElement?.removeChild(gl.canvas);
      (gl.getExtension("WEBGL_lose_context") as WEBGL_lose_context | null)?.loseContext();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ opacity }} />;
}
