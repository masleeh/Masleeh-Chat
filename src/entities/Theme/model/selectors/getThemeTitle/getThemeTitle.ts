import { IStateSchema } from "app/providers/store";
import { Themes } from "../../themes/themes";

export const getThemeTitle = (state: IStateSchema) => state.theme?.title ?? Themes.default