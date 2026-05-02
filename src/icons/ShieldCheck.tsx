import { ShieldCheckIcon as ShieldCheckBoldIcon } from "../bold/ShieldCheck";
import { ShieldCheckIcon as ShieldCheckDuotoneIcon } from "../duotone/ShieldCheck";
import { ShieldCheckIcon as ShieldCheckFillIcon } from "../fill/ShieldCheck";
import { ShieldCheckIcon as ShieldCheckLightIcon } from "../light/ShieldCheck";
import { ShieldCheckIcon as ShieldCheckRegularIcon } from "../regular/ShieldCheck";
import { ShieldCheckIcon as ShieldCheckThinIcon } from "../thin/ShieldCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldCheckThinIcon,
	light: ShieldCheckLightIcon,
	regular: ShieldCheckRegularIcon,
	bold: ShieldCheckBoldIcon,
	fill: ShieldCheckFillIcon,
	duotone: ShieldCheckDuotoneIcon,
} as const;

export function ShieldCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldCheckIcon as ShieldCheck };
