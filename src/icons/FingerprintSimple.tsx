import { FingerprintSimpleIcon as FingerprintSimpleBoldIcon } from "../bold/FingerprintSimple";
import { FingerprintSimpleIcon as FingerprintSimpleDuotoneIcon } from "../duotone/FingerprintSimple";
import { FingerprintSimpleIcon as FingerprintSimpleFillIcon } from "../fill/FingerprintSimple";
import { FingerprintSimpleIcon as FingerprintSimpleLightIcon } from "../light/FingerprintSimple";
import { FingerprintSimpleIcon as FingerprintSimpleRegularIcon } from "../regular/FingerprintSimple";
import { FingerprintSimpleIcon as FingerprintSimpleThinIcon } from "../thin/FingerprintSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FingerprintSimpleThinIcon,
	light: FingerprintSimpleLightIcon,
	regular: FingerprintSimpleRegularIcon,
	bold: FingerprintSimpleBoldIcon,
	fill: FingerprintSimpleFillIcon,
	duotone: FingerprintSimpleDuotoneIcon,
} as const;

export function FingerprintSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FingerprintSimpleIcon as FingerprintSimple };
