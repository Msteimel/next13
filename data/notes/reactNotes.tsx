

const SectionsOne = () => {
  return (
    <p>Here are some notes about react</p>
  )
}

const SectionsTwo = () => {
  return (
    <p>Here are some different notes about react</p>
  )
}

const reactNotes: {
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
  title: "React",
  slug: "react",
  description: "Here is a string of text about a description",
  category: ["framework", "javascript"],
  sections: [
    {
      title: "context",
      html: <p>Here are some notes about react</p>
    },
    {
      title: "useEffect",
      html: <p>Here are some different notes about react</p>
    },
  ],
  resources: [
    {
      text: "React Website",
      url: "https://react.dev/reference/react",
      description: "React's official docs",
    },
  ],
};


export default reactNotes