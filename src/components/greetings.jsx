const Greetings = ({ lang, children }) => {

    const languages = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    return (
        <div className="greetings">
            <p>{languages[lang]} {children}</p>
        </div>
    )

}

export default Greetings;