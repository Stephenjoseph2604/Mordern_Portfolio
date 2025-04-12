"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";



const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className="pointer-events-none fixed hidden md:block inset-0 z-[99999]" id="canvas" />;
};

export default CanvasCursor;