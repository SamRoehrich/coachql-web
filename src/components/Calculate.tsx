import { useState } from "react";
import { FC } from "react";

const Calculate: FC = () => {
  const [bw, setBw] = useState("");
  const [added, setAdded] = useState("");
  const [results, setResults] = useState<number[]>([]);
  function calculatePercentages() {
    let results = [];
    let percentages = [0.6, 0.7, 0.8, 0.9];
    let total = parseInt(bw) + parseInt(added);
    for (let i = 0; i < percentages.length; i++) {
      results.push(total * percentages[i] - parseInt(bw));
    }
    console.log(results);
    return results;
  }
  const handleCalculateClick = () => setResults(calculatePercentages());
  return (
    <div>
      <input
        type="number"
        placeholder="Body Weight"
        onChange={(e) => setBw(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Added Weight"
        onChange={(e) => setAdded(e.target.value)}
      />
      <button type="button" onClick={handleCalculateClick}>
        Calculate Ranges
      </button>
      <span>
        {results.map((res, i) => (
          <p key={i}>{res}</p>
        ))}
      </span>
    </div>
  );
};

export default Calculate;
