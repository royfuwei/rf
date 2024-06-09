export async function GET(request: Request) {
  const data = {
    message: 'Hello, from RFJS Web API!',
  };
  return new Response(JSON.stringify(data));
}
