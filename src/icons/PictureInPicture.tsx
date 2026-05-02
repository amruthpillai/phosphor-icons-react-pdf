import { PictureInPictureIcon as PictureInPictureBoldIcon } from "../bold/PictureInPicture";
import { PictureInPictureIcon as PictureInPictureDuotoneIcon } from "../duotone/PictureInPicture";
import { PictureInPictureIcon as PictureInPictureFillIcon } from "../fill/PictureInPicture";
import { PictureInPictureIcon as PictureInPictureLightIcon } from "../light/PictureInPicture";
import { PictureInPictureIcon as PictureInPictureRegularIcon } from "../regular/PictureInPicture";
import { PictureInPictureIcon as PictureInPictureThinIcon } from "../thin/PictureInPicture";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PictureInPictureThinIcon,
	light: PictureInPictureLightIcon,
	regular: PictureInPictureRegularIcon,
	bold: PictureInPictureBoldIcon,
	fill: PictureInPictureFillIcon,
	duotone: PictureInPictureDuotoneIcon,
} as const;

export function PictureInPictureIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PictureInPictureIcon as PictureInPicture };
