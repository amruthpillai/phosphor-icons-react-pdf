import { BootIcon as BootBoldIcon } from "../bold/Boot";
import { BootIcon as BootDuotoneIcon } from "../duotone/Boot";
import { BootIcon as BootFillIcon } from "../fill/Boot";
import { BootIcon as BootLightIcon } from "../light/Boot";
import { BootIcon as BootRegularIcon } from "../regular/Boot";
import { BootIcon as BootThinIcon } from "../thin/Boot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BootThinIcon,
	light: BootLightIcon,
	regular: BootRegularIcon,
	bold: BootBoldIcon,
	fill: BootFillIcon,
	duotone: BootDuotoneIcon,
} as const;

export function BootIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BootIcon as Boot };
