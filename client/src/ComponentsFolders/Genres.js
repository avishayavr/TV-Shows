export const getData = async () => {
  const response = await fetch("http://localhost:8000/api/shows");
  return await response.json();
};





  

