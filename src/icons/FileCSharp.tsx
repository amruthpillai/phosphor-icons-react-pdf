import { FileCSharpIcon as FileCSharpBoldIcon } from "../bold/FileCSharp";
import { FileCSharpIcon as FileCSharpDuotoneIcon } from "../duotone/FileCSharp";
import { FileCSharpIcon as FileCSharpFillIcon } from "../fill/FileCSharp";
import { FileCSharpIcon as FileCSharpLightIcon } from "../light/FileCSharp";
import { FileCSharpIcon as FileCSharpRegularIcon } from "../regular/FileCSharp";
import { FileCSharpIcon as FileCSharpThinIcon } from "../thin/FileCSharp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCSharpThinIcon,
	light: FileCSharpLightIcon,
	regular: FileCSharpRegularIcon,
	bold: FileCSharpBoldIcon,
	fill: FileCSharpFillIcon,
	duotone: FileCSharpDuotoneIcon,
} as const;

export function FileCSharpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCSharpIcon as FileCSharp };
