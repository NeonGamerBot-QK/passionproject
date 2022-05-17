export function compileLines(body: string): string[] {
return body.split("\n")
.join("{sep}")
.split("<br>")
.join("{sep}")
.split("{sep}").filter(Boolean);
}