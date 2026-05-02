import { DropboxLogoIcon as DropboxLogoBoldIcon } from "../bold/DropboxLogo";
import { DropboxLogoIcon as DropboxLogoDuotoneIcon } from "../duotone/DropboxLogo";
import { DropboxLogoIcon as DropboxLogoFillIcon } from "../fill/DropboxLogo";
import { DropboxLogoIcon as DropboxLogoLightIcon } from "../light/DropboxLogo";
import { DropboxLogoIcon as DropboxLogoRegularIcon } from "../regular/DropboxLogo";
import { DropboxLogoIcon as DropboxLogoThinIcon } from "../thin/DropboxLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropboxLogoThinIcon,
	light: DropboxLogoLightIcon,
	regular: DropboxLogoRegularIcon,
	bold: DropboxLogoBoldIcon,
	fill: DropboxLogoFillIcon,
	duotone: DropboxLogoDuotoneIcon,
} as const;

export function DropboxLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropboxLogoIcon as DropboxLogo };
