import { BoneIcon as BoneBoldIcon } from "../bold/Bone";
import { BoneIcon as BoneDuotoneIcon } from "../duotone/Bone";
import { BoneIcon as BoneFillIcon } from "../fill/Bone";
import { BoneIcon as BoneLightIcon } from "../light/Bone";
import { BoneIcon as BoneRegularIcon } from "../regular/Bone";
import { BoneIcon as BoneThinIcon } from "../thin/Bone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoneThinIcon,
	light: BoneLightIcon,
	regular: BoneRegularIcon,
	bold: BoneBoldIcon,
	fill: BoneFillIcon,
	duotone: BoneDuotoneIcon,
} as const;

export function BoneIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoneIcon as Bone };
