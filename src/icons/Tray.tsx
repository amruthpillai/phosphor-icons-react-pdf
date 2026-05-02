import { TrayIcon as TrayBoldIcon } from "../bold/Tray";
import { TrayIcon as TrayDuotoneIcon } from "../duotone/Tray";
import { TrayIcon as TrayFillIcon } from "../fill/Tray";
import { TrayIcon as TrayLightIcon } from "../light/Tray";
import { TrayIcon as TrayRegularIcon } from "../regular/Tray";
import { TrayIcon as TrayThinIcon } from "../thin/Tray";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrayThinIcon,
	light: TrayLightIcon,
	regular: TrayRegularIcon,
	bold: TrayBoldIcon,
	fill: TrayFillIcon,
	duotone: TrayDuotoneIcon,
} as const;

export function TrayIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrayIcon as Tray };
