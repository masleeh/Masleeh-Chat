import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    nestedRoutes?: Record<string, AppRoutesProps>
}