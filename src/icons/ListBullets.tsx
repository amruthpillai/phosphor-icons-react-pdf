import { ListBulletsIcon as ListBulletsBoldIcon } from "../bold/ListBullets";
import { ListBulletsIcon as ListBulletsDuotoneIcon } from "../duotone/ListBullets";
import { ListBulletsIcon as ListBulletsFillIcon } from "../fill/ListBullets";
import { ListBulletsIcon as ListBulletsLightIcon } from "../light/ListBullets";
import { ListBulletsIcon as ListBulletsRegularIcon } from "../regular/ListBullets";
import { ListBulletsIcon as ListBulletsThinIcon } from "../thin/ListBullets";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListBulletsThinIcon,
	light: ListBulletsLightIcon,
	regular: ListBulletsRegularIcon,
	bold: ListBulletsBoldIcon,
	fill: ListBulletsFillIcon,
	duotone: ListBulletsDuotoneIcon,
} as const;

export function ListBulletsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListBulletsIcon as ListBullets };
