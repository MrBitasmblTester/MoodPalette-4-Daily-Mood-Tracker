export function saveMoods(moods) {
  localStorage.setItem('moodData', JSON.stringify(moods));
}

export function loadMoods() {
  return JSON.parse(localStorage.getItem('moodData')||"{}");
}