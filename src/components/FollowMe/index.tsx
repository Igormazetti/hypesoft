import React from "react";
import data from "./socialdata";
import SocialLink from "../SocialLink";

import { Container } from "./styles";

const FollowMe: React.FC = () => (
  <Container>
    <div>
      {data &&
        data.map((item, index) => (
          <SocialLink
            key={index}
            link={item.link}
            imgpath={item.imgPath.src}
          ></SocialLink>
        ))}
    </div>
  </Container>
);

export default FollowMe;
