import React from "react";

export default function MoodSelector({onSelect}) {
  const moods = ["😀","😐","😢","😡","😍"];
  return (
    <div>
      {moods.map(m => (
        <button key={m} onClick={()=>onSelect(m)}>{m}</button>
      ))}
    </div>
  );
}