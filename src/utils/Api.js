const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "An error occurred");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
