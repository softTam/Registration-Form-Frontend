"use client";

import React, { useState } from 'react';

export default function RegForm() {
    const [essayLength, setEssayLength] = useState(0);
    const [file, setFile] = useState(null);

    function handleFileChange(event: any) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }

    async function handleSubmit(event: any) {
        event.preventDefault();

        const data = {
            fullName: event.target.fullName.value,
            university: event.target.university.value,
            major: event.target.major.value,
            gradDate: event.target.gradDate.value,
            gender: event.target.gender.value,
            country: event.target.country.value,
            essay: event.target.essay.value,
        };

        console.log(data);
        alert("Successfully submit form");
    }

    function handleEssayChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEssayLength(event.target.value.length);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="fullName">Full name:</label>
                <input type="text" id="fullName" name="fullName" required autoComplete="off" style={{ border: "1px solid black", paddingLeft: "3px" }}/>
            </div>

            <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="university">University:</label>
                <input type="text" id="university" name="university" required autoComplete="off" style={{ border: "1px solid black", paddingLeft: "3px" }}/>
            </div>

            <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="major">Major:</label>
                <input type="text" id="major" name="major" required autoComplete="off" style={{ border: "1px solid black", paddingLeft: "3px" }}/>
            </div>

                <div className="w-full flex flex-col my-4"> {/* Added div to split the width */}
                    <label className="font-bold" htmlFor="gradDate">Graduation date (MM/YYYY):</label>
                    <input type="text" id="gradDate" name="gradDate" pattern="\d{2}/\d{4}" required autoComplete="off" style={{ border: "1px solid black", paddingLeft: "3px" }}/>
                </div>

                <div className="w-full flex flex-col my-4"> {/* Added div to split the width */}
                    <label className="font-bold" htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required style={{ border: "1px solid black" }}>
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Other/Non-binary</option>
                        <option value="not-disclose">Refuse to disclose</option>
                    </select>
                </div>

            <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="country">Country of Residence:</label>
                <input type="text" id="country" name="country" required autoComplete="off" style={{ border: "1px solid black", paddingLeft: "3px" }}/>
            </div>


            <div className="w-full flex flex-col my-4">
                    <label className="font-bold" htmlFor="resume">Resume (.pdf only):</label>
                    <input type="file" id="resume" name="resume" accept=".pdf" required onChange={handleFileChange} />  
            </div>

            <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="essay">Essay:</label>
                <label>Why are you interested in attending Cal Hacks 11.0? What are you interested in building? (1000 characters maximum)</label>
                <textarea
                    id="essay"
                    rows={8}
                    name="essay"
                    maxLength={1000}
                    className="w-full"
                    autoFocus
                    required
                    defaultValue={""} // Changed from defaultValue={0}
                    onChange={handleEssayChange}
                    style={{ border: "1px solid black", paddingLeft: "3px" }} // Added style to add space to the left border
                ></textarea>
                <p style={{ textAlign: "right" }}>{essayLength}/1000 characters</p>
            </div>

            <div className="w-full flex flex-row items-center my-4">
                <input type="checkbox" id="ageCheck" name="ageCheck" required autoComplete="off" />
                <label htmlFor="ageCheck" className="ml-2">I confirm that I am 18 years of age or older</label>
            </div>

            <button className="px-4 py-2 w-40 bg-gray-700 text-white font-medium mt-4" type="submit">Submit</button>
        </form>
    );
}
