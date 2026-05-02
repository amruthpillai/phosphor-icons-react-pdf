import { NotchesIcon as NotchesBoldIcon } from "../bold/Notches";
import { NotchesIcon as NotchesDuotoneIcon } from "../duotone/Notches";
import { NotchesIcon as NotchesFillIcon } from "../fill/Notches";
import { NotchesIcon as NotchesLightIcon } from "../light/Notches";
import { NotchesIcon as NotchesRegularIcon } from "../regular/Notches";
import { NotchesIcon as NotchesThinIcon } from "../thin/Notches";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotchesThinIcon,
	light: NotchesLightIcon,
	regular: NotchesRegularIcon,
	bold: NotchesBoldIcon,
	fill: NotchesFillIcon,
	duotone: NotchesDuotoneIcon,
} as const;

export function NotchesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotchesIcon as Notches };
