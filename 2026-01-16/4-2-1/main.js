async function fetchs(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();
    console.log("성공 :", data);
  } catch (error) {
    console.error("에러 :", error.message);
  }
}

// 정상 요청 (200)
fetchs("https://jsonplaceholder.typicode.com/posts/1");

// 에러 요청 (
fetchs("https://jsonplaceholder.typicode.com/posts/9999");
