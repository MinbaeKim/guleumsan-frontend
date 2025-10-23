// functions/api/data.js  -> GET /api/data
export const onRequest = async () => {
  return new Response(JSON.stringify({ backTest: "안녕하세요~~~" }), {
    headers: { "content-type": "application/json" },
  });
};
