import React, {useState, useEffect} from "react";
import MoodSelector from "./components/MoodSelector";
import CalendarHeatmap from "./components/CalendarHeatmap";
import {saveMoods, loadMoods} from "./utils/storage";

export default function App() {
  const [moods, setMoods] = useState({});
  useEffect(()=>{ setMoods(loadMoods()); }, []);
  function handleSelect(mood) {
    const today = new Date().toISOString().slice(0,10);
    const updated = {...moods, [today]: mood};
    setMoods(updated);
    saveMoods(updated);
  }
  return (
    <div>
      <MoodSelector onSelect={handleSelect} />
      <CalendarHeatmap data={moods} />
    </div>
  );
}