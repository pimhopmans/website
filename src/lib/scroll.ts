export function smoothScroll(id: string) {
  // @ts-expect-error don't know how to fix
  document?.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
}
