import Link from "next/link";

export function ButtonLink({ href, children, variant = "primary" }) {
  const className = variant === "secondary" ? "button button--secondary" : "button";

  if (href?.startsWith("http") || href?.startsWith("tel:") || href?.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
