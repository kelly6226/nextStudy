import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <form>
      <h2>Create</h2>
      {children}
    </form>
  );
}
