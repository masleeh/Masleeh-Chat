import { ThemeOptions } from "@mui/material";
import { Themes } from "../themes/themes";

export type setThemePayload = {
    title: Themes;
    theme: ThemeOptions;
}

export interface IThemeSchema {
    theme?: unknown,
    title?: Themes
}