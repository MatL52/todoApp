import "./styles.css";

const onClickAdd = () => {
  // alert();
  const inputText = document.getElementById("addText").value;
  // console.log(inputText);
  document.getElementById("addText").value = "";
  // タグの追加
  const li = document.createElement("li");
  // console.log(li);
  const div = document.createElement("div");
  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(pTag);
  pTag.innerText = inputText;
  div.innerText = inputText;
  div.appendChild(CompleteButton);
  div.appendChild(deleteButton);
  // console.log(li);
  div.innerText = inputText;
  // console.log(li);

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    const deleteTarget = div.parentNode;
    // document.getElementById("incomplete_list").removeChild(target);
    deleteFromInCompleteList(div.parentNode);
  });

  // 完了ボタン
  const CompleteButton = document.createElement("button");
  CompleteButton.innerText("完了");
  CompleteButton.addEventListener("click", () => {
    deleteFromInCompleteList(div.parentNode);
  });

  // 完了リストに追加する
  const addTarget = pTag.parentNode;
  const text = addTarget.firstElementChild.innerText;
  // divの中身の初期化
  addTarget.textContent = null;

  // 未完了リストに追加
  document.getElementById("uncomplete_list").appendChild(li);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

document
  .getElementById("add_bottun")
  .addEventListener("click", () => onClickAdd());
