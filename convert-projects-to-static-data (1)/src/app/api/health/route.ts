export const dynamic = "force-dynamic";

// No database is required by this app anymore — the Projects section now
// reads from a static, bundled data file (see src/data/projects.ts), so the
// health check simply confirms the server is up and responding.
export async function GET() {
  return Response.json({ ok: true });
}
