
import { ConvRoutePaths, ConvRoutes } from "shared/config/router/ConvRoutePaths";
import { AppRoutesProps } from "shared/config/router/RoutesProps";

export const ConvRoutesConfig: Record<ConvRoutes, AppRoutesProps> = {
    [ConvRoutes.conv_id]: {
        path: ConvRoutePaths.conv_id,
        element: <div>NestedRoute</div>,
        authOnly: true
    }
}