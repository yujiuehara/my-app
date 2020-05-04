import React from 'react'

const EventForm = () => {
    return(
        <>
        <h4>イベント作成フォーム</h4>
        <form>
            <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
            <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
        </form>
        </>
    )
}


export default EventForm