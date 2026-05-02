import { WebcamIcon as WebcamBoldIcon } from "../bold/Webcam";
import { WebcamIcon as WebcamDuotoneIcon } from "../duotone/Webcam";
import { WebcamIcon as WebcamFillIcon } from "../fill/Webcam";
import { WebcamIcon as WebcamLightIcon } from "../light/Webcam";
import { WebcamIcon as WebcamRegularIcon } from "../regular/Webcam";
import { WebcamIcon as WebcamThinIcon } from "../thin/Webcam";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WebcamThinIcon,
	light: WebcamLightIcon,
	regular: WebcamRegularIcon,
	bold: WebcamBoldIcon,
	fill: WebcamFillIcon,
	duotone: WebcamDuotoneIcon,
} as const;

export function WebcamIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WebcamIcon as Webcam };
