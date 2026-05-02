import { GoogleDriveLogoIcon as GoogleDriveLogoBoldIcon } from "../bold/GoogleDriveLogo";
import { GoogleDriveLogoIcon as GoogleDriveLogoDuotoneIcon } from "../duotone/GoogleDriveLogo";
import { GoogleDriveLogoIcon as GoogleDriveLogoFillIcon } from "../fill/GoogleDriveLogo";
import { GoogleDriveLogoIcon as GoogleDriveLogoLightIcon } from "../light/GoogleDriveLogo";
import { GoogleDriveLogoIcon as GoogleDriveLogoRegularIcon } from "../regular/GoogleDriveLogo";
import { GoogleDriveLogoIcon as GoogleDriveLogoThinIcon } from "../thin/GoogleDriveLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GoogleDriveLogoThinIcon,
	light: GoogleDriveLogoLightIcon,
	regular: GoogleDriveLogoRegularIcon,
	bold: GoogleDriveLogoBoldIcon,
	fill: GoogleDriveLogoFillIcon,
	duotone: GoogleDriveLogoDuotoneIcon,
} as const;

export function GoogleDriveLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GoogleDriveLogoIcon as GoogleDriveLogo };
