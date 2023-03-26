import { Handlers, PageProps } from "$fresh/server.ts";



export const handler: Handlers<string | null> = {
   GET(_, ctx) {
    const reader =Deno.readTextFileSync("./README.md")
    return ctx.render(reader);
  },
};

export default function Page({ data }: PageProps<string | null>) {
  if (!data) {
    return <h1>Not found</h1>;
  }
 
  return (
    <div>
      {data}
    </div>
  );
}