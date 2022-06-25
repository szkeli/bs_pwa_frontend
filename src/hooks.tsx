import { useEffect, useState } from "react";

export function useLoginStatus() {
  const [state, setState] = useState<string | undefined | null>("");

  useEffect(() => {
    setState(localStorage.getItem("token"));
  }, [state]);

  useEffect(() => {
    if (!state) return;
    localStorage.setItem("token", state);
  }, [state]);

  return {
    loginState: state,
    setLoginState: (value: string | undefined) => {
      setState(value);
    },
    removeLoginState: () => {
      localStorage.removeItem("token");
      setState(null);
    },
  };
}

export interface UniversitySelectorProps {
  id: string;
  logoUrl: string;
  name: string;
}

export function useUniversitySelector() {
  const [state, setState] = useState<
    UniversitySelectorProps | undefined | null
  >(
    JSON.parse(
      localStorage.getItem("university") as string
    ) as unknown as UniversitySelectorProps
  );

  return {
    universityState: state,
    setUniversityState: (value: UniversitySelectorProps) => {
      localStorage.setItem("university", JSON.stringify(value));
      setState(value);
    },
    removeUniversityState: () => {
      localStorage.removeItem("university");
      setState(null);
    },
  };
}
