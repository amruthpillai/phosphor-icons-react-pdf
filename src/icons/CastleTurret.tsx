import { CastleTurretIcon as CastleTurretBoldIcon } from "../bold/CastleTurret";
import { CastleTurretIcon as CastleTurretDuotoneIcon } from "../duotone/CastleTurret";
import { CastleTurretIcon as CastleTurretFillIcon } from "../fill/CastleTurret";
import { CastleTurretIcon as CastleTurretLightIcon } from "../light/CastleTurret";
import { CastleTurretIcon as CastleTurretRegularIcon } from "../regular/CastleTurret";
import { CastleTurretIcon as CastleTurretThinIcon } from "../thin/CastleTurret";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CastleTurretThinIcon,
	light: CastleTurretLightIcon,
	regular: CastleTurretRegularIcon,
	bold: CastleTurretBoldIcon,
	fill: CastleTurretFillIcon,
	duotone: CastleTurretDuotoneIcon,
} as const;

export function CastleTurretIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CastleTurretIcon as CastleTurret };
