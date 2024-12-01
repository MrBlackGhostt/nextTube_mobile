// Type for a video thumbnail
export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

// Type for video item
export interface VideoItem {
    id: string | undefined; // Video ID
    title: string | undefined; // Video title
    thumbnail: Thumbnail | undefined; // Video thumbnail (high-resolution preferred)
}

export interface VideoClick{
    id: string | undefined
    title: string | undefined
}

export interface YouTubeAPIResponse {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: YouTubeVideoItem[];
}

export interface YouTubeVideoItem {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId?: string; // Sometimes it could be a playlist or channel, so videoId is optional
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: Thumbnail;
            medium: Thumbnail;
            high: Thumbnail;
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
}


