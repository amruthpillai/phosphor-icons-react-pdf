import { TestTubeIcon as TestTubeBoldIcon } from "../bold/TestTube";
import { TestTubeIcon as TestTubeDuotoneIcon } from "../duotone/TestTube";
import { TestTubeIcon as TestTubeFillIcon } from "../fill/TestTube";
import { TestTubeIcon as TestTubeLightIcon } from "../light/TestTube";
import { TestTubeIcon as TestTubeRegularIcon } from "../regular/TestTube";
import { TestTubeIcon as TestTubeThinIcon } from "../thin/TestTube";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TestTubeThinIcon,
	light: TestTubeLightIcon,
	regular: TestTubeRegularIcon,
	bold: TestTubeBoldIcon,
	fill: TestTubeFillIcon,
	duotone: TestTubeDuotoneIcon,
} as const;

export function TestTubeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TestTubeIcon as TestTube };
