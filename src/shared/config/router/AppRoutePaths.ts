export enum AppRoutes {
    index = 'index',
    auth = 'auth',
    conv = 'conv',
}

export const AppRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.index]: '/',
    [AppRoutes.auth]: '/auth',
    [AppRoutes.conv]: '/conv',
}
