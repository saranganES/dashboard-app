import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false,
});

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>With Lazy Loading</h2>
      <button onClick={() => setShow(true)}>Load Component</button>

      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
