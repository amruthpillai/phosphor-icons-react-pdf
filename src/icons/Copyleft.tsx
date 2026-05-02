import { CopyleftIcon as CopyleftBoldIcon } from "../bold/Copyleft";
import { CopyleftIcon as CopyleftDuotoneIcon } from "../duotone/Copyleft";
import { CopyleftIcon as CopyleftFillIcon } from "../fill/Copyleft";
import { CopyleftIcon as CopyleftLightIcon } from "../light/Copyleft";
import { CopyleftIcon as CopyleftRegularIcon } from "../regular/Copyleft";
import { CopyleftIcon as CopyleftThinIcon } from "../thin/Copyleft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CopyleftThinIcon,
	light: CopyleftLightIcon,
	regular: CopyleftRegularIcon,
	bold: CopyleftBoldIcon,
	fill: CopyleftFillIcon,
	duotone: CopyleftDuotoneIcon,
} as const;

export function CopyleftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CopyleftIcon as Copyleft };
