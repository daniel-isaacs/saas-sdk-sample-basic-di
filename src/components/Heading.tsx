import { contentType, displayTemplate, Infer } from '@optimizely/cms-sdk';
import { getPreviewUtils } from '@optimizely/cms-sdk/react/server';

export const HeadingContentType = contentType({
  key: 'Heading',
  displayName: 'Heading',
  baseType: '_component',
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading Text',
    },
  },
  compositionBehaviors: ['sectionEnabled', 'elementEnabled'],
});

export const HeadingDisplayTemplate = displayTemplate({
  key: 'HeadingDisplayTemplate',
  isDefault: true,
  displayName: 'Heading Display Options',
  baseType: '_component',
  settings: {
    headingStyle: {
      editor: 'select',
      displayName: 'Heading Style',
      sortOrder: 0,
      choices: {
        h1: {
          displayName: 'h1',
          sortOrder: 10,
        },
        h2: {
          displayName: 'h2',
          sortOrder: 20,
        },
        h3: {
          displayName: 'h3',
          sortOrder: 30,
        },
        h4: {
          displayName: 'h4',
          sortOrder: 40,
        },
        h5: {
          displayName: 'h5',
          sortOrder: 50,
        },
        h6: {
          displayName: 'h6',
          sortOrder: 60,
        },
        paragraph: {
          displayName: 'paragraph',
          sortOrder: 70,
        },
      },
    },
  },
  tag: 'Default',
});

type Props = {
  opti: Infer<typeof HeadingContentType>;
  displaySettings?: Infer<typeof HeadingDisplayTemplate>;
};

export default function Heading({ opti, displaySettings }: Props) {
  const { pa } = getPreviewUtils(opti);
  console.log('displaySettings', displaySettings);
  const headingStyle = displaySettings?.headingStyle || 'h1';
  const HeadingTag = (headingStyle === 'paragraph' ? 'p' : headingStyle) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  
  return (
    <HeadingTag className="title" {...pa('heading')}>
      {opti.heading}
    </HeadingTag>
  );
}