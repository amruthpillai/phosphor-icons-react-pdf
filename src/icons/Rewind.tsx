import { RewindIcon as RewindBoldIcon } from "../bold/Rewind";
import { RewindIcon as RewindDuotoneIcon } from "../duotone/Rewind";
import { RewindIcon as RewindFillIcon } from "../fill/Rewind";
import { RewindIcon as RewindLightIcon } from "../light/Rewind";
import { RewindIcon as RewindRegularIcon } from "../regular/Rewind";
import { RewindIcon as RewindThinIcon } from "../thin/Rewind";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RewindThinIcon,
	light: RewindLightIcon,
	regular: RewindRegularIcon,
	bold: RewindBoldIcon,
	fill: RewindFillIcon,
	duotone: RewindDuotoneIcon,
} as const;

export function RewindIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RewindIcon as Rewind };
