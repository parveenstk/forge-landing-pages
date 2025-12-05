export interface LandingPageData {
    header: {
        desktopText?: string
        mobileText?: string
        pageName: string
    }
    meta: {
        title: string
        description: string
        ogImage: string
        ogUrl?: string
    }
}

export interface TimeUnit {
    value: string | number;
    label: string;
}