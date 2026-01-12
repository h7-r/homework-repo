// 피자 제조 단계
async function loadPizzaSteps() {
  const response = await fetch("./pizzaSteps.json");
  const data = await response.json();
  return data.steps;
}

function orderPizza(menu) {
  console.log(menu + " 주문 접수 중...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.3) {
        reject(new Error("재료 소진")); // 실패했을 때
      } else {
        resolve(menu + " 준비 완료!"); // 성공했을 때
      }
    }, 2000);
  });
}

async function kiosk() {
  console.log("=== 키오스크 가동 ===");

  try {
    const result = await orderPizza("페퍼로니");
    console.log(result);
    console.log("페퍼로니 나왔습니다! 맛있게 드세요!");
  } catch (e) {
    console.log("죄송합니다, 재료가 소진되었습니다");
  }
}

kiosk();
