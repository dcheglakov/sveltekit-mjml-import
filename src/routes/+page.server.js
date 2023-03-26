import Email from "./Email.svelte";
import mjml2html from "mjml";

const { html } = Email.render({
  title: "Title",
  preview: "Preview",
  content: "Content",
});

const email = mjml2html(html).html;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { email };
}
