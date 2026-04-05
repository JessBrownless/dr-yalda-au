"use client";

import { useEffect } from "react";

export default function OverflowDebug() {
  useEffect(() => {
    const offenders = Array.from(document.querySelectorAll("*")).filter(
      (el) => el.getBoundingClientRect().right > document.documentElement.clientWidth
    );
    if (offenders.length) {
      console.warn("OVERFLOW OFFENDERS:", offenders.map((el) => ({
        tag: el.tagName,
        class: el.className,
        right: Math.round(el.getBoundingClientRect().right),
        viewportWidth: document.documentElement.clientWidth,
      })));
    } else {
      console.log("No overflow offenders found.");
    }
  }, []);

  return null;
}
