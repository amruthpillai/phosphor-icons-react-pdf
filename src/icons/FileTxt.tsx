import { FileTxtIcon as FileTxtBoldIcon } from "../bold/FileTxt";
import { FileTxtIcon as FileTxtDuotoneIcon } from "../duotone/FileTxt";
import { FileTxtIcon as FileTxtFillIcon } from "../fill/FileTxt";
import { FileTxtIcon as FileTxtLightIcon } from "../light/FileTxt";
import { FileTxtIcon as FileTxtRegularIcon } from "../regular/FileTxt";
import { FileTxtIcon as FileTxtThinIcon } from "../thin/FileTxt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileTxtThinIcon,
	light: FileTxtLightIcon,
	regular: FileTxtRegularIcon,
	bold: FileTxtBoldIcon,
	fill: FileTxtFillIcon,
	duotone: FileTxtDuotoneIcon,
} as const;

export function FileTxtIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileTxtIcon as FileTxt };
