import Link from 'next/link';

export const pageData = {
  title: 'Site Building pt. One',
  date: '23-05-25',
  description: `I've decided I wanted to create my own site again so I can track notes and write blogs about a variety of topics. There were a lot of options in the way of how to build the site but I decided I kind of wanted to wing it and do it on my own (kind of). I'm still using tools to help, Next.js is the site generator, I'm using Typescript, because I both love and hate myself, and Tailwind for css. For better or worse I ran into road blocks immediately because I want to create pages that takes in data and use components to display them. Sure I could have used just static block on each page, but that's easy, and what's the fun in that?`,
  content: [
    [
      {
        sectionTitle: 'The before times',
        cols: 'oneCol',
        text: (
          <p>
            Long ago I used to force myself to do one writing a week. I&apos;d
            allow myself to write about literally anything. At the time it was
            mainly about my updating and changing world views as I spent time on
            introspections, trying to climb out of the depression I dealt with
            most days. Writing was, and still is (when I do it), hugely
            cathartic. As of late, I&apos;ve gotten to brush shoulders with
            individuals that really inspire me and have officially motivated me
            to get back to writing again. The problem is, I&apos;m also a web
            developer, so I can&pos;t just use a pre-built thing right?
          </p>
        ),
      },
    ],
    [
      {
        sectionTitle: 'The slightly before times',
        cols: 'oneCol',
        text: <p>"Oh god. What have I done?" Me, about a week ago</p>,
      },
      {
        text: (
          <p>
            Was one thought I after a bit of development trying to be super
            clever. I wanted to use the Server Side Rendering (SSR) of Next.js
            to create each page. Stash each post in a wonderfully architected
            data structure that would allow me to loop over and display multiple
            sections with text vs images, multiple columns, and everything
            else...then I hit my first speed bump. "What if I want to have an
            anchor tag in my paragraph?"
          </p>
        ),
      },
      {
        text: <p>Crap.</p>,
      },
    ],
    [
      {
        sectionTitle: 'The pain times',
        cols: 'oneCol',
        text: (
          <p>
            I quickly discovered trying to use api routes to pull in data was
            going to be difficult. Most of my work is building design systems
            and re-suable components. Not building data structures and fetching
            the data with api routes. What really was the crux is I started too
            big. I had this idea of how the site was going to work without
            having enough experience to jump the corners to set everything up.
            This page started with my data saved in file as multiple variables
            and my content rendering components. After getting yelled at by
            Typescript a few dozens times I got the page working. I then split
            out each piece (components and the data) into separate files I can
            pull in and use. Look at me now!
          </p>
        ),
      },
    ],
    [
      {
        sectionTitle: 'The now times',
        cols: 'oneCol',
        text: (
          <p>
            Eventually I want to figure out how to pull in the data via the api,
            but I needed a working example first because I faced enough issues
            working in new (but more familiar) realms. Adding the data fetching
            layer was setting myself up for failure. But now I can put links in
            my paragraphs!
            <Link href="#" className="text-sky-400">
              {' '}
              Look at me!
            </Link>{' '}
            It doesn't going anywhere but damn it, it works!
          </p>
        ),
      },
      {
        text: (
          <p>
            My goal going forward is to focus on smaller tasks and chunk things
            out, even though I'm a{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Lumpers_and_splitters"
              className="text-sky-400">
              lumper
            </Link>
            , and not a splitter, at heart. It will be a challenge, but that's
            kind of the point.
          </p>
        ),
      },
    ],
  ],
};
