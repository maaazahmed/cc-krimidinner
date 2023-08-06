export type WithId<T> = T & { id: string };

export type UnixTimestamp = number;

export type LoadingState = "idle" | "loading" | "loaded" | "failed";
