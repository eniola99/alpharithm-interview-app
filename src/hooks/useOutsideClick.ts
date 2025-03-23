/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const useOutsideClick = (callback: () => void, ref: any) => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
