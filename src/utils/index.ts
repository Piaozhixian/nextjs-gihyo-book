export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
    const res = await fetch(resource, init);

    if (!res.ok) {
        const errorRes = await res.json()
        const error = new Error(
            errorRes.message ?? 'API request error',
        )
        throw error;
    }

    return res.json();
}