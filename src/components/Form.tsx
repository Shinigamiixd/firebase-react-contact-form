import React, { useState } from "react"
import "./Form.css"
import db from "../services/firebase_config"
import { collection, addDoc } from "@firebase/firestore"

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    console.log(name, email, message)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (name.length < 1) {
            alert("Please enter a name")
            return
        }

        if (email.length < 6) {
            alert("Please enter an email")
            return
        }

        if (message.length < 10) {
            alert("Please enter a message")
            return
        }

        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                message: message,
                date: new Date()
            })
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    return (
        <form>
            <div>
                <label>Name</label>
                <div>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-name"
                    />
                </div>
            </div>

            <div>
                <label>Email</label>
                <div>
                    <input
                        type="email"
                        placeholder="johndoe@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-email"
                    />
                </div>
            </div>

            <div>
                <label>Message</label>
                <div>
                    <textarea
                        placeholder="I used to rule the world 
                        Seas would rise when I gave the word"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input-message"
                        rows={5}
                    />
                </div>
            </div>

            <button type="submit" onClick={handleSubmit}>
                Send
            </button>
        </form>
    )
}

export default Form
