import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from a Netlify Function!" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export { handler };
