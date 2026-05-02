import { AsteriskIcon as AsteriskBoldIcon } from "../bold/Asterisk";
import { AsteriskIcon as AsteriskDuotoneIcon } from "../duotone/Asterisk";
import { AsteriskIcon as AsteriskFillIcon } from "../fill/Asterisk";
import { AsteriskIcon as AsteriskLightIcon } from "../light/Asterisk";
import { AsteriskIcon as AsteriskRegularIcon } from "../regular/Asterisk";
import { AsteriskIcon as AsteriskThinIcon } from "../thin/Asterisk";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AsteriskThinIcon,
	light: AsteriskLightIcon,
	regular: AsteriskRegularIcon,
	bold: AsteriskBoldIcon,
	fill: AsteriskFillIcon,
	duotone: AsteriskDuotoneIcon,
} as const;

export function AsteriskIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AsteriskIcon as Asterisk };
