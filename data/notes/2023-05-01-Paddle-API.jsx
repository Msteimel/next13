export const PaddleAPI = {
  slug: 'paddle-api',
  public: true, // if false, don't show in main list of notes, if false they are more work notes
  metadata: {
    title: 'Paddle API',
    date: '2023-05-01',
    description: 'Paddle API Documentation notes',
    tags: ['paddle', 'api', 'documentation'],
  },
  content: {
    contentBlocks: [
      {
        introParagraph: true,
        sectionHeading: 'Paddle API',
        subHeading: 'Documentation notes',
        content: [
          {
            contentBlock: (
              <p>
                Paddle API is a RESTful API that allows you to access your
                Paddle account data programmatically. You can use it to automate
                your workflows and integrate Paddle with other services. There
                are a handle of different things you can do but I will be
                focusing on{' '}
                <a href="https://developer.paddle.com/getting-started/ae9ff2bcf42b1-about-selling-one-time-products-with-paddle">
                  selling one-time products
                </a>
              </p>
            ),
          },
        ],
      },
      {
        sectionHeading: 'Selling one-time products',
        content: [
          {
            contentSection: (
              <>
                <p>There are two avenues to do this:</p>
                <ul>
                  <li>
                    Upload your digital product to Paddle: then provide a
                    download link and instructions once payment succeeds
                  </li>
                  <li>
                    Host your digital platform outside of paddle, then provide a
                    link and instructions onces payment succeeds
                  </li>
                </ul>
              </>
            ),
          },
          {
            contentSection: (
              <p>
                {' '}
                Paddle can dynamically generate a license key for your product,
                which you can then provide to your customer. The code is
                generated once payment has successfully be processed via a
                fulfillment webhook
              </p>
            ),
          },
          {
            contentSection: (
              <>
                <p>
                  It looks like there are four different fulfillment methods
                </p>
                <ul>
                  <li>Server Notification</li>
                  <li>Download</li>
                  <li>Pre-loaded License list</li>
                  <li>Paddle License</li>
                </ul>
                <p>Server Notification seems to be the ticket for t.</p>
              </>
            ),
          },
          {
            sectionHeading: 'Server Notification',
            contentSection: (
              <>
                <p>
                  Server Notification is a webhook that is sent to your server
                  once payment has been processed. It contains a payload of
                  information about the transaction, including the license key
                </p>
                <ul>
                  <li>
                    <a href="/webhook-reference/product-fulfillment">
                      Set the webhook URL
                    </a>{' '}
                    to an endpoint where you can receive requests from Paddle to
                    generate a new license code. Your endpoint will need to
                    respond with a{' '}
                    <a href="/webhook-reference/product-fulfillment#responding-to-fulfillment-webhooks">
                      HTTP 200
                    </a>
                    .
                  </li>
                  <li>
                    <a href="/webhook-reference/product-fulfillment/fulfillment-webhook">
                      Click here
                    </a>{' '}
                    for a list of fields sent within the webhook request, as
                    well as optional custom fields.
                  </li>
                  <li>
                    Upload your product or provide a URL where it can be
                    downloaded. This link will be included in the fulfillment
                    email sent to buyers.
                  </li>
                  <li>
                    Set the price in any currency you wish to support. You may
                    also enable additional currencies - this can be set to track
                    the value of your default currency according to the exchange
                    rate, or you can "override" and set a specific amount for
                    each currency.
                  </li>
                  <li>
                    Optionally, add activation instructions to include within
                    the fulfillment email, and specify the Thank You page URL to
                    send your buyers to after they complete the checkout.
                  </li>
                </ul>
                <p>
                  The Fulfillment webhook has a <code>p_quantity</code> endpoint
                  to pass the number being bought.
                </p>
              </>
            ),
          },
        ],
      },
      {
        sectionHeading: 'Gather checkout details',
        content: [
          {
            contentSection: (
              <>
                <p>
                  Ii looks like for the project I'm on all this info is already
                  connected
                </p>
                <ul>
                  <li>You need your Auth ID</li>
                  <li>Vendor ID</li>
                  <li>Product ID</li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        sectionHeading: 'Connect the Paddle Checkout',
        content: [
          {
            contentSection: (
              <>
                <p>
                  Import the Paddle js Library. This has already been done on
                  the project, I believe. Initialize it, which has also been
                  done, we just need to add a count.
                </p>
                <p>
                  The webhook config needs to be set up through Paddle admin,
                  which it looks like it's already been for this project.
                </p>
              </>
            ),
          },
        ],
      },
      {
        sectionHeading: 'Generate a license key',
        content: [
          {
            contentSection: (
              <>
                <p>It looks like</p>
              </>
            ),
          },
        ],
      },
    ],
  },
  references: {
    reference: [
      {
        link: 'https://developer.paddle.com/api-reference/1384a288aca7a-api-reference',
        text: 'Paddle API',
        description: 'Paddle API official documentation',
      },
      {
        link: 'https://developer.paddle.com/getting-started/0b1b4d7350d42-create-a-one-time-product',
        text: 'Create a one-time product',
        description:
          'Paddle API official documentation on how to create a one-time product',
      },
      {
        link: 'https://developer.paddle.com/webhook-reference/da25d9740f4c7-fulfillment-webhook',
        text: 'Fulfillment Webhook',
        description:
          'Paddle API official documentation on fulfillment webhooks',
      },
      {
        link: 'https://developer.paddle.com/getting-started/73e52c2e8042c-connect-the-paddle-checkout',
        text: 'Connect the Paddle Checkout',
        description:
          'Paddle API official documentation on how to connect the paddle checkout',
      },
      {
        link: 'https://developer.paddle.com/getting-started/ee510beda96b3-about-paddle-webhooks',
        text: 'About Paddle Webhooks',
        description:
          'Paddle API official documentation on how to set up webhooks',
      },
      {
        link: 'https://developer.paddle.com/api-reference/4c7d88de574be-generate-license',
        text: 'Generate License',
        description:
          'Paddle API official documentation on how to generate a license',
      },
    ],
  },
};
