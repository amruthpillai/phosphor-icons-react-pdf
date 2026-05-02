import { UploadSimpleIcon as UploadSimpleBoldIcon } from "../bold/UploadSimple";
import { UploadSimpleIcon as UploadSimpleDuotoneIcon } from "../duotone/UploadSimple";
import { UploadSimpleIcon as UploadSimpleFillIcon } from "../fill/UploadSimple";
import { UploadSimpleIcon as UploadSimpleLightIcon } from "../light/UploadSimple";
import { UploadSimpleIcon as UploadSimpleRegularIcon } from "../regular/UploadSimple";
import { UploadSimpleIcon as UploadSimpleThinIcon } from "../thin/UploadSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UploadSimpleThinIcon,
	light: UploadSimpleLightIcon,
	regular: UploadSimpleRegularIcon,
	bold: UploadSimpleBoldIcon,
	fill: UploadSimpleFillIcon,
	duotone: UploadSimpleDuotoneIcon,
} as const;

export function UploadSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UploadSimpleIcon as UploadSimple };
