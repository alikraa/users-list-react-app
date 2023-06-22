export async function serverRequest(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`request error: ${response.status}`);
    } else {
      const json = await response.json();
      return json.data;
    }
  } catch (error: unknown) {
    return error.message;
  }
}
