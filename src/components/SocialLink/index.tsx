import React from "react";
import { CustomLink } from "./styles";
import Image from "next/image";

interface SocialLinkProps {
  imgpath: string;
  link: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, imgpath }) => (
  <CustomLink target="_blank" href={link}>
    <Image src={imgpath} alt={imgpath} width="56" height="56" />
  </CustomLink>
);

export default SocialLink;
