import "https://deno.land/x/dotenv/load.ts";

const watcher = Deno.watchFs("/home/" + Deno.env.get('FTP_USER'));
for await (const event of watcher) {
  if (event.kind === 'create') {
    console.log(">>>> event", event);
  }
}
