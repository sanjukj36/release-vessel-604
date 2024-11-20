import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { cn } from "@/lib/utils";
import image from "../../../assets/general.png";

function General(props) {
  return (
    <PageWrapper>
      <Title title="Machinery Overview" className="uppercase" />
      <div className="relative">
        <img className="w-full" src={image} />
        <Nav
          href={"/dg/dg1"}
          className="absolute top-[25%] right-[10%]"
          title="dg1"
        />
        <Nav
          href={"/dg/dg2"}
          className="absolute top-[25%] right-[20%]"
          title="dg2"
        />
        <Nav
          href={"/dg/dg3"}
          className="absolute top-[33%] right-[20%]"
          title="dg3"
        />
        <Nav
          href={"/dg/dg4"}
          className="absolute top-[33%] right-[10%]"
          title="dg4"
        />
        <Nav
          href={"http://192.168.18.99:3002/me_condition_overview"}
          className="absolute w-[400px] h-[200px] top-[48%] right-[10%]"
          title="Main Engine"
          atag
        />
        <Nav
          href={"http://192.168.18.99:3002/me_condition_overview"}
          className="absolute w-[400px] h-[200px] top-[48%] left-[15%]"
          title="Main Engine"
          atag
        />
        <Nav
          href={"/air-compressor-system"}
          className="absolute bottom-[16%] left-[22%]"
          title="compressor"
        />
      </div>
    </PageWrapper>
  );
}

General.propTypes = {};

export default General;

function Nav({ href, className = "", title = "", atag = false }) {
  if (atag) {
    return (
      <a
        to={href}
        className={cn("w-[100px] h-[50px]", className)}
        href={href}
        target="__blank"
      >
        {/* <div>{title}</div> */}
      </a>
    );
  }

  return (
    <Link to={href} className={cn("w-[100px] h-[50px]", className)} href={href}>
      {/* <div>{title}</div> */}
    </Link>
  );
}
