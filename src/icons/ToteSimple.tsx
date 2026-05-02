import { ToteSimpleIcon as ToteSimpleBoldIcon } from "../bold/ToteSimple";
import { ToteSimpleIcon as ToteSimpleDuotoneIcon } from "../duotone/ToteSimple";
import { ToteSimpleIcon as ToteSimpleFillIcon } from "../fill/ToteSimple";
import { ToteSimpleIcon as ToteSimpleLightIcon } from "../light/ToteSimple";
import { ToteSimpleIcon as ToteSimpleRegularIcon } from "../regular/ToteSimple";
import { ToteSimpleIcon as ToteSimpleThinIcon } from "../thin/ToteSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToteSimpleThinIcon,
	light: ToteSimpleLightIcon,
	regular: ToteSimpleRegularIcon,
	bold: ToteSimpleBoldIcon,
	fill: ToteSimpleFillIcon,
	duotone: ToteSimpleDuotoneIcon,
} as const;

export function ToteSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToteSimpleIcon as ToteSimple };
