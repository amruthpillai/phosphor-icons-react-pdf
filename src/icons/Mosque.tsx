import { MosqueIcon as MosqueBoldIcon } from "../bold/Mosque";
import { MosqueIcon as MosqueDuotoneIcon } from "../duotone/Mosque";
import { MosqueIcon as MosqueFillIcon } from "../fill/Mosque";
import { MosqueIcon as MosqueLightIcon } from "../light/Mosque";
import { MosqueIcon as MosqueRegularIcon } from "../regular/Mosque";
import { MosqueIcon as MosqueThinIcon } from "../thin/Mosque";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MosqueThinIcon,
	light: MosqueLightIcon,
	regular: MosqueRegularIcon,
	bold: MosqueBoldIcon,
	fill: MosqueFillIcon,
	duotone: MosqueDuotoneIcon,
} as const;

export function MosqueIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MosqueIcon as Mosque };
