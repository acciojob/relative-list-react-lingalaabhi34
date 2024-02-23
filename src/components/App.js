import React from 'react';

const App = () => {
  const data = ["Abhi", "Lingala", "Kumar"];
  return (
    <div id="main">
      <ol key="relativeList">
        {data.map((item, index) => (
          <li key={`relativeListItem${index + 1}`}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
