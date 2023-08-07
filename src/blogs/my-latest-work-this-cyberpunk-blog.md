## Table of contents

## The tech stack

My own blog has always been a thing I want to work on but I also has been rewriting my blog because of bad design (?)

There should be no good and bad system design I guess? Or at least it should not matter that much until you try something out of this world like Medium

Lately I realized that I was just too fed up with having to deal with this and just go with a CMS for the sake of my own sanity and just to **GET THINGS DONE**. Never in my life I feel so comfortable working on a blog like now.

Here is the techstack you've been waiting for:

- [Strapi](https://strapi.io/) with **Postgres** (self-hosted on my [Caprover](https://caprover.com/) ultimate server)
- The blog itself is written with **Svelte** (hosted by [Vercel](https://vercel.com/lamnguyenkhmt2017))

A quick note on why I choose `Strapi`

- I can easily customize this because it's `Node.js`
- I can write my stuff while uploading and sharing it at the same place and have the directly shared (Some storage solution like Nextcloud doesn't expose such direct links)

## The core requirement

Here's the point (or the requirement)

- I don't want the blog to be saved in Github (failed miserably)
- I want to store it on the CMS which I can easily and dynamically change

## The whole gist

There is no way I can mess this up right? Wrong lol (or at least it's working).

### Mdsvex is cool (and is not)

Since I am using Svelte, [Mdsvex](https://mdsvex.pngwn.io/) is a no-brainer. It's literally the `MDX` of Svelte. It was quick and easy. You just have to add some configs into `svelte.config.js` and you can now import the `Markdown` files in. EZ.

Wait the `Markdown files`??? I don't want to save it in my github at all... How can I deal with this? I can't at all though because `Mdsvex` never has this thought in mind LOL ([the whole convo if you are interested](https://github.com/pngwn/MDsveX/issues/418))

### The cyberpunk in its shape

So what's the plan?

The plan is we are going to butcher it by fetching the content from `Strapi` write it into `Markdown` and import it back in for `Mdsvex` to handle it LOL.

![Quick flowchart on this](https://cms.lamnguyencse17.dev/uploads/blog_processing_1a726c43e7.png)

By doing so my expectation is that we can totally remove the blogs from our `Github` right?

Not so fast! Here comes the new challenger: Vercel.

### Vercel is cool but sometimes it's not

When I run `pnpm build` (not a typo, just in case), SvelteKit is happy and I was quite sure that it should work.

Then Vercel throws this to me:

![Vercel error](https://cms.lamnguyencse17.dev/uploads/vercel_error_6c2da6209d.png)

Basically on the SSG steps, it couldn't find the `Markdown blogs` that is supposed to there from the `server side` snippet (shortened for the sake of readers)

```js
// +page.server.ts
export const load = async ({ fetch, params }) => {
	const { slug } = params;
	const fetchBlogResponse = await fetch(buildSlugFetchEndpoint(slug));

	const targetPath = path.join('src/blogs', `${params.slug}.md`);

	await fs.mkdir(path.dirname(targetPath), { recursive: true });
	await fs.rm(targetPath, { force: true });
	await fs.writeFile(targetPath, blog.attributes.content);
};
```

It maybe that each step is made in a different process for caching purpose? so it can't find the markdown blogs?

### Who let the dogs out?

So... we have to generate the blogs just to pass the Vercel build. That's not hard but can we automate this so that our sanity is kept high

Sure! With [Husky](https://typicode.github.io/husky/)!

Usually it is used as a local, bare minimum CI to check for obvious error in local before commits being pushed. We can use it to make sure our code is good and also taking advantage of this to generate the markdown for us so we don't have to manually do this at all.

```bash
# pre-commit.sh
pnpm format
pnpm check
pnpm lint
pnpm build
git add -A .
```

and we are good to go!

## Conclusion

I believe we did learn some stuff through this blog building process

- Using the right tool for the right purpose is important. Using Strapi was the right call as it creates the fatest result I've ever seen
- Sometimes, the right tool (I talking about you `Mdsvex`) can be a pain in the butt
- Despite this blog being the worst design I've ever created, I am happy with it and it's not really annoying once it's working correctly
