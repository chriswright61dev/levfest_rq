export async function fetchFestivalData() {
  //festivalData
  const response = await fetch(
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchEventListData() {
  //eventsData
  const response = await fetch(
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchNewsListData() {
  //eventsData
  const response = await fetch(
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchVenuesListData() {
  //eventsData
  const response = await fetch(
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
