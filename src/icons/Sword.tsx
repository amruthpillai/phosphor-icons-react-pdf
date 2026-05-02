import { SwordIcon as SwordBoldIcon } from "../bold/Sword";
import { SwordIcon as SwordDuotoneIcon } from "../duotone/Sword";
import { SwordIcon as SwordFillIcon } from "../fill/Sword";
import { SwordIcon as SwordLightIcon } from "../light/Sword";
import { SwordIcon as SwordRegularIcon } from "../regular/Sword";
import { SwordIcon as SwordThinIcon } from "../thin/Sword";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SwordThinIcon,
	light: SwordLightIcon,
	regular: SwordRegularIcon,
	bold: SwordBoldIcon,
	fill: SwordFillIcon,
	duotone: SwordDuotoneIcon,
} as const;

export function SwordIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SwordIcon as Sword };
