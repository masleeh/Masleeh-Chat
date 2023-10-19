import { IStateSchema } from "app/providers/store";
import { AppThemes, ThemeMode, Themes } from "../../themes/themes";

export const getTheme = (state: IStateSchema) => state?.theme?.theme ?? AppThemes[Themes.default][ThemeMode.light]