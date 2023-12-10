import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./links.module.css";

export default component$(() => {
  return (
    <div>
      <h1 class={styles.title}>Links to demo apps</h1>
      <div class={styles.links}>
        <Link class="button" href="/demo/flower">
          Flower
        </Link>
        <Link class="button" href="/demo/todolist">
          Todo
        </Link>
      </div>
    </div>
  );
});
