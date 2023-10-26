
import { ConvRoutePaths, ConvRoutes } from "shared/config/router/ConvRoutePaths";
import { AppRoutesProps } from "shared/config/router/RoutesProps";
import { UserMessages } from "widgets/messages/UserMessages";

export const ConvRoutesConfig: Record<ConvRoutes, AppRoutesProps> = {
    [ConvRoutes.conv_id]: {
        path: ConvRoutePaths.conv_id,
        element: <UserMessages />,
        authOnly: true
    }
}