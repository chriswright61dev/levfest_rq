export async function fetchFestivalData() {
  //festivalData
  const response = await fetch(
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
  // single item in array
}
