import React from "react";

import Link from "next/link";

function Button({ styles, type, onClick, path, value }) {
  return (
    <button className={styles} type={type} onClick={onClick}>
      {path ? <Link href={path}>{value}</Link> : value}
    </button>
  );
}

export default Button;
