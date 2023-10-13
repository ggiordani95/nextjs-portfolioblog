type TForm = {
  username: string | undefined;
  pass: string | undefined;
};

export async function isUserAuth(login: TForm) {
  const username = process.env.API_USERNAME;
  const password = process.env.API_PASSWORD;
  const credentials = btoa(username + ":" + password);
  try {
    const response = await fetch("/api/authorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(login),
    });
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
