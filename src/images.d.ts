// src/images.d.ts
declare module '*.avif' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

// src/videos.d.ts
declare module '*.mp4' {
    const src: string;
    export default src;
}