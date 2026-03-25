const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const apiClient = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API Error");
  }

  return response.json();
};
