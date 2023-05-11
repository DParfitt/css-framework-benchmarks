import { atoms } from "../css/sprinkles.css";
import { vars } from "../css/theme.css";

type Options = {
  vars: typeof vars;
  atoms: typeof atoms;
};

export const createComponentTheme = <T>(callback: (props: Options) => T): T =>
  callback({ vars, atoms });
