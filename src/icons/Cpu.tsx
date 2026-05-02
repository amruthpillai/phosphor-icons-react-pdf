import { CpuIcon as CpuBoldIcon } from "../bold/Cpu";
import { CpuIcon as CpuDuotoneIcon } from "../duotone/Cpu";
import { CpuIcon as CpuFillIcon } from "../fill/Cpu";
import { CpuIcon as CpuLightIcon } from "../light/Cpu";
import { CpuIcon as CpuRegularIcon } from "../regular/Cpu";
import { CpuIcon as CpuThinIcon } from "../thin/Cpu";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CpuThinIcon,
	light: CpuLightIcon,
	regular: CpuRegularIcon,
	bold: CpuBoldIcon,
	fill: CpuFillIcon,
	duotone: CpuDuotoneIcon,
} as const;

export function CpuIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CpuIcon as Cpu };
