export enum AppRoutes {
    index = 'index',
    auth = 'auth',
    conv = 'conv',
    settings = 'settings'
}

export const AppRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.index]: '/',
    [AppRoutes.auth]: '/auth',
    [AppRoutes.conv]: '/conv',
    [AppRoutes.settings]: '/settings',
}
