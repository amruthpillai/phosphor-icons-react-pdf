import { DesktopIcon as DesktopBoldIcon } from "../bold/Desktop";
import { DesktopIcon as DesktopDuotoneIcon } from "../duotone/Desktop";
import { DesktopIcon as DesktopFillIcon } from "../fill/Desktop";
import { DesktopIcon as DesktopLightIcon } from "../light/Desktop";
import { DesktopIcon as DesktopRegularIcon } from "../regular/Desktop";
import { DesktopIcon as DesktopThinIcon } from "../thin/Desktop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DesktopThinIcon,
	light: DesktopLightIcon,
	regular: DesktopRegularIcon,
	bold: DesktopBoldIcon,
	fill: DesktopFillIcon,
	duotone: DesktopDuotoneIcon,
} as const;

export function DesktopIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DesktopIcon as Desktop };
