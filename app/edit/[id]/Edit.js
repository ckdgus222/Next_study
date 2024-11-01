"use client";

import { useState } from "react";

const Edit = ({ _id, title, content }) => {
    const [input, setInput] = useState({
        title: title || "",
        content: content || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dieUrl = `/api/put/upDate?id=${_id}`;

        try {
            const response = await fetch(dieUrl, {
                method: 'PUT',
                body: JSON.stringify(input),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to update: ${response.status}`);
            }

            const result = await response.json();
            console.log("Update successful:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" onChange={handleChange} value={input.title} placeholder="Title" />
            <input name="content" onChange={handleChange} value={input.content} placeholder="Content" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Edit;
