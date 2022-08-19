import React from 'react';

export default function Info() {
    return (
        <div className="info">
        <img src="../assets/trentyoliver.png" className="info--pic"/>
        <h1 className="info--name">Trent Keyes</h1>
        <p className="info--job-title">Frontend Developer</p>
        <p className="info--website">TrentKeyes.com</p>
        <button className="info--email"><img src="../assets/Mail.png" className="info--email-icon"/>Email</button>
        </div>
    )
}