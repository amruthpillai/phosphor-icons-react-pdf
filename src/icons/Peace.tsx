import { PeaceIcon as PeaceBoldIcon } from "../bold/Peace";
import { PeaceIcon as PeaceDuotoneIcon } from "../duotone/Peace";
import { PeaceIcon as PeaceFillIcon } from "../fill/Peace";
import { PeaceIcon as PeaceLightIcon } from "../light/Peace";
import { PeaceIcon as PeaceRegularIcon } from "../regular/Peace";
import { PeaceIcon as PeaceThinIcon } from "../thin/Peace";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PeaceThinIcon,
	light: PeaceLightIcon,
	regular: PeaceRegularIcon,
	bold: PeaceBoldIcon,
	fill: PeaceFillIcon,
	duotone: PeaceDuotoneIcon,
} as const;

export function PeaceIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PeaceIcon as Peace };
