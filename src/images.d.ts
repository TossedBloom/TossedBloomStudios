// src/images.d.ts
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

// src/videos.d.ts
declare module '*.mp4' {
    const src: string;
    export default src;
}