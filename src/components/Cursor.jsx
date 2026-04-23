import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let fx = 0, fy = 0;
    let cx = 0, cy = 0;
    let rafId;

    const move = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = cx - 5 + 'px';
        cursorRef.current.style.top = cy - 5 + 'px';
      }
    };

    const animate = () => {
      fx += (cx - fx) * 0.12;
      fy += (cy - fy) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = fx - 17 + 'px';
        followerRef.current.style.top = fy - 17 + 'px';
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      if (e.target.matches('a, button, [data-hover]')) setHovering(true);
    };
    const onLeave = (e) => {
      if (e.target.matches('a, button, [data-hover]')) setHovering(false);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className={`cursor ${hovering ? 'hover' : ''}`} ref={cursorRef} />
      <div className={`cursor-follower ${hovering ? 'hover' : ''}`} ref={followerRef} />
    </>
  );
}
