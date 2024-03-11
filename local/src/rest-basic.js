import React from 'react'


export default function RestBasic(){
    let [serverTime, setServerTime] = React.useState('')
    let [footballResult, setFootballResult] = React.useState('')

    const onClickShowTime =() =>{
        fetch('/api/server-time')
        .then(Response => Response.json())
        .then(result => {
            let r = <>{result.hour}:{result.minute}:{result.second}</>
            setServerTime(r)
        })
        .catch(err => alert(err))
    }
    const onClickFootballResult = () =>{
        fetch('/api/football-result')
        .then(Response => Response.text())
        .then(result => setFootballResult(result))
        .catch(err => alert(err))
    }
    return (
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <button onClick={inClickShowTime}>แสดงเวลาจาก Server</button>
            <div>{serverTime}</div>
            <br/>
            <button onClick ={onClickFootballResult}>แสดงผลการแข่งขัน</button><br/>
            <div dangerouslySetInnerHTML={{__html:footballResult}}></div>
        </div>
    )
}