const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to retrieve data ${url}}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetcher;
