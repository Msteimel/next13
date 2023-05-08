import { v4 as uuid } from 'uuid';

export const CopyrightSociety = {
  id: uuid(),
  public: false, // if false, don't show in main list of notes, if false they are more work notes
  metadata: {
    title: 'Copyright Society LMS + AMS + workflow notes',
    date: '2023-05-03',
    description: 'Notes on the LMS + AMS + workflow for the Copyright',
    tags: ['lms', 'ams', 'workflow', 'notes'],
  },
  content: {
    contentBlocks: [
      {
        introParagraph: true,
        sectionHeading: 'CopyRight Society Overview',
        subHeading: 'As I understand it',
        content: [
          {
            contentBlock: (
              <>
                <p>
                  The CopyRight Society is a membership based organization that
                  provides a platform for artists to register their work and
                  collect royalties. The platform is a combination of a Learning
                  Management System (LMS) and an Association Management System
                  (AMS). The LMS is used to onboard new members and provide them
                  with educational resources. The AMS is used to manage the
                  membership and collect dues. The workflow is as follows:
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Wordpress</strong>: is pretty much just a public
                      site they use to share information with the public. It is
                      not used for any membership or LMS functionality from what
                      I know.
                    </p>
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        sectionHeading: 'Additional resources to explore',
        content: [
          {
            contentSection: (
              <>
                <ul>
                  <li>
                    <p>
                      <strong>MemberPress</strong>: is a Wordpress plugin that
                      is used to manage the membership. It is used to collect
                      dues and manage the membership. You can hide things behind
                      a paywall and restrict access to certain content. It is
                      also used to manage the membership directory. It includes
                      an LMS. It has QuickBooks intergrations, along with many
                      others. There's a ton there, and it feels "too good to be
                      true", but it might be the answer.
                    </p>
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
    ],
  },
};
