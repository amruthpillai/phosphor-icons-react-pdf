import { ScribbleIcon as ScribbleBoldIcon } from "../bold/Scribble";
import { ScribbleIcon as ScribbleDuotoneIcon } from "../duotone/Scribble";
import { ScribbleIcon as ScribbleFillIcon } from "../fill/Scribble";
import { ScribbleIcon as ScribbleLightIcon } from "../light/Scribble";
import { ScribbleIcon as ScribbleRegularIcon } from "../regular/Scribble";
import { ScribbleIcon as ScribbleThinIcon } from "../thin/Scribble";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScribbleThinIcon,
	light: ScribbleLightIcon,
	regular: ScribbleRegularIcon,
	bold: ScribbleBoldIcon,
	fill: ScribbleFillIcon,
	duotone: ScribbleDuotoneIcon,
} as const;

export function ScribbleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScribbleIcon as Scribble };
