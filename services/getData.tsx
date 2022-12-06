export default async () => {
  try {
    const fetchedData = await fetch('https://api.spacexdata.com/v3/launches').then((data) => data.json());
    return fetchedData;
  } catch (error) {
    console.error(error);
  }
};
