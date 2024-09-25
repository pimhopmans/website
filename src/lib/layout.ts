export enum BreakPoint {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
}

export const breakPoints: { [key in BreakPoint]: number } = {
  [BreakPoint.xs]: 499,
  [BreakPoint.s]: 699,
  [BreakPoint.m]: 700,
  [BreakPoint.l]: 1000,
  [BreakPoint.xl]: 1374,
};

export const isMobile = window.innerWidth < breakPoints[BreakPoint.s];
export const isDesktop = !isMobile;

export const media = (breakPoint: BreakPoint) =>
  ({
    [BreakPoint.xs]: `@media screen and (max-width: ${
      breakPoints[BreakPoint.xs]
    }px)`,
    [BreakPoint.s]: `@media screen and (max-width: ${
      breakPoints[BreakPoint.s]
    }px)`,
    [BreakPoint.m]: `@media screen and (min-width: ${
      breakPoints[BreakPoint.m]
    }px)`,
    [BreakPoint.l]: `@media screen and (min-width: ${
      breakPoints[BreakPoint.l]
    }px)`,
    [BreakPoint.xl]: `@media screen and (min-width: ${
      breakPoints[BreakPoint.xl]
    }px)`,
  }[breakPoint]);
