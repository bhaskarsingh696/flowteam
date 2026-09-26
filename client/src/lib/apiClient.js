const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.error?.message || 'Something went wrong');
  }

  return body;
}