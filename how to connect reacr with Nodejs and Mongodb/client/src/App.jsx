import { useEffect, useState } from 'react';


function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000');
        const data = await res.json();
        // Ensure data.items exists and is an array before setting state.
        setItem(data.items || []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <>
      {items.map(i => (
        <p key={i.id || i.name}>
          {i.name}, {i.description}
        </p>
      ))}
    </>
  );
}

export default App;
