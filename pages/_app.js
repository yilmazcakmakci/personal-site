import Router from "next/router";
import withGA from "next-ga"
import 'normalize.css'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default withGA("UA-148352427-2", Router)(MyApp)