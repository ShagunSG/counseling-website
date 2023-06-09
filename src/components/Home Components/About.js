import React from "react";
import '../../App.css';
import counselorImg from '../../Images/WhoAreWe img.jpg';

export default function WhoAreWe() {
    return(
        <div className="justify-between">
            <p className="justify-center text-center text-3xl font-extrabold mt-10 pb-4">Who are We?</p>
            <div className="lg:container mx-auto flex px-10 md:flex-row flex-col items-center">
                <img className="object-center object-cover rounded w-2/5 h-2/5" alt="hero" src={counselorImg} />
                <div className="leading-relaxed lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">        
                University life can be fun and fulfilling, providing the students various opportunities to acquire new skills 
                and knowledge, develop their character. This is an important milestone before they join the workforce and launch their career.
                However, adjusting to a new environment away from home and managing academic and personal demands may induce high levels of stress and 
                anxiety. Confiding in family or friends is a good coping strategy but if the issues being faced by a student persist over a long period of 
                time, it may be imperative to seek professional help.
                IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a student wherein he/she can 
                discuss personal issues or academic challenges and seek help from a professional counsellor.
                </div> 
            </div>
        </div>
    )
}