import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoLink() {
  return (
    <Link href="/" title="Pagina Inicial">
      <Image alt="" src="/assets/Brand-Logo.svg" width={115} height={32} />
    </Link>
  );
}
