import { MemoryIcon as MemoryBoldIcon } from "../bold/Memory";
import { MemoryIcon as MemoryDuotoneIcon } from "../duotone/Memory";
import { MemoryIcon as MemoryFillIcon } from "../fill/Memory";
import { MemoryIcon as MemoryLightIcon } from "../light/Memory";
import { MemoryIcon as MemoryRegularIcon } from "../regular/Memory";
import { MemoryIcon as MemoryThinIcon } from "../thin/Memory";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MemoryThinIcon,
	light: MemoryLightIcon,
	regular: MemoryRegularIcon,
	bold: MemoryBoldIcon,
	fill: MemoryFillIcon,
	duotone: MemoryDuotoneIcon,
} as const;

export function MemoryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MemoryIcon as Memory };
