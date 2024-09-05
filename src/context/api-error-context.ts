interface ApiError {
    status: number;
    message: string;
}

export interface ApiErrorContex {
    errors: ApiError[];
    push: (error: ApiError) => void;
}

