import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function FolderSimpleMinusIcon({
	color = "currentColor",
	size = 16,
	...props
}: IconProps) {
	return (
		<Svg
			viewBox="0 0 256 256"
			fill={color}
			width={size}
			height={size}
			{...props}
		>
			<Path d="M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84ZM104,132h48a12,12,0,0,1,0,24H104a12,12,0,0,1,0-24Z" />
		</Svg>
	);
}

export { FolderSimpleMinusIcon as FolderSimpleMinus };
