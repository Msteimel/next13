import { notePosts } from "../../../../data/notes/index";

async function PageTopicNotes({ params, searchParams }) {
  const { slug } = params
  
  return (
    <div>
      {notePosts.map((note) => {
        if (note.data.slug === slug) {
          const data = note.data;
          return (
            <>
              <h1 key={note.id}>{data.title}</h1>
              <p>{data?.description}</p>
              {data.category && (
                <ul>
                  {data.category.map((category) => {
                    return (
                      <li key={category}>
                        {category}
                      </li>
                    )
                  })}
                </ul>
              )}
              {data.sections.map((section) => {
                return ( 
                  <section key={section.title}>
                    <h2>{section.title}</h2>
                    <div>
                      {section.html}
                    </div>
                  </section>
                )
              })}

              {data.resources && (
                <ul>
                  {data.resources.map((link) => {
                    return(
                      <li key={link.url}>
                        <a href={link.url}>{link.text}</a>
                        <span>{link.description}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </>
          )
        }
      })}
    </div>
  );
}

export default PageTopicNotes; 