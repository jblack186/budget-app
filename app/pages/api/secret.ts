import { NextApiHandler } from "next";
import { getSession } from "next-auth/client";

const secretHandler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    res.end(
      `Welcome ${session.user.email ?? session.user.name
      }`
    );
  } else {
    res.statusCode = 403;
    res.end(`access denied`);
  }
};

export default secretHandler;
