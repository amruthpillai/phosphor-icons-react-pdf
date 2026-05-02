import { CodeSimpleIcon as CodeSimpleBoldIcon } from "../bold/CodeSimple";
import { CodeSimpleIcon as CodeSimpleDuotoneIcon } from "../duotone/CodeSimple";
import { CodeSimpleIcon as CodeSimpleFillIcon } from "../fill/CodeSimple";
import { CodeSimpleIcon as CodeSimpleLightIcon } from "../light/CodeSimple";
import { CodeSimpleIcon as CodeSimpleRegularIcon } from "../regular/CodeSimple";
import { CodeSimpleIcon as CodeSimpleThinIcon } from "../thin/CodeSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodeSimpleThinIcon,
	light: CodeSimpleLightIcon,
	regular: CodeSimpleRegularIcon,
	bold: CodeSimpleBoldIcon,
	fill: CodeSimpleFillIcon,
	duotone: CodeSimpleDuotoneIcon,
} as const;

export function CodeSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodeSimpleIcon as CodeSimple };
