export enum ConvRoutes {
    conv_id = 'conv_id'
}

export const ConvRoutePaths: Record<ConvRoutes, string> = {
    [ConvRoutes.conv_id]: '/conv/:conv_id',
}