import { ThemeMode, Themes } from "entities/Theme";
import { z } from "zod";

export const ThemeProviderSchema = z.object({
    themeMode: z.nativeEnum(ThemeMode),
    themeTitle: z.nativeEnum(Themes)
})