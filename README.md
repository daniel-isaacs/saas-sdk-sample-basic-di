

This is a [Next.js](https://nextjs.org) project for a very basic Optimizely SaaS CMS frontend implementation.

It leverages the [Optimizely CMS JavaScript tools](https://github.com/episerver/content-js-sdk/tree/main)

## To run the site [note: this section needs review]

First, copy the .env.template to .env, and fill in the values from your CMS. (You'll need to create a new API key in the CMS.)

In the CMS, create a homepage using the BlankExperience type, and then set up an Application for that homepage. Set the hostname to "localhost:3000".

Then, install:

```bash
npm install
```

Test your setup:

```bash
> optimizely-cms-cli login
```

Next, push the content types and display templates to the CMS
```bash
> optimizely-cms-cli login
```

Finally, run the site:

```bash
> npm run dev
```

Go back to the CMS, and add a section > row > column > Heading element.

At this point you should see the preview in the CMS. If you publish the page, you should be able to view it at http://localhost:3000/en
