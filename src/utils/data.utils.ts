export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log('Something went wrong 💥', err.message));
  return response;
};
