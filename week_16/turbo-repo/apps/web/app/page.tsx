
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import { Admin } from "@repo/ui/Admin";



export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web">hey there</Button>
          <Admin appName="web">hey there from admin</Admin>
    </div>
  );
}
