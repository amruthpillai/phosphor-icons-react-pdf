import { CubeIcon as CubeBoldIcon } from "../bold/Cube";
import { CubeIcon as CubeDuotoneIcon } from "../duotone/Cube";
import { CubeIcon as CubeFillIcon } from "../fill/Cube";
import { CubeIcon as CubeLightIcon } from "../light/Cube";
import { CubeIcon as CubeRegularIcon } from "../regular/Cube";
import { CubeIcon as CubeThinIcon } from "../thin/Cube";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CubeThinIcon,
	light: CubeLightIcon,
	regular: CubeRegularIcon,
	bold: CubeBoldIcon,
	fill: CubeFillIcon,
	duotone: CubeDuotoneIcon,
} as const;

export function CubeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CubeIcon as Cube };
