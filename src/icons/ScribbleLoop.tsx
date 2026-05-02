import { ScribbleLoopIcon as ScribbleLoopBoldIcon } from "../bold/ScribbleLoop";
import { ScribbleLoopIcon as ScribbleLoopDuotoneIcon } from "../duotone/ScribbleLoop";
import { ScribbleLoopIcon as ScribbleLoopFillIcon } from "../fill/ScribbleLoop";
import { ScribbleLoopIcon as ScribbleLoopLightIcon } from "../light/ScribbleLoop";
import { ScribbleLoopIcon as ScribbleLoopRegularIcon } from "../regular/ScribbleLoop";
import { ScribbleLoopIcon as ScribbleLoopThinIcon } from "../thin/ScribbleLoop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScribbleLoopThinIcon,
	light: ScribbleLoopLightIcon,
	regular: ScribbleLoopRegularIcon,
	bold: ScribbleLoopBoldIcon,
	fill: ScribbleLoopFillIcon,
	duotone: ScribbleLoopDuotoneIcon,
} as const;

export function ScribbleLoopIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScribbleLoopIcon as ScribbleLoop };
