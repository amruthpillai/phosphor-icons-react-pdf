# phosphor-icons-react-pdf

Phosphor icons converted to [`@react-pdf/renderer`](https://react-pdf.org/) SVG components.

This package is for React-PDF documents rendered in the browser or in Node.js. It does not render normal DOM `<svg>` elements.

## Affiliation

This project is not affiliated with, endorsed by, or officially associated with `@phosphor-icons`. I am just a fan of the icon set and wanted React-PDF compatible components.

I created this library to make it easier to use Phosphor Icons in my project [Reactive Resume](https://github.com/amruthpillai/reactive-resume), which makes use of `@react-pdf/renderer` to render PDF resumes.

If the Phosphor Icons maintainers are interested in adopting this package into the `@phosphor-icons` organization, I would be happy to hand it over.

## Installation

```sh
pnpm add phosphor-icons-react-pdf @react-pdf/renderer react
```

`react` and `@react-pdf/renderer` are peer dependencies. This package expects your app to provide them.

## Recommended Usage

For the smallest consumer bundles, import the exact fixed-weight icon file you need:

```tsx
import { BriefcaseIcon } from "phosphor-icons-react-pdf/regular/Briefcase";

export function PdfIcon() {
  return <BriefcaseIcon size={24} color="#111827" />;
}
```

The root import follows the `@phosphor-icons/react` naming style and exports weighted icon components as `PascalNameIcon`. Use it when your bundler can tree-shake direct re-exports well.

```tsx
import { AcornIcon, HorseIcon, HeartIcon } from "phosphor-icons-react-pdf";

export function PdfIcons() {
  return (
    <>
      <AcornIcon size={24} color="#111827" />
      <HorseIcon size={32} color="teal" weight="bold" />
      <HeartIcon size={32} color="#AE2983" weight="fill" />
    </>
  );
}
```

Compatibility aliases without the `Icon` suffix are also exported:

```tsx
import { Acorn } from "phosphor-icons-react-pdf";
```

## Weights

Root icon components support the same weight names as Phosphor Icons:

```tsx
<AcornIcon weight="thin" />
<AcornIcon weight="light" />
<AcornIcon weight="regular" />
<AcornIcon weight="bold" />
<AcornIcon weight="fill" />
<AcornIcon weight="duotone" />
```

The default weight is `regular`.

```ts
type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
```

## Small Custom Registries

For data-driven icons without shipping the full icon registry, create a local registry containing only the icons your document uses:

```tsx
import { createIconComponent } from "phosphor-icons-react-pdf/create-icon";
import { BriefcaseIcon } from "phosphor-icons-react-pdf/icons/Briefcase";
import { GraduationCapIcon } from "phosphor-icons-react-pdf/icons/GraduationCap";

export const Icon = createIconComponent({
  briefcase: BriefcaseIcon,
  "graduation-cap": GraduationCapIcon,
});
```

The resulting `Icon` component accepts only those registry names:

```tsx
<Icon name="briefcase" weight="bold" size={18} color="#111827" />
```

## Full Dynamic Icon Component

Use the full dynamic entrypoint when the icon name is completely data-driven and cannot be narrowed ahead of time. This intentionally imports the full generated registry.

```tsx
import { Icon } from "phosphor-icons-react-pdf/dynamic";

export function PdfIconFromData() {
  return <Icon name="acorn" weight="duotone" size={24} color="#111827" />;
}
```

`Icon` forwards all remaining props to the selected icon component.

```tsx
<Icon name="arrow-down-left" weight="bold" size={18} color="crimson" />
```

Type exports are available for typed icon pickers:

```ts
import type {
  IconName,
  IconPropsWithName,
} from "phosphor-icons-react-pdf/dynamic";

import type { IconWeight } from "phosphor-icons-react-pdf";
```

## Variant Subpath Imports

For smaller imports, use a fixed-weight subpath. These components do not need a `weight` prop because the weight is selected by the import path.

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular";
import { HeartIcon } from "phosphor-icons-react-pdf/fill";
import { HorseIcon } from "phosphor-icons-react-pdf/bold";
```

Supported subpaths:

```ts
import { AcornIcon } from "phosphor-icons-react-pdf/thin";
import { AcornIcon } from "phosphor-icons-react-pdf/light";
import { AcornIcon } from "phosphor-icons-react-pdf/regular";
import { AcornIcon } from "phosphor-icons-react-pdf/bold";
import { AcornIcon } from "phosphor-icons-react-pdf/fill";
import { AcornIcon } from "phosphor-icons-react-pdf/duotone";
```

Direct file subpaths are also exported:

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";
import { AcornIcon as AcornDuotoneIcon } from "phosphor-icons-react-pdf/duotone/Acorn";
```

## React-PDF Browser Example

```tsx
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { HeartIcon } from "phosphor-icons-react-pdf/fill/Heart";
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";

function MyDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <AcornIcon size={24} color="#166534" />
          <HeartIcon size={24} color="#dc2626" />
          <Text>React-PDF icons</Text>
        </View>
      </Page>
    </Document>
  );
}

export function App() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
```

## React-PDF Node.js Example

```tsx
import ReactPDF, { Document, Page, Text, View } from "@react-pdf/renderer";
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";

function MyDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <AcornIcon size={24} color="#111827" weight="bold" />
          <Text>Generated on the server</Text>
        </View>
      </Page>
    </Document>
  );
}

await ReactPDF.render(<MyDocument />, "./example.pdf");
```

## Props

Every icon accepts:

```ts
type IconProps = {
  size?: number | string;
  color?: string;
};
```

Root icon components, custom registry icons, and the full dynamic `Icon` also accept:

```ts
type WeightedIconProps = IconProps & {
  weight?: IconWeight;
};
```

Other props are passed to React-PDF's `Svg` component.

## Tree Shaking

For the smallest imports, prefer direct fixed-weight imports:

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";
```

Use `phosphor-icons-react-pdf/create-icon` for small app-specific registries. Use `phosphor-icons-react-pdf/dynamic` only when you intentionally want the full generated registry.

## Development

```sh
pnpm install
pnpm generate
pnpm test
pnpm typecheck
pnpm build
```

The generator reads the published `@phosphor-icons/core` package from `node_modules`.

To generate from a local checkout or submodule instead:

```sh
PHOSPHOR_CORE_DIR=/path/to/phosphor-icons/core pnpm generate
```

The expected core asset layout is:

```text
assets/
  bold/
  duotone/
  fill/
  light/
  regular/
  thin/
```

## Automated Core Updates

The `Update Phosphor Core` GitHub Actions workflow runs daily and can also be started manually. It checks the latest published `@phosphor-icons/core` version on npm, updates only when a newer version exists, regenerates the icon components, runs the full verification suite, and opens or updates a pull request.

Updater PRs intentionally do not create git tags. After merging an update PR, create and push the matching version tag manually to trigger the release workflow:

```sh
git pull origin main
git tag v0.1.2
git push origin v0.1.2
```

## Publishing Checklist

```sh
pnpm generate
pnpm test
pnpm typecheck
pnpm build
pnpm pack --pack-destination /private/tmp --json
```
