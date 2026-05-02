import { PipeIcon as PipeBoldIcon } from "../bold/Pipe";
import { PipeIcon as PipeDuotoneIcon } from "../duotone/Pipe";
import { PipeIcon as PipeFillIcon } from "../fill/Pipe";
import { PipeIcon as PipeLightIcon } from "../light/Pipe";
import { PipeIcon as PipeRegularIcon } from "../regular/Pipe";
import { PipeIcon as PipeThinIcon } from "../thin/Pipe";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PipeThinIcon,
	light: PipeLightIcon,
	regular: PipeRegularIcon,
	bold: PipeBoldIcon,
	fill: PipeFillIcon,
	duotone: PipeDuotoneIcon,
} as const;

export function PipeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PipeIcon as Pipe };
