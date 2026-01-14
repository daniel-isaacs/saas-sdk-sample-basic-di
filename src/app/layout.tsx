
import {
  BlankExperienceContentType,
  BlankSectionContentType,
  initContentTypeRegistry,
  initDisplayTemplateRegistry,
} from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';


import BlankExperience from '@/components/BlankExperience';
import BlankSection from '@/components/BlankSection';
import Heading, {
  HeadingContentType,
  HeadingDisplayTemplate
} from '@/components/Heading';

initContentTypeRegistry([
  BlankExperienceContentType,
  BlankSectionContentType,
  HeadingContentType
]);
initReactComponentRegistry({
  resolver: {
    BlankExperience,
    BlankSection,
    Heading,
  },
});
initDisplayTemplateRegistry([
  HeadingDisplayTemplate
]);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}