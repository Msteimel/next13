

const SectionsOne = () => {
  return (
    <p>Here are some notes about nextJs13Notes</p>
  )
}

const SectionsTwo = () => {
  return (
    <p>Here are some different notes about nextJs13Notes</p>
  )
}

const nextJs13NotesNotes : {
  title: string;
  slug: string;
  description: string;
  category: string[];
  sections: {
    title: string;
    html: JSX.Element;
  }[];
  resources?: {
    text: string;
    url: string;
    description: string;
  }[];
} = {
  'title': "nextJs 13 Notes",
  'slug': "nextjs13",
  'description': "Here is a string of text about a description",
  'category': ['framework', 'javascript'],
  'sections': [
    {
       'title': 'context',
       'html': <SectionsOne />
    },
    {
       'title': 'useEffect',
       'html': <SectionsTwo />
    },
  ],
}

export default nextJs13NotesNotes