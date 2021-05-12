import firestore from './firebase'

export const Test = () => {
  const addHandler = () => {
    firestore.collection("users").add({
      name: "test",
      age: 30
    })
    .then((doc) => {
      console.log(`追加に成功しました (${doc.id})`);
    })
    .catch((error) => {
      console.log(`追加に失敗しました (${error})`);
    });
  }

  return (
    <button onClick={addHandler}>
      Firestoreにデータを追加
    </button>
  )
}