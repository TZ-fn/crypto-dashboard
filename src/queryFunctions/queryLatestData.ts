export default async function queryLatestData() {
  const response = await fetch('https://crypto-dashboard-backend-5tas.onrender.com/latest');
  const data = await response.json();
  return data;
}
