import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const mounted = useRef(true);

  const myRef = useRef(() => {
    if (mounted.current) {
      // Simulate fetching data (replace with your actual async operation)
      setTimeout(() => {
        setData('Data fetched!');
      }, 2000);
    }
  });

  useEffect(() => {
    myRef.current();
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;