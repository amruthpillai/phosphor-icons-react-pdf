import { BackspaceIcon as BackspaceBoldIcon } from "../bold/Backspace";
import { BackspaceIcon as BackspaceDuotoneIcon } from "../duotone/Backspace";
import { BackspaceIcon as BackspaceFillIcon } from "../fill/Backspace";
import { BackspaceIcon as BackspaceLightIcon } from "../light/Backspace";
import { BackspaceIcon as BackspaceRegularIcon } from "../regular/Backspace";
import { BackspaceIcon as BackspaceThinIcon } from "../thin/Backspace";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BackspaceThinIcon,
	light: BackspaceLightIcon,
	regular: BackspaceRegularIcon,
	bold: BackspaceBoldIcon,
	fill: BackspaceFillIcon,
	duotone: BackspaceDuotoneIcon,
} as const;

export function BackspaceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BackspaceIcon as Backspace };
