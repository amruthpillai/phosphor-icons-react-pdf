import { SealCheckIcon as SealCheckBoldIcon } from "../bold/SealCheck";
import { SealCheckIcon as SealCheckDuotoneIcon } from "../duotone/SealCheck";
import { SealCheckIcon as SealCheckFillIcon } from "../fill/SealCheck";
import { SealCheckIcon as SealCheckLightIcon } from "../light/SealCheck";
import { SealCheckIcon as SealCheckRegularIcon } from "../regular/SealCheck";
import { SealCheckIcon as SealCheckThinIcon } from "../thin/SealCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SealCheckThinIcon,
	light: SealCheckLightIcon,
	regular: SealCheckRegularIcon,
	bold: SealCheckBoldIcon,
	fill: SealCheckFillIcon,
	duotone: SealCheckDuotoneIcon,
} as const;

export function SealCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SealCheckIcon as SealCheck };
