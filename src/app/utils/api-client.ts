type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    headers?: Record<string, string>;
};

export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

export async function fetchApi<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const {
        method = 'GET',
        body,
        headers = {},
    } = options;

    const res = await fetch(`/api${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
        throw new ApiError(res.status, data.message || 'API request failed');
    }

    return data;
} 

interface Info {
    message: string;
}

export const userApi = {
    getProfile: () => 
        fetchApi<Info>('/resume/profile'),
    getExperience: () => 
        fetchApi<Info>('/resume/experience'),
    getEducation: () => 
        fetchApi<Info>('/resume/education'),
    getProject: () => 
        fetchApi<Info>('/resume/project'),
    getOther: () => 
        fetchApi<Info>('/resume/other'),
};

export const workApi = {
    getWork1: () =>
        fetchApi<Info>('/work/advantage'),
    getWork2: () =>
        fetchApi<Info>('/work/disadvantage'),
};

export const gainApi = {
    getTSA: () => 
        fetchApi<Info>('/gain/tsa'),
    getIET: () =>
        fetchApi<Info>('/gain/iet'),
    getCode: () =>
        fetchApi<Info>('/gain/code'),
};  