export default defineEventHandler(async event => {
//   // handle query params
//   const { name } = getQuery(event);
//   //   handle post data
//   const { age } = await readBody(event);
//   //   api call with private key
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=Fq74hQ7GyUbD5Mq7UVY4JrzvRHumSvX5RrYNa0DO`
  );
  return data;
});
