import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody"/>
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
        <button>全てのイベントを削除する</button>
      </form>
    </div>
  );
}

export default App;
