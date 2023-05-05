export default async function queryMetaData(coinIDs: string) {
  const response = await fetch(
    `https://crypto-dashboard-backend-5tas.onrender.com/info?id=${coinIDs}`,
  );
  const data = await response.json();
  return data;
}
