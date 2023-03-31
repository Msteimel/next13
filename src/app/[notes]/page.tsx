


import Link from "next/link";
import { notePosts } from "../../../data/notes/index";

async function PageNotes({ params, searchParams }) {
  const {id} = params
  const notes = notePosts;

  return (
    <div>
      <h1>Note lists</h1>
      <ul>
        {notePosts.map((notes) => {
          return (
            <li key={id}>
              <Link href={`notes/${notes.data.slug}`}>{notes.data.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default PageNotes; 