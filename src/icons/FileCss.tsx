import { FileCssIcon as FileCssBoldIcon } from "../bold/FileCss";
import { FileCssIcon as FileCssDuotoneIcon } from "../duotone/FileCss";
import { FileCssIcon as FileCssFillIcon } from "../fill/FileCss";
import { FileCssIcon as FileCssLightIcon } from "../light/FileCss";
import { FileCssIcon as FileCssRegularIcon } from "../regular/FileCss";
import { FileCssIcon as FileCssThinIcon } from "../thin/FileCss";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCssThinIcon,
	light: FileCssLightIcon,
	regular: FileCssRegularIcon,
	bold: FileCssBoldIcon,
	fill: FileCssFillIcon,
	duotone: FileCssDuotoneIcon,
} as const;

export function FileCssIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCssIcon as FileCss };
