import { ScooterIcon as ScooterBoldIcon } from "../bold/Scooter";
import { ScooterIcon as ScooterDuotoneIcon } from "../duotone/Scooter";
import { ScooterIcon as ScooterFillIcon } from "../fill/Scooter";
import { ScooterIcon as ScooterLightIcon } from "../light/Scooter";
import { ScooterIcon as ScooterRegularIcon } from "../regular/Scooter";
import { ScooterIcon as ScooterThinIcon } from "../thin/Scooter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScooterThinIcon,
	light: ScooterLightIcon,
	regular: ScooterRegularIcon,
	bold: ScooterBoldIcon,
	fill: ScooterFillIcon,
	duotone: ScooterDuotoneIcon,
} as const;

export function ScooterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScooterIcon as Scooter };
