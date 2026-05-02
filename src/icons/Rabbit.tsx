import { RabbitIcon as RabbitBoldIcon } from "../bold/Rabbit";
import { RabbitIcon as RabbitDuotoneIcon } from "../duotone/Rabbit";
import { RabbitIcon as RabbitFillIcon } from "../fill/Rabbit";
import { RabbitIcon as RabbitLightIcon } from "../light/Rabbit";
import { RabbitIcon as RabbitRegularIcon } from "../regular/Rabbit";
import { RabbitIcon as RabbitThinIcon } from "../thin/Rabbit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RabbitThinIcon,
	light: RabbitLightIcon,
	regular: RabbitRegularIcon,
	bold: RabbitBoldIcon,
	fill: RabbitFillIcon,
	duotone: RabbitDuotoneIcon,
} as const;

export function RabbitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RabbitIcon as Rabbit };
