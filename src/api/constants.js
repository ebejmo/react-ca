export const BASE_API_URL = 'https://v2.api.noroff.dev/online-shops';

export function getProductById(id) {
  return `${BASE_API_URL}/${id}`;
}
