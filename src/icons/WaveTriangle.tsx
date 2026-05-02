import { WaveTriangleIcon as WaveTriangleBoldIcon } from "../bold/WaveTriangle";
import { WaveTriangleIcon as WaveTriangleDuotoneIcon } from "../duotone/WaveTriangle";
import { WaveTriangleIcon as WaveTriangleFillIcon } from "../fill/WaveTriangle";
import { WaveTriangleIcon as WaveTriangleLightIcon } from "../light/WaveTriangle";
import { WaveTriangleIcon as WaveTriangleRegularIcon } from "../regular/WaveTriangle";
import { WaveTriangleIcon as WaveTriangleThinIcon } from "../thin/WaveTriangle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveTriangleThinIcon,
	light: WaveTriangleLightIcon,
	regular: WaveTriangleRegularIcon,
	bold: WaveTriangleBoldIcon,
	fill: WaveTriangleFillIcon,
	duotone: WaveTriangleDuotoneIcon,
} as const;

export function WaveTriangleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveTriangleIcon as WaveTriangle };
