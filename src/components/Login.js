import styles from './Login.module.css'

function Login() {
    return(
        <form className={styles.formContainer}>
            <h1 className={styles.titleLogin}>Login</h1>
            <p className={styles.textLogin}>Digite seu e-mail e senha nos campos abaixo</p>
            <input placeholder="E-mail" className={styles.inputLogin}></input>
            <input placeholder="Senha" className={styles.inputLogin}></input>
            <button href="#" className={styles.buttonLogin}>Entrar</button>
        </form>
    )
}

export default Login