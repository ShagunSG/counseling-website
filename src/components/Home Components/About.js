import React from "react";
import '../../App.css';
import counselorImg from '../../Images/WhoAreWe img.jpg';

export default function WhoAreWe() {
    return(
        <div className="justify-between">
            <p className="justify-center text-center text-3xl font-extrabold mt-10">Who are We?</p>
            <img src={counselorImg} alt="This is us" className="mx-10 my-12 w-2/5 h-2/5 float-left hidden lg:block"/>
            <div className="mx-12 lg:my-10 my-3 te font-bold" style={{fontFamily: 'Inconsolata'}}>University life can be fun and fulfilling, providing the students various opportunities to acquire new skills 
                and knowledge, develop their character. This is an important milestone before they join the workforce and launch their career.
                However, adjusting to a new environment away from home and managing academic and personal demands may induce high levels of stress and 
                anxiety. Confiding in family or friends is a good coping strategy but if the issues being faced by a student persist over a long period of 
                time, it may be imperative to seek professional help.
                IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a student wherein he/she can 
                discuss personal issues or academic challenges and seek help from a professional counsellor.
            </div> 
        </div>
    )
}