import { EngineIcon as EngineBoldIcon } from "../bold/Engine";
import { EngineIcon as EngineDuotoneIcon } from "../duotone/Engine";
import { EngineIcon as EngineFillIcon } from "../fill/Engine";
import { EngineIcon as EngineLightIcon } from "../light/Engine";
import { EngineIcon as EngineRegularIcon } from "../regular/Engine";
import { EngineIcon as EngineThinIcon } from "../thin/Engine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EngineThinIcon,
	light: EngineLightIcon,
	regular: EngineRegularIcon,
	bold: EngineBoldIcon,
	fill: EngineFillIcon,
	duotone: EngineDuotoneIcon,
} as const;

export function EngineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EngineIcon as Engine };
